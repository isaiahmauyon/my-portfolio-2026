import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href={siteConfig.socials.github} className="hover:text-foreground" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={siteConfig.socials.linkedin} className="hover:text-foreground" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
