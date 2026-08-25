import { siteConfig } from "@/data/site";

export default function Wordmark() {
  return (
    <footer className="overflow-hidden px-6 pb-8 pt-16 sm:px-10 lg:px-[120px]">
      <p
        className="select-none whitespace-nowrap text-center font-display font-normal leading-none tracking-tight text-[clamp(56px,17vw,220px)]"
        style={{ color: "var(--wordmark)" }}
        aria-label={siteConfig.name}
      >
        {siteConfig.name.toUpperCase()}
      </p>
    </footer>
  );
}
