import type { Metadata } from "next";

export const metadata: Metadata = { title: "CV" };

const education = [
  {
    degree: "Ph.D. Astronomy, Yale University",
    years: "2022 – 2027 (expected)",
    detail: "Advisor: Prof. P. van Dokkum",
  },
  {
    degree: "M.Sc. Astronomy & Cosmology (with honours), Leiden University",
    years: "2020 – 2022",
  },
  {
    degree: "B.Sc. Astronomy, Leiden University",
    years: "2017 – 2020",
  },
];

const awards = [
  {
    name: "Dr. Pliny A. and Margaret H. Price Prize, CCAPP, Ohio State University",
    year: "2026",
  },
];

const programs = [
  "JWST GO 8047 (Co-Investigator)",
  "JWST GO 5545 (Co-Investigator)",
  "JWST GO 9327 (Co-Investigator)",
  "Keck I/LRISp (Co-Investigator)",
];

function Row({ left, right }: { left: React.ReactNode; right: string }) {
  return (
    <li className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-6">
      <span>{left}</span>
      <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
        {right}
      </span>
    </li>
  );
}

export default function CVPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl">Curriculum vitae</h1>
        <a
          href="/cv.pdf"
          className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-white no-underline hover:bg-primary-hover hover:text-white"
        >
          Download full CV (PDF)
        </a>
      </header>

      <section>
        <h2 className="mb-4 text-2xl">Education</h2>
        <ul className="space-y-3">
          {education.map((e) => (
            <Row
              key={e.degree}
              left={
                <>
                  {e.degree}
                  {e.detail && (
                    <span className="block text-sm text-muted-foreground">
                      {e.detail}
                    </span>
                  )}
                </>
              }
              right={e.years}
            />
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl">Awards</h2>
        <ul className="space-y-3">
          {awards.map((a) => (
            <Row key={a.name} left={a.name} right={a.year} />
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl">Observing programs</h2>
        <ul className="list-disc space-y-1 pl-5">
          {programs.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <p className="text-muted-foreground">
        Talks, teaching, service and outreach are listed in the{" "}
        <a href="/cv.pdf">full CV</a>.
      </p>
    </div>
  );
}
