"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ─── Photos ──────────────────────────────────────────────────────────────────
const PHOTOS = [
  "/assets/usman/usman_ghani.jpeg",
  "/assets/usman/runner_up.jpeg",
];

// ─── GLSL ─────────────────────────────────────────────────────────────────────
const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;

uniform vec2  u_res;
uniform float u_time;
uniform float u_dissolve;   // 0 = show tex1, 1 = show tex2
uniform sampler2D u_tex1;
uniform sampler2D u_tex2;
uniform vec2  u_dim1;
uniform vec2  u_dim2;
uniform float u_photoR;     // circle radius as fraction of min(w,h)
uniform int   u_showPhoto;  // 0 or 1
uniform float u_fadeIn;     // 0→1 photo fade-in

/* ── Hash + value noise ──────────────────────────────────────── */
float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 43.5453);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  f = f*f*(3.0-2.0*f);
  return mix(
    mix(hash(i), hash(i+vec2(1,0)), f.x),
    mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x),
    f.y);
}
float fbm(vec2 p) {
  float v=0.0, a=0.5;
  for(int i=0;i<6;i++){v+=a*vnoise(p);p=p*2.13+vec2(1.7,9.2);a*=0.5;}
  return v;
}

/* ── Cover UV (object-fit: cover for circle) ─────────────────── */
vec2 coverUV(vec2 rel, vec2 dim) {
  float asp = dim.x / dim.y;
  if(asp >= 1.0) {
    return vec2(0.5 + rel.x*0.5/asp, 0.5 + rel.y*0.5);
  } else {
    return vec2(0.5 + rel.x*0.5, 0.5 + rel.y*0.5*asp);
  }
}

void main() {
  vec2 fc     = gl_FragCoord.xy;
  vec2 uv     = fc / u_res;
  float asp   = u_res.x / u_res.y;
  vec2  cen   = (uv - 0.5) * vec2(asp, 1.0);  /* aspect-correct centered */
  float dist  = length(cen);
  float t     = u_time;

  /* ── Background: domain-warped radial noise ─────────────────── */
  float angle = atan(cen.y, cen.x);
  vec2 polar  = vec2(dist*3.5 + t*0.16, angle/6.28318 + t*0.055);
  float warp  = fbm(polar*0.9 + t*0.06);
  float n     = fbm(polar + warp*1.1);

  float rings  = sin(dist*20.0 - t*2.8)*0.5+0.5;
  rings        = pow(rings, 4.0) * smoothstep(1.6, 0.0, dist);
  float pattern = n * smoothstep(1.8, 0.0, dist) * 0.75 + rings*0.35;

  vec3 bg      = vec3(0.027, 0.027, 0.031);
  vec3 acc1    = vec3(0.722, 0.231, 0.369);  /* #B83B5E */
  vec3 acc2    = vec3(0.910, 0.365, 0.459);  /* #e85d75 */

  vec3 col = bg
    + acc1 * pattern * 0.32
    + acc2 * rings   * 0.22;

  /* ── Photo circle ────────────────────────────────────────────── */
  if(u_showPhoto == 1 && u_photoR > 0.001) {
    vec2  pxCenter = u_res * 0.5;
    float radius   = u_photoR * min(u_res.x, u_res.y);
    float d        = length(fc - pxCenter);

    /* animated glow ring around circle */
    float glowPulse = 0.7 + 0.3*sin(t*1.8);
    float border    = smoothstep(radius+20.0, radius,     d)
                    * smoothstep(radius-3.0,  radius+10.0, d);
    float outerAura = smoothstep(radius+60.0, radius+8.0,  d) * 0.18 * glowPulse;

    col += acc1 * border * 0.95 * glowPulse;
    col += acc2 * outerAura;

    /* inside circle */
    float mask = smoothstep(radius+1.5, radius-1.5, d) * u_fadeIn;
    if(mask > 0.001) {
      vec2 rel = (fc - pxCenter) / radius;  /* [-1,1] */

      /* dissolve noise — radially biased from center */
      float dn  = fbm(rel*2.8 + vec2(t*0.04, 0.0));
      dn = dn*0.75 + length(rel)*0.25;

      float edge = 0.06;
      float dv   = u_dissolve;

      vec2 uv1 = coverUV(rel, u_dim1);
      vec2 uv2 = coverUV(rel, u_dim2);

      /* clamp so we don't sample outside texture */
      uv1 = clamp(uv1, 0.001, 0.999);
      uv2 = clamp(uv2, 0.001, 0.999);

      vec4 p1 = texture2D(u_tex1, uv1);
      vec4 p2 = texture2D(u_tex2, uv2);

      /* noise threshold dissolve */
      float mix01    = smoothstep(dv-edge, dv+edge, dn);
      vec3  photoCol = mix(p1.rgb, p2.rgb, mix01);

      /* glowing dissolve edge */
      float edgeGlow = 1.0 - abs(mix01*2.0-1.0);
      edgeGlow = pow(edgeGlow, 2.5) * step(0.02, dv) * step(dv, 0.98);
      photoCol += acc1 * edgeGlow * 1.4;

      col = mix(col, photoCol, mask);
    }
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

// ─── WebGL helpers ────────────────────────────────────────────────────────────
function mkShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(s));
    return null;
  }
  return s;
}
function mkProgram(gl: WebGLRenderingContext) {
  const vs = mkShader(gl, gl.VERTEX_SHADER, VERT);
  const fs = mkShader(gl, gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return null;
  const p = gl.createProgram()!;
  gl.attachShader(p, vs); gl.attachShader(p, fs);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(p));
    return null;
  }
  return p;
}
function loadTex(gl: WebGLRenderingContext, url: string) {
  return new Promise<{ tex: WebGLTexture; w: number; h: number }>((res, rej) => {
    const img = new Image();
    img.onload = () => {
      const tex = gl.createTexture()!;
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      res({ tex, w: img.naturalWidth, h: img.naturalHeight });
    };
    img.onerror = rej;
    img.src = url;
  });
}

