"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { InfiniteCanvas } from "./infinite-canvas";
import manifest from "./infinite-canvas/manifest.json";
import { MagneticButton } from "./MagneticButton";

const ArrowIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transition: "transform 150ms ease" }}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

type Phase = "loading" | "active" | "exiting" | "done";

export function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [textureProgress, setTextureProgress] = useState(0);
  const [visualProgress, setVisualProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const rafRef = useRef<number | null>(null);

  const [nudgeClass, setNudgeClass] = useState<"nudge-initial" | "nudge-idle" | "">("nudge-initial");
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetIdleTimer = useCallback(() => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    setNudgeClass("");
    
    // Resume idle animation after 4 seconds of inactivity
    idleTimerRef.current = setTimeout(() => {
      setNudgeClass("nudge-idle");
    }, 4000);
  }, []);

  useEffect(() => {
    if (phase !== "active") return;

    const events = ["mousemove", "mousedown", "wheel", "touchmove", "keydown", "touchstart"];
    const handleActivity = () => {
      resetIdleTimer();
    };

    events.forEach((event) => {
      window.addEventListener(event, handleActivity, { passive: true });
    });

    // Clear "nudge-initial" after 3 seconds (approx 3 runs of 1s animation)
    const initialTimeout = setTimeout(() => {
      setNudgeClass((prev) => (prev === "nudge-initial" ? "" : prev));
    }, 3000);

    // If the user remains completely idle from the start, trigger "nudge-idle" at 5 seconds
    idleTimerRef.current = setTimeout(() => {
      setNudgeClass("nudge-idle");
    }, 5000);

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      clearTimeout(initialTimeout);
    };
  }, [phase, resetIdleTimer]);

  // Check theme, sessionStorage and prefers-reduced-motion on mount
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

      // Initialize theme
      const initialTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
      setTheme(initialTheme);

      // Listen for theme mutations (e.g. if changed via toggle)
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.attributeName === "data-theme") {
            const nextTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
            setTheme(nextTheme);
          }
        }
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
      return () => observer.disconnect();
    }
  }, []);

  // Restore scrolling on unmount
  useEffect(() => {
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

  // Keyboard enter/skip
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

  const bgAndFogColor = theme === "light" ? "#f9f2f2" : "#070708";

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
          {/* Canvas loaded in the background */}
          <div className="splash-canvas-wrapper">
            <InfiniteCanvas 
              media={manifest} 
              onTextureProgress={setTextureProgress}
              backgroundColor={bgAndFogColor}
              fogColor={bgAndFogColor}
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

          {/* Active Overlay (No card, button at top right, name in center, hint at bottom right) */}
          {phase === "active" && (
            <div className="splash-interactive-overlay">
              <motion.div 
                className="splash-center-content"
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="splash-title">USMAN GHANI</h1>
              </motion.div>

              {/* View Portfolio Button in the top right corner */}
              <motion.div 
                className="splash-view-portfolio-btn-wrapper"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <MagneticButton
                  className="button button-primary ghost-hover"
                  onClick={handleEnter}
                  icon={ArrowIcon}
                >
                  View Portfolio
                </MagneticButton>
              </motion.div>

              {/* Instruction hint at bottom right */}
              <motion.div 
                className="splash-bottom-right-hint mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className={nudgeClass}>
                  scroll down/up, or click View Portfolio button
                </span>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
