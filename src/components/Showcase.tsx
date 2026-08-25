import { showcase } from "@/data/site";
import MediaTile from "./MediaTile";
import Reveal from "./Reveal";

export default function Showcase() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-[120px]">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {showcase.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <MediaTile
              src={item.image}
              alt={item.title}
              fit="contain"
              className="aspect-[526/391] w-full transition-transform duration-500 ease-out hover:scale-[1.03]"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
