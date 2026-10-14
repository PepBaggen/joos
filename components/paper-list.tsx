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
    <ol className={thumbnails ? "space-y-12" : "space-y-8"}>
      {items.map((p) => (
        <li
          key={p.url}
          className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8"
        >
          <div className="flex-1 space-y-1">
            <p className="font-medium leading-snug">{p.title}</p>
            <p className="text-sm text-muted-foreground">
              <Authors authors={p.authors} />
            </p>
            <p className="text-sm text-muted-foreground">
              <em>{p.venue}</em> ({p.year})
            </p>
            <p className="pt-1 text-sm">
              <a href={p.url}>Read the paper →</a>
            </p>
          </div>
          {thumbnails && p.images?.length ? (
            <div className="flex h-64 w-full shrink-0 gap-3 overflow-hidden rounded-md border border-border bg-white p-3 md:h-80 md:w-[36rem]">
              {p.images.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`Figure from “${p.title}”`}
                  className="h-full min-w-0 flex-1 object-contain"
                />
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
