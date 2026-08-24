import type { Project } from "@/data/site";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-accent/50">
      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex gap-4 text-sm">
        {project.href && (
          <a
            href={project.href}
            className="font-medium text-accent hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Live →
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            className="font-medium text-muted hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        )}
      </div>
    </article>
  );
}
