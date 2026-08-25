"use client";

import { useEffect, useState } from "react";
import { useSound } from "./SoundProvider";
import { SoundOnIcon, SoundOffIcon } from "./icons";

export default function SoundToggle() {
  const { enabled, toggle } = useSound();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      data-no-sound
      onClick={toggle}
      aria-label={enabled ? "Mute hover sound" : "Enable hover sound"}
      aria-pressed={enabled}
      className="flex size-[18px] items-center justify-center text-text-primary transition-opacity hover:opacity-60"
    >
      {mounted && !enabled ? <SoundOffIcon /> : <SoundOnIcon />}
    </button>
  );
}
