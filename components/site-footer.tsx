import { adsUrl } from "@/lib/publications";

export const links = [
  { href: "mailto:josephine.baggen@yale.edu", label: "Email" },
  { href: adsUrl, label: "NASA/ADS" },
  { href: "https://orcid.org/0009-0005-2295-7246", label: "ORCID" },
  {
    href: "https://www.linkedin.com/in/josephine-baggen-713994131/",
    label: "LinkedIn",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="no-underline hover:underline">
              {l.label}
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Josephine Baggen</p>
      </div>
    </footer>
  );
}
