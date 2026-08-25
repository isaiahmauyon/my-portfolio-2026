"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { projects, workCategories, type WorkCategory } from "@/data/site";
import MediaTile from "./MediaTile";
import Reveal from "./Reveal";
import {
  ArrowUpRightIcon,
  CheckIcon,
  ChevronDownIcon,
  CodeIcon,
  GridIcon,
  ListIcon,
  PenIcon,
  SparklesIcon,
} from "./icons";

const categoryIcon: Record<WorkCategory, typeof PenIcon> = {
  "Product Design": PenIcon,
  Development: CodeIcon,
  Playground: SparklesIcon,
};

type View = "list" | "grid";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const rowItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.5, 0.28, 1] } },
};

const exitAnim = { opacity: 0, y: -10 };

function CategoryDropdown({
  value,
  onChange,
}: {
  value: WorkCategory;
  onChange: (c: WorkCategory) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const ValueIcon = categoryIcon[value];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-9 items-center gap-2 rounded-lg border border-line bg-bg px-2.5 text-label-md font-bold text-text-primary shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors hover:bg-surface"
      >
        <ValueIcon width={16} height={16} className="text-text-secondary" />
        <span>{value}</span>
        <ChevronDownIcon
          width={16}
          height={16}
          className={`text-text-secondary transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.21, 0.5, 0.28, 1] }}
            className="absolute right-0 z-20 mt-2 w-52 origin-top-right overflow-hidden rounded-xl border border-line bg-bg p-1 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            {workCategories.map((cat) => {
              const Icon = categoryIcon[cat];
              const selected = cat === value;
              return (
                <li key={cat}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      onChange(cat);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-label-md font-medium transition-colors ${
                      selected ? "bg-surface text-text-primary" : "text-text-secondary hover:bg-surface"
                    }`}
                  >
                    <Icon width={16} height={16} className="shrink-0 text-text-secondary" />
                    <span className="flex-1">{cat}</span>
                    {selected && <CheckIcon width={16} height={16} className="shrink-0 text-text-primary" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SelectedWork() {
  const [view, setView] = useState<View>("list");
  const [category, setCategory] = useState<WorkCategory>("Product Design");

  const filtered = projects.filter((p) => p.type === category);

  return (
    <section id="work" className="mx-auto max-w-column scroll-mt-24 px-6 py-16 sm:px-10 lg:px-0">
      <Reveal className="mb-8 flex items-center justify-between">
        <h2 className="font-serif text-display-xl italic text-text-primary">Selected work</h2>
        <div className="flex items-center gap-3">
          <CategoryDropdown value={category} onChange={setCategory} />
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
        {filtered.length === 0 ? (
          <motion.p
            key={`empty-${category}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="py-8 text-caption-md text-text-secondary"
          >
            No {category.toLowerCase()} projects to show yet — check back soon.
          </motion.p>
        ) : view === "list" ? (
          <motion.ul
            key={`list-${category}`}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            exit={exitAnim}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4"
          >
            {filtered.map((project, i) => {
              const isLast = i === filtered.length - 1;
              return (
                <motion.li key={project.title} variants={rowItem} className={isLast ? "" : "border-b border-line pb-5"}>
                  <a href={project.href} className="group flex items-start gap-1.5">
                    <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                      <p className="text-body-md font-medium text-text-primary">{project.title}</p>
                      <p className="text-caption-md font-medium text-text-secondary">{project.category}</p>
                    </div>
                    <div data-sound className="flex w-[123px] shrink-0 items-center justify-between text-text-secondary transition-colors group-hover:text-text-primary">
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
            key={`grid-${category}`}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            exit={exitAnim}
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2"
          >
            {filtered.map((project) => (
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
