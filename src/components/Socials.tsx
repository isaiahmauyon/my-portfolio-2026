import { socials } from "@/data/site";
import Reveal from "./Reveal";
import { socialIcons } from "./icons";

export default function Socials() {
  return (
    <section id="socials" className="mx-auto max-w-column scroll-mt-24 px-6 py-16 sm:px-10 lg:px-0">
      <Reveal className="mb-11">
        <h2 className="font-serif text-display-xl italic text-text-primary">Socials</h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {socials.map((social, i) => {
          const Icon = socialIcons[social.platform];
          return (
            <Reveal key={social.platform} delay={i * 0.06}>
              <a
                data-sound
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-3 text-text-secondary transition-colors hover:text-text-primary"
              >
                <Icon className="shrink-0" />
                <span className="text-label-md font-medium">{social.handle}</span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
