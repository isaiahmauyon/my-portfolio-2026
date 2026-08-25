import Link from "next/link";
import { siteConfig } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10 lg:px-[120px]">
        <div className="flex items-center gap-10 lg:gap-[200px]">
          <Link href="#top" className="text-body-md font-bold text-text-primary">
            {siteConfig.brand}
          </Link>
          <ul className="hidden items-center gap-[38px] sm:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-caption-md font-medium text-text-secondary transition-colors hover:text-text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
