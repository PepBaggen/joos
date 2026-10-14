import type { Publication } from "@/lib/publications";

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

export function PaperList({
  items,
  thumbnails = true,
}: {
  items: Publication[];
  thumbnails?: boolean;
}) {
  return (
    <ol className="space-y-7">
      {items.map((p) => (
        <li key={p.url} className="flex gap-5">
          {thumbnails && (
            <a
              href={p.url}
              className="hidden h-24 w-28 shrink-0 overflow-hidden rounded border border-border bg-subtle sm:block"
              aria-hidden="true"
              tabIndex={-1}
            >
              {p.image && (
                <img src={p.image} alt="" className="h-full w-full object-cover" />
              )}
            </a>
          )}
          <div className="space-y-1">
            <a href={p.url} className="font-medium leading-snug">
              {p.title}
            </a>
            <p className="text-sm text-muted-foreground">
              <Authors authors={p.authors} />
            </p>
            <p className="text-sm text-muted-foreground">
              <em>{p.venue}</em> ({p.year})
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
