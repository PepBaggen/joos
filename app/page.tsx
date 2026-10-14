import Link from "next/link";
import { PaperList } from "@/components/paper-list";
import { firstAuthor } from "@/lib/publications";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl">Josephine Baggen</h1>
          <p className="text-lg text-muted-foreground">
            PhD candidate in Astronomy, Yale University
          </p>
          <p>
            I study the formation of the first massive galaxies and black holes
            in the early Universe. My work focuses on{" "}
            <em>little red dots</em>: compact, red sources discovered by the
            James Webb Space Telescope in the first billion years, whose nature
            is still unknown. I combine JWST imaging, strong gravitational
            lensing and models of galaxy and black hole formation to find out
            what they are. I work with Prof. Pieter van Dokkum.
          </p>
          <p className="text-sm">
            <a href="mailto:josephine.baggen@yale.edu">josephine.baggen@yale.edu</a>
            <span className="text-muted-foreground"> · </span>
            <a href="/cv.pdf">CV</a>
            <span className="text-muted-foreground"> · </span>
            <Link href="/publications">Publications</Link>
          </p>
        </div>
        <img
          src="/images/profile.jpeg"
          alt="Josephine Baggen"
          className="h-40 w-40 shrink-0 rounded-full object-cover sm:h-44 sm:w-44"
        />
      </section>

      <section>
        <h2 className="mb-6 text-2xl">First-author papers</h2>
        <PaperList items={firstAuthor} />
        <p className="mt-6 text-sm">
          <Link href="/publications">All publications →</Link>
        </p>
      </section>

      <section className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <img
          src="/images/tennis.jpg"
          alt="Yale Club Tennis at the USTA Tennis on Campus National Championship"
          className="w-full rounded-md border border-border object-cover sm:w-48"
        />
        <div className="space-y-2">
          <h2 className="text-2xl">Beyond astronomy</h2>
          <p>
            Outside of research, I play tennis with the Yale Club Tennis team,
            with whom I competed at the USTA Tennis on Campus National
            Championship.
          </p>
        </div>
      </section>
    </div>
  );
}
