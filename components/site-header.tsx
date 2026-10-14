"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/cv", label: "CV" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-semibold text-foreground no-underline hover:text-foreground"
        >
          Josephine Baggen
        </Link>
        <nav className="flex gap-5 text-sm sm:gap-7">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-foreground underline decoration-primary decoration-2"
                    : "text-muted-foreground no-underline hover:text-foreground"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
