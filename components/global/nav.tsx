import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "https://vercel.com/templates/next.js/portfolio-starter-kit": {
    name: "deploy",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row w-full " id="nav">
          <div className="flex flex-grow-1 items-center gap-6">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all duration-200 hover:underline"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="justify-self-end">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
