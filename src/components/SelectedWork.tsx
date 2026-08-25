import { projects } from "@/data/site";
import MediaTile from "./MediaTile";
import Reveal from "./Reveal";
import { ArrowUpRightIcon, ChevronDownIcon, GridIcon, ListIcon } from "./icons";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-display-xl italic text-text-primary">{children}</h2>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-column scroll-mt-24 px-6 py-16 sm:px-10 lg:px-0">
      <Reveal className="mb-8 flex items-center justify-between">
        <SectionHeading>Selected work</SectionHeading>
        <div className="flex items-center gap-3">
          <div className="flex h-8 items-center gap-1.5 rounded-lg bg-surface p-1">
            <span className="flex items-center rounded-[7px] bg-bg px-1.5 py-[3px] text-label-md font-bold text-text-primary shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              Product Design
            </span>
            <ChevronDownIcon width={20} height={20} className="text-text-secondary" />
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-surface p-1">
            <ListIcon className="mx-0.5 text-text-secondary" />
            <span className="flex items-center rounded bg-bg p-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <GridIcon className="text-text-primary" />
            </span>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.1} className="flex flex-col gap-[17px]">
            <a href={project.href} className="group flex flex-col gap-[17px]">
              <MediaTile
                src={project.image}
                alt={project.title}
                className="aspect-[430/319] w-full rounded-[10px] transition-transform duration-300 group-hover:-translate-y-1"
              />
              <div className="flex items-start gap-1.5">
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <p className="text-body-md font-medium text-text-primary">{project.title}</p>
                  <p className="text-caption-md font-medium text-text-secondary">
                    {project.category}
                  </p>
                </div>
                <ArrowUpRightIcon className="mt-0.5 shrink-0 text-text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
