"use client";

import { motion, type Variants } from "framer-motion";
import { siteConfig } from "@/data/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 0.5, 0.28, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-16 pt-24 sm:px-10 sm:pt-32 lg:px-[120px]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-[836px] flex-col gap-[18px]"
      >
        <motion.div variants={item} className="flex flex-col gap-4">
          <div className="flex items-center gap-[7px]">
            <span className="text-label-sm font-medium text-text-secondary">
              {siteConfig.roles[0]}
            </span>
            <span className="size-[6px] rounded-full bg-accent" />
            <span className="text-label-sm font-medium text-text-secondary">
              {siteConfig.roles[1]}
            </span>
          </div>
          <h1 className="max-w-[719px] text-[40px] font-medium leading-[1.06] tracking-[-0.03em] text-text-tertiary sm:text-[58px]">
            <span className="text-text-primary">{siteConfig.headline.lead}</span>
            <span>{siteConfig.headline.trail}</span>
          </h1>
        </motion.div>
        <motion.p variants={item} className="max-w-[728px] text-body-md font-medium text-text-secondary">
          {siteConfig.intro}
        </motion.p>
      </motion.div>
    </section>
  );
}
