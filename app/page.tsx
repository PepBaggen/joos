import Link from "next/link";

const news = [
  {
    date: "2026",
    text: (
      <>
        Awarded the{" "}
        <a href="https://ccapp.osu.edu/news/2026-price-prize-winners-announced">
          2026 Dr. Pliny A. and Margaret H. Price Prize
        </a>{" "}
        (CCAPP, Ohio State University).
      </>
    ),
  },
  {
    date: "2026",
    text: (
      <>
        New paper on the strongly lensed little red dot in A383, published in{" "}
        <a href="https://doi.org/10.3847/2041-8213/ae82fe">ApJL</a>.
      </>
    ),
  },
  {
    date: "2026",
    text: (
      <>
        New paper showing that UV-bright companions of little red dots could
        enable direct-collapse black hole formation, published in{" "}
        <a href="https://doi.org/10.3847/2041-8213/ae58a5">ApJL</a>.
      </>
    ),
  },
];

const research = [
  {
    title: "Lensed little red dots",
    image: "/images/lensed-pairs.png",
    alt: "JWST images of the strongly lensed little red dots A383-LRD1 and A68-LRD1, each showing a compact red source and a blue companion",
    text: (
      <>
        Little red dots are so compact that even JWST cannot resolve their
        optical light. Using strong gravitational lensing, I discovered two of
        the most magnified little red dots known,{" "}
        <a href="https://doi.org/10.3847/2041-8213/ae82fe">A383-LRD1</a> and{" "}
        <a href="https://doi.org/10.3847/2041-8213/ae58a5">A68-LRD1</a>. Under
        high magnification, both resolve into a compact red source and a young,
        blue companion only a few hundred parsecs apart. Without lensing, the
        two would blend into a single red dot.
      </>
    ),
  },
  {
    title: "Companions and the birth of massive black holes",
    image: "/images/three-steps.png",
    alt: "Cartoon of three steps: isolating the red engine, its formation next to a young companion, and its evolution",
    text: (
      <>
        Long before JWST, theoretical models predicted that massive black hole
        seeds could form next to a young, bright neighbor whose radiation keeps
        the gas from forming stars. In a sample of 83 little red dots, I{" "}
        <a href="https://doi.org/10.3847/2041-8213/ae58a5">found</a> that at
        least 43% have a likely companion, bright enough to meet a key
        condition of this direct-collapse scenario. I am now testing this
        picture with a new sample of lensed little red dots.
      </>
    ),
  },
  {
    title: "How compact are they?",
    image: "/images/lrd.png",
    alt: "JWST images of little red dots",
    narrow: true,
    text: (
      <>
        In my first papers, I{" "}
        <a href="https://doi.org/10.3847/2041-8213/acf5ef">measured the sizes</a>{" "}
        of the first compact red sources found by JWST, with radii of only
        80–300 pc, and{" "}
        <a href="https://doi.org/10.3847/2041-8213/ad90b8">showed</a> that such
        dense stellar systems could produce broad emission lines without a
        black hole.
      </>
    ),
  },
];

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
        <h2 className="mb-4 text-2xl">News</h2>
        <ul className="space-y-2">
          {news.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="w-12 shrink-0 text-sm text-muted-foreground tabular-nums">
                {item.date}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-6 text-2xl">Research</h2>
        <div className="space-y-12">
          {research.map((r) => (
            <article key={r.title} className="space-y-4">
              <h3 className="text-xl">{r.title}</h3>
              <img
                src={r.image}
                alt={r.alt}
                className={`rounded-md border border-border bg-white ${
                  "narrow" in r ? "w-full sm:w-3/4" : "w-full"
                }`}
              />
              <p>{r.text}</p>
            </article>
          ))}
        </div>
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
