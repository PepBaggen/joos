import type { Metadata } from "next";
import {
  adsUrl,
  coAuthor,
  firstAuthor,
  type Publication,
} from "@/lib/publications";

export const metadata: Metadata = { title: "Publications" };

function Authors({ authors }: { authors: string }) {
  const parts = authors.split("J. F. W. Baggen");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <strong className="font-semibold text-foreground">
              J. F. W. Baggen
            </strong>
          )}
        </span>
      ))}
    </>
  );
}

function PublicationList({ items }: { items: Publication[] }) {
  return (
    <ol className="space-y-5">
      {items.map((p) => (
        <li key={p.url} className="space-y-1">
          <a href={p.url} className="font-medium leading-snug">
            {p.title}
          </a>
          <p className="text-sm text-muted-foreground">
            <Authors authors={p.authors} />
          </p>
          <p className="text-sm text-muted-foreground">
            <em>{p.venue}</em> ({p.year})
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function PublicationsPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <h1 className="text-4xl">Publications</h1>
        <p className="text-muted-foreground">
          A complete and up-to-date list is available on{" "}
          <a href={adsUrl}>NASA/ADS</a>.
        </p>
      </header>

      <section>
        <h2 className="mb-5 text-2xl">First-author papers</h2>
        <PublicationList items={firstAuthor} />
      </section>

      <section>
        <h2 className="mb-5 text-2xl">Co-authored papers</h2>
        <PublicationList items={coAuthor} />
      </section>
    </div>
  );
}
