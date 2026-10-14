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
    <ol className="space-y-8">
      {items.map((p) => (
        <li key={p.url} className="flex gap-6">
          {thumbnails &&
            (p.images?.length ? (
              <a
                href={p.url}
                className="hidden h-44 w-80 shrink-0 gap-2 overflow-hidden rounded-md border border-border bg-white p-2 transition-shadow hover:shadow-md sm:flex"
                aria-hidden="true"
                tabIndex={-1}
              >
                {p.images.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-full min-w-0 flex-1 object-contain"
                  />
                ))}
              </a>
            ) : (
              <div className="hidden w-80 shrink-0 sm:block" aria-hidden="true" />
            ))}
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
