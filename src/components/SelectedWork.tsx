import { projects } from "@/data/site";
import Reveal from "./Reveal";
import { ArrowUpRightIcon, ChevronDownIcon, GridIcon, ListIcon } from "./icons";

export default function SelectedWork() {
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
            <span className="flex items-center rounded bg-bg p-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <ListIcon className="text-text-primary" />
            </span>
            <GridIcon className="mx-0.5 text-text-secondary" />
          </div>
        </div>
      </Reveal>

      <ul className="flex flex-col gap-4">
        {projects.map((project, i) => {
          const isLast = i === projects.length - 1;
          return (
            <Reveal
              key={project.title}
              as="li"
              delay={i * 0.06}
              className={isLast ? "" : "border-b border-line pb-5"}
            >
              <a href={project.href} className="group flex items-start gap-1.5">
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <p className="text-body-md font-medium text-text-primary">{project.title}</p>
                  <p className="text-caption-md font-medium text-text-secondary">
                    {project.category}
                  </p>
                </div>
                <div className="flex w-[123px] shrink-0 items-center justify-between text-text-secondary transition-colors group-hover:text-text-primary">
                  <span className="whitespace-nowrap text-label-md">Read case study</span>
                  <ArrowUpRightIcon className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
