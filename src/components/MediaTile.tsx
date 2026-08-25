type MediaTileProps = {
  src?: string;
  alt: string;
  className?: string;
  /** How the image sits in the tile. */
  fit?: "cover" | "contain";
};

/**
 * Renders a project screenshot on the design's #f2f2f2 surface via a
 * background image. When the file is missing it degrades to a clean grey
 * tile (no broken-image icon), so placeholders look intentional until the
 * real screenshots are dropped into /public/figma/img.
 */
export default function MediaTile({
  src,
  alt,
  className = "",
  fit = "cover",
}: MediaTileProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`bg-surface bg-center bg-no-repeat ${className}`}
      style={
        src
          ? {
              backgroundImage: `url(${src})`,
              backgroundSize: fit === "contain" ? "auto 82%" : "cover",
            }
          : undefined
      }
    />
  );
}
