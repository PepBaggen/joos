export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: number;
  url: string;
  // Optional figures from the paper, in /public/images/papers/ (one or two).
  images?: string[];
};

// First-author papers, newest first. Keep in sync with my_papers.bib.
export const firstAuthor: Publication[] = [
  {
    authors: "J. F. W. Baggen, P. van Dokkum, I. Labbé, G. Brammer",
    title:
      "(Re)solving the Complex Multiscale Morphology and V-shaped Spectral Energy Distribution of a Newly Discovered Strongly Lensed Little Red Dot in A383",
    venue: "ApJL 1006, L14",
    year: 2026,
    url: "https://doi.org/10.3847/2041-8213/ae82fe",
    images: ["/images/papers/a383-cluster.jpg", "/images/papers/a383-colors.jpg"],
  },
  {
    authors:
      "J. F. W. Baggen, M. T. Scoggins, P. van Dokkum, Z. Haiman, A. Torralba, et al.",
    title:
      "Connecting the Dots: UV-bright Companions of Little Red Dots as Lyman–Werner Sources Enabling Direct-collapse Black Hole Formation",
    venue: "ApJL 1002, L4",
    year: 2026,
    url: "https://doi.org/10.3847/2041-8213/ae58a5",
    images: ["/images/papers/companions-cartoon.jpg"],
  },
  {
    authors: "J. F. W. Baggen, F. C. van den Bosch, K. Mitra",
    title:
      "The Impact of Baryonic Effects on the Dynamical Masses Inferred Using Satellite Kinematics",
    venue: "The Open Journal of Astrophysics 9, 58198",
    year: 2026,
    url: "https://doi.org/10.33232/001c.158198",
    images: ["/images/papers/satellites-cartoon.jpg", "/images/papers/satellites-plot.jpg"],
  },
  {
    authors:
      "J. F. W. Baggen, P. van Dokkum, G. Brammer, A. de Graaff, M. Franx, et al.",
    title:
      "The Small Sizes and High Implied Densities of “Little Red Dots” with Balmer Breaks Could Explain Their Broad Emission Lines without an Active Galactic Nucleus",
    venue: "ApJL 977, L13",
    year: 2024,
    url: "https://doi.org/10.3847/2041-8213/ad90b8",
    images: ["/images/papers/sizes2024-cartoon.jpg"],
  },
  {
    authors:
      "J. F. W. Baggen, P. van Dokkum, I. Labbé, G. Brammer, T. B. Miller, et al.",
    title:
      "Sizes and Mass Profiles of Candidate Massive Galaxies Discovered by JWST at 7 < z < 9: Evidence for Very Early Formation of the Central 100 pc of Present-day Ellipticals",
    venue: "ApJL 955, L12",
    year: 2023,
    url: "https://doi.org/10.3847/2041-8213/acf5ef",
    images: ["/images/papers/sizes2023-fits.jpg", "/images/papers/sizes2023-profiles.jpg"],
  },
];

