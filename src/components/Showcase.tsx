import { showcase } from "@/data/site";
import MediaTile from "./MediaTile";

export default function Showcase() {
  // Two identical halves so the -50% translate loops seamlessly; each half is
  // doubled so the strip comfortably fills wide viewports.
  const half = [...showcase, ...showcase];
  const track = [...half, ...half];

  return (
    <section className="w-full overflow-hidden py-16" aria-label="Work showcase">
      <div className="marquee flex w-max">
        {track.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className="marquee-item aspect-[526/391] shrink-0"
            aria-hidden={i >= half.length}
          >
            <MediaTile src={item.image} alt={item.title} fit="contain" className="h-full w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
