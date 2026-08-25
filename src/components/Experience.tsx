import { experience, siteConfig } from "@/data/site";
import Reveal from "./Reveal";
import { DownloadIcon } from "./icons";

export default function Experience() {
  return (
    <section id="about" className="mx-auto max-w-column scroll-mt-24 px-6 py-16 sm:px-10 lg:px-0">
      <Reveal className="mb-11 flex items-center justify-between gap-3">
        <h2 className="flex-1 font-serif text-display-xl italic text-text-primary">
          Work Experience
        </h2>
        <a
          href={siteConfig.resumeUrl}
          className="flex h-8 items-center gap-1.5 rounded-lg bg-surface p-1 transition-opacity hover:opacity-80"
        >
          <span className="flex items-center rounded-[7px] bg-bg px-1.5 py-[3px] text-label-md font-bold text-text-primary shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            Download Resume
          </span>
          <DownloadIcon className="text-text-secondary" />
        </a>
      </Reveal>

      <div className="exp-list flex flex-col gap-8">
        {experience.map((role, i) => (
          <Reveal
            key={`${role.company}-${role.period}`}
            delay={i * 0.05}
            className="exp-row flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"
          >
            <p className="text-caption-md text-gray3 sm:whitespace-nowrap">{role.period}</p>
            <div className="flex flex-col gap-2 sm:w-[430px]">
              <p className="text-body-sm font-medium text-gray1">{role.company}</p>
              <p className="text-caption-md font-medium text-gray3">{role.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
