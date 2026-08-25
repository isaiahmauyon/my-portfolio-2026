"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SoundCtx = { enabled: boolean; toggle: () => void };

const Ctx = createContext<SoundCtx>({ enabled: true, toggle: () => {} });

export function useSound() {
  return useContext(Ctx);
}

/** Elements that make a hover sound. */
const HOVER_SELECTOR = "a, button, .exp-row, [data-sound]";

export default function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true);
  const acRef = useRef<AudioContext | null>(null);
  const lastRef = useRef<Element | null>(null);

  // Load saved preference.
  useEffect(() => {
    try {
      if (localStorage.getItem("sound") === "off") setEnabled(false);
    } catch {
      /* ignore */
    }
  }, []);

  const ensureContext = useCallback(() => {
    if (!acRef.current) {
      try {
        const AC =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        acRef.current = new AC();
      } catch {
        return null;
      }
    }
    if (acRef.current && acRef.current.state === "suspended") {
      void acRef.current.resume();
    }
    return acRef.current;
  }, []);

  // Browsers block audio until a user gesture — unlock on the first one.
  useEffect(() => {
    const unlock = () => ensureContext();
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, [ensureContext]);

  const playTick = useCallback(() => {
    const ac = acRef.current;
    if (!ac || ac.state !== "running") return;
    const now = ac.currentTime;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(1500, now);
    osc.frequency.exponentialRampToValueAtTime(1950, now + 0.03);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.045, now + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    osc.connect(gain).connect(ac.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }, []);

  // Delegated hover listener — plays once per element entered.
  useEffect(() => {
    const onOver = (e: PointerEvent) => {
      if (!enabled) return;
      const target = e.target as Element | null;
      const el = target?.closest?.(HOVER_SELECTOR) as Element | null;
      const valid = el && !el.closest("[data-no-sound]") ? el : null;
      if (valid === lastRef.current) return;
      lastRef.current = valid;
      if (valid) playTick();
    };
    document.addEventListener("pointerover", onOver);
    return () => document.removeEventListener("pointerover", onOver);
  }, [enabled, playTick]);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("sound", next ? "on" : "off");
      } catch {
        /* ignore */
      }
      if (next) ensureContext(); // toggling on is a gesture — unlock now
      return next;
    });
  }, [ensureContext]);

  return <Ctx.Provider value={{ enabled, toggle }}>{children}</Ctx.Provider>;
}
