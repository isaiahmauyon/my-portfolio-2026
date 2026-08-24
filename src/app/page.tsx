import { siteConfig, skills, projects } from "@/data/site";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="flex flex-col justify-center py-24 sm:py-32">
        <p className="text-sm font-medium text-accent">Hi, my name is</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {siteConfig.name}.
        </h1>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-muted sm:text-5xl">
          I build things for the web.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          {siteConfig.description}
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            View my work
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="mt-2 text-sm text-muted">Some things I&apos;ve built.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 py-16">
        <h2 className="text-2xl font-bold tracking-tight">About</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          <p className="text-sm leading-relaxed text-muted sm:col-span-2">
            I&apos;m a {siteConfig.role.toLowerCase()} based in{" "}
            {siteConfig.location}. I enjoy turning complex problems into simple,
            beautiful, and intuitive interfaces. When I&apos;m not coding, you can
            find me exploring new technologies and contributing to open source.
          </p>
          <div>
            <h3 className="text-sm font-semibold">Skills</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Get in touch</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          I&apos;m always open to new opportunities and interesting projects. Drop
          me a line and I&apos;ll get back to you.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Say hello
        </a>
      </section>
    </div>
  );
}
