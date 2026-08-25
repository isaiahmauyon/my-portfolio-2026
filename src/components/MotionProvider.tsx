"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Makes every Framer Motion animation honor the user's reduced-motion setting. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
