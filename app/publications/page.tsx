import type { Metadata } from "next";
import { PaperList } from "@/components/paper-list";
import { adsUrl, coAuthor, firstAuthor } from "@/lib/publications";

export const metadata: Metadata = { title: "Publications" };

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
        <h2 className="mb-6 text-2xl">First-author papers</h2>
        <PaperList items={firstAuthor} />
      </section>

      <section>
        <h2 className="mb-6 text-2xl">Co-authored papers</h2>
        <PaperList items={coAuthor} thumbnails={false} />
      </section>
    </div>
  );
}
