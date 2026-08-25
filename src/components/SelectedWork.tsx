"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { projects } from "@/data/site";
import MediaTile from "./MediaTile";
import Reveal from "./Reveal";
import { ArrowUpRightIcon, ChevronDownIcon, GridIcon, ListIcon } from "./icons";

type View = "list" | "grid";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const rowItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.5, 0.28, 1] } },
};

const swap = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.28, ease: [0.21, 0.5, 0.28, 1] as const },
};

export default function SelectedWork() {
  const [view, setView] = useState<View>("list");

  return (
    <section id="work" className="mx-auto max-w-column scroll-mt-24 px-6 py-16 sm:px-10 lg:px-0">
      <Reveal className="mb-8 flex items-center justify-between">
        <h2 className="font-serif text-display-xl italic text-text-primary">Selected work</h2>
        <div className="flex items-center gap-3">
          <div className="flex h-8 items-center gap-1.5 rounded-lg bg-surface p-1">
            <span className="flex items-center rounded-[7px] bg-bg px-1.5 py-[3px] text-label-md font-bold text-text-primary shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              Product Design
            </span>
            <ChevronDownIcon width={20} height={20} className="text-text-secondary" />
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-surface p-1">
            <button
              type="button"
              onClick={() => setView("list")}
              aria-label="List view"
              aria-pressed={view === "list"}
              className={`flex items-center rounded p-0.5 transition-colors ${
                view === "list"
                  ? "bg-bg text-text-primary shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <ListIcon />
            </button>
            <button
              type="button"
              onClick={() => setView("grid")}
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              className={`flex items-center rounded p-0.5 transition-colors ${
                view === "grid"
                  ? "bg-bg text-text-primary shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <GridIcon />
            </button>
          </div>
        </div>
      </Reveal>

      <AnimatePresence mode="wait" initial={false}>
        {view === "list" ? (
          <motion.ul
            key="list"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            exit={swap.exit}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4"
          >
            {projects.map((project, i) => {
              const isLast = i === projects.length - 1;
              return (
                <motion.li key={project.title} variants={rowItem} className={isLast ? "" : "border-b border-line pb-5"}>
                  <a href={project.href} className="group flex items-start gap-1.5">
                    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <p className="text-body-md font-medium text-text-primary">{project.title}</p>
                      <p className="text-caption-md font-medium text-text-secondary">{project.category}</p>
                    </div>
                    <div className="flex w-[123px] shrink-0 items-center justify-between text-text-secondary transition-colors group-hover:text-text-primary">
                      <span className="whitespace-nowrap text-label-md">Read case study</span>
                      <ArrowUpRightIcon className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        ) : (
          <motion.div
            key="grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            exit={swap.exit}
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={rowItem} className="flex flex-col gap-[17px]">
                <a href={project.href} className="group flex flex-col gap-[17px]">
                  <MediaTile
                    src={project.image}
                    alt={project.title}
                    className="aspect-[430/319] w-full rounded-[10px] transition-transform duration-300 group-hover:-translate-y-1"
                  />
                  <div className="flex items-start gap-1.5">
                    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <p className="text-body-md font-medium text-text-primary">{project.title}</p>
                      <p className="text-caption-md font-medium text-text-secondary">{project.category}</p>
                    </div>
                    <ArrowUpRightIcon className="mt-0.5 shrink-0 text-text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