// Co-authored papers, newest first.
export const coAuthor: Publication[] = [
  {
    authors:
      "R. P. Naidu, J. Matthee, H. Katz, A. de Graaff, P. A. Oesch, et al. (incl. J. F. W. Baggen)",
    title: "A gas-enshrouded and gas-reddened black hole at cosmic dawn",
    venue: "Nature 656, 329",
    year: 2026,
    url: "https://doi.org/10.1038/s41586-026-10846-4",
  },
  {
    authors:
      "A. Venditti, D. Schaerer, E. Zackrisson, Y. Asada, H. Katz, et al. (incl. J. F. W. Baggen)",
    title:
      "How can we finally see the first light? Status and perspective in the search for Population III stars",
    venue: "The Open Journal of Astrophysics 9, 67811",
    year: 2026,
    url: "https://doi.org/10.33232/001c.167811",
  },
  {
    authors:
      "B. Wang, J. E. Greene, H. Liu, N. Kaaz, G. B. Brammer, et al. (incl. J. F. W. Baggen)",
    title:
      "Balmer Absorption Series and Broad Metal Lines in Two Luminous Little Red Dots",
    venue: "arXiv:2609.22623",
    year: 2026,
    url: "https://arxiv.org/abs/2609.22623",
  },
  {
    authors:
      "L. Barrufet, P. A. Oesch, R. Marques-Chaves, K. Arellano-Cordova, J. F. W. Baggen, et al.",
    title:
      "Quiescent or dusty? Unveiling the nature of extremely red galaxies at z > 3",
    venue: "MNRAS 537, 3453",
    year: 2025,
    url: "https://doi.org/10.1093/mnras/staf013",
  },
  {
    authors: "F. D’Eugenio, E. Nelson, X. Ji, J. F. W. Baggen, J. Greene, et al.",
    title:
      "Irony at z = 6.68: a bright AGN with forbidden Fe emission and multi-component Balmer absorption",
    venue: "arXiv:2510.00101",
    year: 2025,
    url: "https://arxiv.org/abs/2510.00101",
  },
  {
    authors:
      "A. de Graaff, H.-W. Rix, R. P. Naidu, I. Labbé, B. Wang, et al. (incl. J. F. W. Baggen)",
    title:
      "A remarkable ruby: Absorption in dense gas, rather than evolved stars, drives the extreme Balmer break of a little red dot at z = 3.5",
    venue: "A&A 701, A168",
    year: 2025,
    url: "https://doi.org/10.1051/0004-6361/202554681",
  },
  {
    authors: "K. Mitra, F. C. van den Bosch, J. F. W. Baggen, J. U. Lange",
    title: "BASILISK IV. No S8 Tension with Satellite Kinematics",
    venue: "arXiv:2512.14889",
    year: 2025,
    url: "https://arxiv.org/abs/2512.14889",
  },
  {
    authors:
      "P. van Dokkum, G. Brammer, J. F. W. Baggen, M. A. Keim, P. Natarajan, et al.",
    title:
      "The ∞ Galaxy: A Candidate Direct-collapse Supermassive Black Hole between Two Massive, Ringed Nuclei",
    venue: "ApJL 988, L6",
    year: 2025,
    url: "https://doi.org/10.3847/2041-8213/addcfe",
  },
  {
    authors: "P. van Dokkum, G. Brammer, C. Jennings, I. Pasha, J. F. W. Baggen",
    title:
      "Further Evidence for a Direct-collapse Origin of the Supermassive Black Hole at the Center of the ∞ Galaxy",
    venue: "ApJL 990, L48",
    year: 2025,
    url: "https://doi.org/10.3847/2041-8213/adfb50",
  },
  {
    authors:
      "A. Weibel, A. de Graaff, D. J. Setton, T. B. Miller, P. A. Oesch, et al. (incl. J. F. W. Baggen)",
    title: "RUBIES Reveals a Massive Quiescent Galaxy at z = 7.3",
    venue: "ApJ 983, 11",
    year: 2025,
    url: "https://doi.org/10.3847/1538-4357/adab7a",
  },
  {
    authors:
      "B. Wang, J. Leja, A. de Graaff, G. B. Brammer, A. Weibel, et al. (incl. J. F. W. Baggen)",
    title:
      "RUBIES: Evolved Stellar Populations with Extended Formation Histories at z ~ 7–8 in Candidate Massive Galaxies Identified with JWST/NIRSpec",
    venue: "ApJL 969, L13",
    year: 2024,
    url: "https://doi.org/10.3847/2041-8213/ad55f7",
  },
  {
    authors: "F. A. Evans, T. Marchetti, E. M. Rossi, J. F. W. Baggen, S. Bloot",
    title:
      "Comparing hypervelocity star populations from the Large Magellanic Cloud and the Milky Way",
    venue: "MNRAS 507, 4997",
    year: 2021,
    url: "https://doi.org/10.1093/mnras/stab2271",
  },
];

export const adsUrl =
  "https://ui.adsabs.harvard.edu/search/p_=0&q=author%3A%22Baggen%2C%20Josephine%20F.%20W.%22&sort=date%20desc%2C%20bibcode%20desc";