// ─── Component ────────────────────────────────────────────────────────────────
type Phase = "loading" | "photo1" | "transitioning" | "photo2" | "exiting" | "done";

export function SplashScreen() {
  const [phase, setPhase]           = useState<Phase>("loading");
  const [photoReady, setPhotoReady] = useState(false);

  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const glRef       = useRef<WebGLRenderingContext | null>(null);
  const progRef     = useRef<WebGLProgram | null>(null);
  const rafRef      = useRef<number>(0);
  const startRef    = useRef<number>(0);
  const dissolveRef = useRef<number>(0);
  const dTargetRef  = useRef<number>(0);
  const fadeInRef   = useRef<number>(0);
  const tex1Ref     = useRef<{ tex: WebGLTexture; w: number; h: number } | null>(null);
  const tex2Ref     = useRef<{ tex: WebGLTexture; w: number; h: number } | null>(null);

  // Check session — never show twice
  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("ug_splash")) {
      setPhase("done");
    }
  }, []);

  // Init WebGL once
  useEffect(() => {
    if (phase === "done") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: true, alpha: false });
    if (!gl) { setPhase("done"); return; }
    glRef.current = gl;

    const prog = mkProgram(gl);
    if (!prog) { setPhase("done"); return; }
    progRef.current = prog;
    gl.useProgram(prog);

    // Fullscreen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Resize
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    startRef.current = performance.now();

    // Load textures
    Promise.all([loadTex(gl, PHOTOS[0]), loadTex(gl, PHOTOS[1])]).then(([t1, t2]) => {
      tex1Ref.current = t1;
      tex2Ref.current = t2;
      setPhotoReady(true);
      setPhase("photo1");
    }).catch(() => {
      // fallback: continue without photo
      setPhase("photo1");
    });

    // Render loop — all state via refs for perf
    const render = () => {
      const now   = performance.now();
      const t     = (now - startRef.current) / 1000;
      const gl    = glRef.current!;
      const prog  = progRef.current!;
      const c     = canvasRef.current!;

      // Smooth dissolve
      dissolveRef.current += (dTargetRef.current - dissolveRef.current) * 0.055;
      dissolveRef.current  = Math.max(0, Math.min(1, dissolveRef.current));

      // Photo fade in
      if (tex1Ref.current) {
        fadeInRef.current = Math.min(1, fadeInRef.current + 0.022);
      }

      const u = (name: string) => gl.getUniformLocation(prog, name);

      gl.uniform2f(u("u_res"), c.width, c.height);
      gl.uniform1f(u("u_time"), t);
      gl.uniform1f(u("u_dissolve"), dissolveRef.current);
      gl.uniform1f(u("u_photoR"), 0.22);
      gl.uniform1f(u("u_fadeIn"), fadeInRef.current);
      gl.uniform1i(u("u_showPhoto"), tex1Ref.current ? 1 : 0);

      const t1 = tex1Ref.current;
      const t2 = tex2Ref.current;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, t1?.tex ?? null);
      gl.uniform1i(u("u_tex1"), 0);
      gl.uniform2f(u("u_dim1"), t1?.w ?? 1, t1?.h ?? 1);

      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, t2?.tex ?? null);
      gl.uniform1i(u("u_tex2"), 1);
      gl.uniform2f(u("u_dim2"), t2?.w ?? 1, t2?.h ?? 1);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Phase transitions
  useEffect(() => {
    if (phase === "transitioning") {
      dTargetRef.current = 1.0;
      const id = setTimeout(() => setPhase("photo2"), 1100);
      return () => clearTimeout(id);
    }
    if (phase === "exiting") {
      sessionStorage.setItem("ug_splash", "1");
      const id = setTimeout(() => setPhase("done"), 750);
      return () => clearTimeout(id);
    }
  }, [phase]);

  const handleClick = useCallback(() => {
    setPhase(prev => {
      if (prev === "photo1") return "transitioning";
      if (prev === "transitioning" || prev === "photo2") return "exiting";
      return prev;
    });
  }, []);

  // Keyboard skip
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPhase("exiting");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (phase === "done") return null;

  const isExiting = phase === "exiting";

  return (
    <div
      className={`splash-overlay${isExiting ? " splash-exiting" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Skip intro"
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleClick(); }}
    >
      <canvas ref={canvasRef} className="splash-canvas" />

      {/* Name / title */}
      <div className={`splash-meta${photoReady ? " splash-meta-in" : ""}`}>
        <p className="splash-name">Usman Ghani</p>
        <p className="splash-role mono">Product &amp; Software Engineer</p>
      </div>

      {/* Tap hint */}
      <div className={`splash-hint mono${phase === "photo1" || phase === "photo2" ? " splash-hint-in" : ""}`}>
        {phase === "photo2" ? "tap anywhere to enter →" : "tap anywhere to continue"}
      </div>

      {/* ESC skip */}
      <button
        className="splash-skip mono"
        onClick={(e) => { e.stopPropagation(); setPhase("exiting"); }}
        aria-label="Skip splash"
        tabIndex={0}
      >
        skip
      </button>
    </div>
  );
}
