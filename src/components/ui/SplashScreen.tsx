"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { InfiniteCanvas } from "./infinite-canvas";
import manifest from "./infinite-canvas/manifest.json";

type Phase = "loading" | "active" | "exiting" | "done";

export function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [textureProgress, setTextureProgress] = useState(0);
  const [visualProgress, setVisualProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const rafRef = useRef<number | null>(null);

  // Check sessionStorage and prefers-reduced-motion on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAlreadyShown = sessionStorage.getItem("ug_splash");
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      setIsReducedMotion(prefersReduced);

      if (isAlreadyShown || prefersReduced) {
        setPhase("done");
      } else {
        // Prevent scrolling while splash screen is active
        document.body.style.overflow = "hidden";
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

  // Smooth visual progress bar lerp
  useEffect(() => {
    if (phase !== "loading") return;

    const animate = () => {
      const diff = textureProgress - visualProgress;
      if (diff > 0.1) {
        setVisualProgress((prev) => {
          const next = prev + diff * 0.08;
          if (next >= 99.5 && textureProgress === 100) {
            // Once loaded, transition to active
            setTimeout(() => {
              setPhase("active");
            }, 300);
            return 100;
          }
          return next;
        });
        rafRef.current = requestAnimationFrame(animate);
      } else if (textureProgress === 100) {
        setVisualProgress(100);
        setTimeout(() => {
          setPhase("active");
        }, 300);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [textureProgress, visualProgress, phase]);

  const handleEnter = useCallback(() => {
    setPhase("exiting");
    if (typeof window !== "undefined") {
      sessionStorage.setItem("ug_splash", "1");
      document.body.style.overflow = "";
    }
  }, []);

  // Keyboard skip/enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (phase === "active" && (e.key === "Enter" || e.key === " ")) {
        handleEnter();
      } else if (e.key === "Escape" && phase !== "done") {
        handleEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase, handleEnter]);

  if (phase === "done" || isReducedMotion) return null;

  return (
    <AnimatePresence onExitComplete={() => setPhase("done")}>
      {phase !== "exiting" && (
        <motion.div
          key="splash"
          className="splash-overlay"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -40,
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Canvas is loaded in the background */}
          <div className="splash-canvas-wrapper">
            <InfiniteCanvas 
              media={manifest} 
              onTextureProgress={setTextureProgress}
              backgroundColor="#070708"
              fogColor="#070708"
            />
          </div>

          {/* Loading Overlay */}
          <AnimatePresence>
            {phase === "loading" && (
              <motion.div
                key="loader"
                className="splash-loader-screen"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
              >
                <div className="splash-loader-content">
                  <motion.h1 
                    className="splash-loader-name"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Usman Ghani
                  </motion.h1>
                  <motion.p 
                    className="splash-loader-role mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Product &amp; Software Engineer
                  </motion.p>
                  
                  <div className="splash-loader-bar-container">
                    <div 
                      className="splash-loader-bar-fill" 
                      style={{ transform: `scaleX(${visualProgress / 100})` }} 
                    />
                  </div>
                  
                  <span className="splash-loader-percentage mono">
                    {Math.round(visualProgress)}%
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Overlay Card and Info */}
          {phase === "active" && (
            <div className="splash-interactive-overlay">
              <motion.div 
                className="splash-center-content"
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="splash-title">Usman Ghani</h1>
                <p className="splash-subtitle mono">Product &amp; Software Engineer</p>
                
                <button 
                  className="splash-enter-btn"
                  onClick={handleEnter}
                  aria-label="Enter Portfolio"
                >
                  <span className="splash-btn-bg" />
                  <span className="splash-btn-text">Enter Portfolio</span>
                </button>

                <p className="splash-hint-text mono">
                  WASD / Drag mouse to explore the gallery
                </p>
              </motion.div>

              {/* Skip button in the top right */}
              <motion.button
                className="splash-skip-btn mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                onClick={handleEnter}
                aria-label="Skip intro"
              >
                skip
              </motion.button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
