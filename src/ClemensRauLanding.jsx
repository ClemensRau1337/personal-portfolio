import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Code2,
  Clapperboard,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  ExternalLink,
  Download,
  ArrowRight,
  Star,
  Calendar,
  Building2,
  Globe,
  CheckCircle2,
  Loader2,
} from "lucide-react";

// --- Utility Components ---
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mb-8 text-center">
    {eyebrow && (
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-400">{subtitle}</p>}
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`relative rounded-2xl p-[1px] ${className}`}>
    <div
      aria-hidden
      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/20 via-orange-400/10 to-transparent opacity-60"
    />
    <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-5 shadow-lg shadow-black/40 backdrop-blur">
      {children}
    </div>
  </div>
);

const IconLink = ({ href, label, children }) => (
  <a
    target="_blank"
    rel="noreferrer noopener"
    href={href}
    aria-label={label}
    className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-200 transition hover:border-slate-700 hover:bg-slate-800/80 focus:outline-none focus-visible:ring focus-visible:ring-rose-500/50"
  >
    {children}
  </a>
);

const ChoiceCard = ({ icon: Icon, title, copy, onClick }) => (
  <button
    onClick={onClick}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur transition hover:border-rose-400/30 hover:bg-slate-900/60"
  >
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-500/10 to-orange-400/10 opacity-0 transition group-hover:opacity-100"
    />
    <div className="relative flex items-center gap-4">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/40 to-orange-400/30">
        <Icon className="h-6 w-6" />
      </span>
      <div className="text-left">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-slate-300">{copy}</p>
      </div>
      <ArrowRight className="ml-auto h-5 w-5 opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100" />
    </div>
  </button>
);

const Impressum = () => (
  <section id="impressum" className="py-12 sm:py-16">
    <Container>
      <SectionTitle
        eyebrow="Rechtliches"
        title="Impressum"
        subtitle="Angaben gemäß § 5 TMG."
      />
      <Card>
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h3 className="text-lg font-semibold text-slate-100">Anbieter</h3>
            <p>
              <strong>Clemens Rau</strong>
              <br />
              Am Sandtorkai 58
              <br />
              20457 Hamburg
              <br />
              Deutschland
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100">Kontakt</h3>
            <p>
              E-Mail:{" "}
              <a className="hover:underline" href="mailto:mail@clemensrau.de">
                mail@clemensrau.de
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              Vertretungsberechtigt
            </h3>
            <p>Clemens Rau</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              Berufsbezeichnung
            </h3>
            <p>Schauspieler; Software Engineer</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              EU-Streitschlichtung / Verbraucherstreitbeilegung
            </h3>
            <p>
              Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
              <a
                className="hover:underline"
                href="https://ec.europa.eu/consumers/odr"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .<br />
              Ich bin nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              Haftung für Inhalte
            </h3>
            <p>
              Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              Haftung für Links
            </h3>
            <p>
              Diese Website enthält Links zu externen Websites Dritter, auf
              deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              verantwortlich.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              Urheberrecht
            </h3>
            <p>
              Die durch mich erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen meiner schriftlichen
              Zustimmung. Downloads und Kopien dieser Seite sind nur für den
              privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              Bildnachweise
            </h3>
            <p>Eigene Bilder; ggf. weitere Quellen werden gekennzeichnet.</p>
          </div>
          <div className="pt-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "";
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-800"
            >
              Zur Startseite
            </a>
          </div>
        </div>
      </Card>
    </Container>
  </section>
);

// --- Main Component ---
export default function ClemensRauLanding() {
  const FORM_ENDPOINT = "https://formsubmit.co/ajax/mail@clemensrau.de";
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // simple hash-based routing for Impressum
  const [route, setRoute] = useState(() =>
    typeof window !== "undefined" && window.location.hash === "#impressum"
      ? "impressum"
      : "home"
  );
  useEffect(() => {
    const sync = () =>
      setRoute(window.location.hash === "#impressum" ? "impressum" : "home");
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const [profile, setProfile] = useState("actor"); // 'it' | 'actor'
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = useMemo(
    () => ({
      initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      exit: {
        opacity: 0,
        y: shouldReduceMotion ? 0 : -8,
        transition: { duration: 0.25 },
      },
    }),
    [shouldReduceMotion]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a0004] via-[#3b0a0f] to-slate-950 text-slate-100 [color-scheme:dark]">
      {/* Skip Link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-800 focus:px-3 focus:py-2"
      >
        Zum Inhalt springen
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-900/70 bg-slate-950/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 text-slate-900 font-extrabold">
              CR
            </div>
            <span className="hidden text-sm text-slate-300 sm:block">
              Clemens Rau
            </span>
          </div>

          {/* Toggle */}
          <div
            role="tablist"
            aria-label="Profil wählen"
            className="relative flex items-center rounded-xl border border-slate-800 bg-slate-900/60 p-1 shadow-inner"
          >
            <button
              role="tab"
              aria-selected={profile === "actor"}
              onClick={() => setProfile("actor")}
              className={`ml-1 flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition ${
                profile === "actor"
                  ? "bg-slate-800 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Clapperboard className="h-4 w-4" /> Schauspiel
            </button>
            <button
              role="tab"
              aria-selected={profile === "it"}
              onClick={() => setProfile("it")}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition ${
                profile === "it"
                  ? "bg-slate-800 text-white shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Code2 className="h-4 w-4" /> IT / Programmierung
            </button>
          </div>

          {/* Socials */}
          <nav
            className="hidden items-center gap-2 sm:flex"
            aria-label="Social Links"
          >
            <IconLink href="https://github.com/ClemensRau1337" label="GitHub">
              <Github className="h-4 w-4" />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/clemens-rau/"
              label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </IconLink>
            <IconLink href="mailto:mail@clemensrau.de" label="E-Mail">
              <Mail className="h-4 w-4" />
            </IconLink>
          </nav>
        </Container>
      </header>

      {/* Hero */}
      {route !== "impressum" && (
        <>
          <section className="relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
            >
              <img
                src="/portrait.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-50 blur-3xl scale-110 saturate-150 brightness-110"
              />
              <div className="absolute left-1/2 top-0 h-[120vh] w-[120vh] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.35),rgba(251,146,60,0.18)_40%,transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(251,146,60,0.12),transparent_60%)]" />
            </div>
            <Container className="py-16 sm:py-24">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="mx-auto grid max-w-5xl place-items-center gap-10"
              >
                {/* Central portrait */}
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(251,146,60,0.35),rgba(244,63,94,0.6),rgba(251,146,60,0.35))] blur-2xl opacity-80"
                  />
                  <img
                    src="/portrait.jpg"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop";
                    }}
                    alt="Porträt von Clemens Rau"
                    className="relative z-10 h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-2xl object-cover ring-8 ring-rose-400/30 shadow-2xl shadow-black/60"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                    Clemens Rau
                  </h1>
                  <p className="mt-2 text-lg text-slate-200">
                    Schauspieler <span className="text-slate-300">&</span>{" "}
                    Software Engineer
                  </p>
                </div>
                {/* Branch choices */}
                <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
                  <ChoiceCard
                    icon={Clapperboard}
                    title="Schauspiel"
                    copy="Sedcard, Showreel, Projekte"
                    onClick={() => {
                      setProfile("actor");
                      document
                        .getElementById("actor-title")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                  <ChoiceCard
                    icon={Code2}
                    title="IT / Programmierung"
                    copy="Skills, Repos, Leistungen"
                    onClick={() => {
                      setProfile("it");
                      document
                        .getElementById("it-title")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                </div>
              </motion.div>
            </Container>
          </section>

          <main id="main">
            {/* Profile Sections */}
            <Container>
              <AnimatePresence mode="wait">
                {profile === "actor" ? (
                  <motion.section
                    key="actor"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    aria-labelledby="actor-title"
                    className="py-12 sm:py-16"
                  >
                    <SectionTitle
                      eyebrow="Schauspiel"
                      title={<span id="actor-title">Sedcard & Referenzen</span>}
                      subtitle="Kurzprofil, Showreel und ausgewählte Projekte. Ersetze die Platzhalter durch deine echten Daten."
                    />

                    {/* Sedcard Grid */}
                    <div className="grid gap-6 lg:grid-cols-3">
                      {/* Left: Portrait + Facts */}
                      <Card>
                        <div className="grid gap-4">
                          <img
                            src="/portrait.jpg"
                            onError={(e) => {
                              e.currentTarget.src =
                                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop";
                            }}
                            alt="Porträt von Clemens Rau (Platzhalter)"
                            className="aspect-[4/5] w-full rounded-xl object-cover"
                          />
                          <div className="grid gap-2 text-sm">
                            <div className="flex flex-wrap gap-2">
                              <Badge>Größe: 184 cm</Badge>
                              <Badge>Gewicht: 78 kg</Badge>
                              <Badge>Augen: blau-grau</Badge>
                              <Badge>Haare: dunkelblond</Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Badge>Sprachen: DE, EN</Badge>
                              <Badge>Dialekte: Berlin, Norddeutsch</Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Badge>
                                Skills: Gesang, Improvisation, Schauspiel
                              </Badge>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <IconLink href="#" label="Sedcard PDF">
                                <Download className="h-4 w-4" /> Sedcard (PDF)
                              </IconLink>
                            </div>
                          </div>
                        </div>
                      </Card>

                      {/* Middle: Gallery */}
                      <Card className="lg:col-span-2">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                          {[
                            "/clemens-anzug-portrait.jpeg",
                            "/clemens-lila.jpeg",
                            "/clemens-outside.jpeg",
                            "/clemens-outside-2.jpeg",
                            "/clemens-zaun-outside.jpeg",
                            "/clemens-sw.jpeg",
                          ].map((src, i) => (
                            <img
                              key={src}
                              src={src}
                              alt={`Headshot ${i + 1}`}
                              className="aspect-[4/5] w-full rounded-xl object-cover"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      </Card>

                      {/* Projekte Tabelle */}
                      <Card className="lg:col-span-3" id="projects">
                        <h3 className="mb-4 text-xl font-semibold">
                          Ausgewählte Projekte
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-separate border-spacing-y-2 text-left">
                            <thead className="text-slate-400">
                              <tr>
                                <th className="px-3 py-2 text-xs">Jahr</th>
                                <th className="px-3 py-2 text-xs">Titel</th>
                                <th className="px-3 py-2 text-xs">Rolle</th>
                                <th className="px-3 py-2 text-xs">
                                  Produktionsfirma
                                </th>
                                <th className="px-3 py-2 text-xs">Art</th>
                                <th className="px-3 py-2 text-xs">Links</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                {
                                  year: 2025,
                                  title:
                                    "Wie tickt Deutschland - Show mit Linda Zervakis",
                                  role: "Karrieremann",
                                  prod: "Nordendfilm Pro7",
                                  dir: "Darsteller",
                                  link: "",
                                },
                                {
                                  year: 2025,
                                  title: "Lascana Werbung Sommer",
                                  role: "Büro Kollege",
                                  prod: "Sunshine",
                                  dir: "Darsteller",
                                  link: "",
                                },
                                {
                                  year: 2024,
                                  title: "Alter Weicher Mann TikTok",
                                  role: "Kinobesucher",
                                  prod: "NDR",
                                  dir: "Darsteller",
                                  link: "",
                                },
                                {
                                  year: 2024,
                                  title: "Keine Scheidung ohne Leichen",
                                  role: "Eisbär & Kripobeamter",
                                  prod: "ZDF",
                                  dir: "Darsteller",
                                  link: "https://presseportal.zdf.de/pressemappe/keine-scheidung-ohne-leiche",
                                },
                                {
                                  year: 2021,
                                  title: "German Crime Story: Gefesselt",
                                  role: "Polizist",
                                  prod: "Amazon Prime",
                                  dir: "Darsteller",
                                  link: "https://www.amazon.de/German-Crime-Story-Gefesselt/dp/B0B6GNF2VQ",
                                },
                                {
                                  year: 2021,
                                  title: "German Crime Story: Gefesselt",
                                  role: "Hafenarbeiter",
                                  prod: "Amazon Prime",
                                  dir: "Komparse",
                                  link: "https://www.amazon.de/German-Crime-Story-Gefesselt/dp/B0B6GNF2VQ",
                                },
                                {
                                  year: 2020,
                                  title:
                                    "Tatort: Borowski und die Angst der weißen Männer",
                                  role: "Neo-Nazi",
                                  prod: "NDR & ARD",
                                  dir: "Darsteller",
                                  link: "https://www.ndr.de/der_ndr/presse/mappen/borowskiunddieangst100.pdf",
                                },
                                {
                                  year: 2020,
                                  title:
                                    "Tatort: Borowski und die Angst der weißen Männer",
                                  role: "Workshop Besucher",
                                  prod: "NDR & ARD",
                                  dir: "Komparse",
                                  link: "https://www.ndr.de/der_ndr/presse/mappen/borowskiunddieangst100.pdf",
                                },
                              ].map((p, i) => (
                                <tr
                                  key={i}
                                  className="rounded-xl bg-slate-900/60"
                                >
                                  <td className="px-3 py-3 text-sm">
                                    <div className="inline-flex items-center gap-2">
                                      <Calendar className="h-3.5 w-3.5" />
                                      {p.year}
                                    </div>
                                  </td>
                                  <td className="px-3 py-3 text-sm font-medium">
                                    {p.title}
                                  </td>
                                  <td className="px-3 py-3 text-sm">
                                    {p.role}
                                  </td>
                                  <td className="px-3 py-3 text-sm">
                                    <div className="inline-flex items-center gap-2">
                                      <Building2 className="h-3.5 w-3.5" />
                                      {p.prod}
                                    </div>
                                  </td>
                                  <td className="px-3 py-3 text-sm">{p.dir}</td>
                                  <td className="px-3 py-3 text-sm">
                                    {p.link ? (
                                      <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 hover:underline"
                                      >
                                        Mehr{" "}
                                        <ExternalLink className="h-3.5 w-3.5" />
                                      </a>
                                    ) : (
                                      <span className="inline-flex items-center gap-1 text-slate-400 cursor-not-allowed">
                                        Mehr{" "}
                                        <ExternalLink className="h-3.5 w-3.5" />
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </Card>
                    </div>
                  </motion.section>
                ) : (
                  <motion.section
                    key="it"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    aria-labelledby="it-title"
                    className="py-12 sm:py-16"
                  >
                    <SectionTitle
                      eyebrow="IT / Programmierung"
                      title={
                        <span id="it-title">Skills, Projekte & Leistungen</span>
                      }
                      subtitle="Technischer Überblick, ausgewählte Repositories und Projekt-Highlights."
                    />

                    {/* Skills */}
                    <div className="grid gap-6 lg:grid-cols-3">
                      <Card>
                        <h3 className="text-lg font-semibold">Sprachen</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["TypeScript", "Python", "Go", "SQL"].map((s) => (
                            <Badge key={s}>{s}</Badge>
                          ))}
                        </div>
                        <h3 className="mt-6 text-lg font-semibold">
                          Frameworks
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["React", "Next.js", "Node.js", "Express"].map(
                            (s) => (
                              <Badge key={s}>{s}</Badge>
                            )
                          )}
                        </div>
                        <h3 className="mt-6 text-lg font-semibold">
                          DevOps / Cloud
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["Docker", "CI/CD", "AWS", "Vercel"].map((s) => (
                            <Badge key={s}>{s}</Badge>
                          ))}
                        </div>
                        <h3 className="mt-6 text-lg font-semibold">Testing</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["Jest", "Playwright", "Vitest"].map((s) => (
                            <Badge key={s}>{s}</Badge>
                          ))}
                        </div>
                      </Card>

                      {/* Projects */}
                      <Card className="lg:col-span-2" id="projects">
                        <div className="mb-4 flex items-center justify-between">
                          <h3 className="text-lg font-semibold">
                            Ausgewählte Repositories & Cases
                          </h3>
                          <a
                            href="https://github.com/ClemensRau1337/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:underline"
                          >
                            <Github className="h-4 w-4" /> Profil ansehen
                          </a>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          {[
                            {
                              name: "Aviation Planning Tools",
                              desc: "Sammlung an Web-Apps und Tools zur Flugvorbereitung und Planung von privaten Flügen.",
                              stack: ["Node", "Typescript", "Vercel"],
                              stars: 0,
                              links: {
                                github: "",
                                live: "https://landestreckenrechner.vercel.app/sammlung",
                              },
                            },
                            {
                              name: "1Password PDF Export CLI Tool",
                              desc: "CLI tool für das Exportieren von PDFs aus 1Password Passwortspeicher.",
                              stack: ["PDFMaker", "GoLang", "1Password CLI"],
                              stars: 0,
                              links: { github: "https://github.com/ClemensRau1337/onepw-pdf-export", live: "" },
                            },
                            {
                              name: "clemensrau/portfolio",
                              desc: "Moderne, performante persönliche Website mit Next.js.",
                              stack: ["Next.js", "Tailwind", "Framer Motion"],
                              stars: 0,
                              links: { github: "https://github.com/ClemensRau1337/personal-portfolio", live: "https://clemensrau.de" },
                            },
                          ].map((p, i) => (
                            <div
                              key={i}
                              className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-slate-700 hover:bg-slate-900"
                            >
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold">{p.name}</h4>
                                <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                                  <Star className="h-3.5 w-3.5" /> {p.stars}
                                </span>
                              </div>
                              <p className="mt-2 text-sm text-slate-300">
                                {p.desc}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {p.stack.map((s) => (
                                  <Badge key={s}>{s}</Badge>
                                ))}
                              </div>
                              <div className="mt-4 flex items-center gap-3">
                                {p.links.github && (
                                  <IconLink
                                    href={p.links.github}
                                    label="GitHub"
                                  >
                                    <Github className="h-4 w-4" /> Code
                                  </IconLink>
                                )}

                                {p.links.live && (
                                <IconLink href={p.links.live} label="Live Demo">
                                  <ExternalLink className="h-4 w-4" /> Live
                                </IconLink>
                                )}

                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>

                    {/* Services */}
                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                      {[
                        {
                          title: "Beratung & Architektur",
                          text: "Von der Idee zur robusten, skalierbaren Lösung.",
                        },
                        {
                          title: "Webapps & Prototypen",
                          text: "Schnelle, nutzerzentrierte Umsetzungen mit messbarem Impact.",
                        },
                        {
                          title: "CI/CD & Automatisierung",
                          text: "Nahtlose Deployments und Qualitätssicherung.",
                        },
                      ].map((s, i) => (
                        <Card key={i}>
                          <h4 className="text-lg font-semibold">{s.title}</h4>
                          <p className="mt-2 text-slate-300">{s.text}</p>
                        </Card>
                      ))}
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </Container>

            {/* About */}
            <section id="about" className="py-12 sm:py-16">
              <Container>
                <Card>
                  <div className="grid items-center gap-6 md:grid-cols-[1.2fr_2fr]">
                    <img
                      src="/clemens-close-up-neutral-2.jpeg"
                      alt="Clemens am Arbeitsplatz"
                      className="w-full rounded-xl object-contain bg-slate-800"
                    />

                    <div>
                      <SectionTitle
                        eyebrow="Über mich"
                        title="Hallo, ich bin Clemens."
                      />
                      <p className="text-slate-300">
                        Ich liebe es, komplexe Probleme zu verstehen und
                        elegante Lösungen zu bauen – im Code ebenso wie in der
                        Darstellung von Figuren. Teamarbeit, Klarheit und
                        Verlässlichkeit sind mir wichtig.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Remote & vor Ort (DE)</Badge>
                        <Badge>Deutsch & Englisch</Badge>
                        <Badge>Verfügbar für Buchungen</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </Container>
            </section>

            {/* Interessen & Engagement */}
            <section id="more" className="py-12 sm:py-16">
              <Container>
                <SectionTitle
                  eyebrow="Mehr über mich"
                  title="Interessen & Engagement"
                  subtitle="Ein paar Dinge, die mich außerhalb von Job und Bühne antreiben."
                />
                <Card>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-semibold">Hobbys</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          "Rennrad",
                          "Fliegerei (Privatpilot)",
                          "Motorrad",
                          "Boot fahren",
                          "Reisen",
                        ].map((h) => (
                          <Badge key={h}>{h}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Ehrenämter</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          "IHK Prüfer für Fachinformatiker",
                          "DFB Fußball-Schiedsrichter",
                        ].map((e) => (
                          <Badge key={e}>{e}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Container>
            </section>

            {/* Contact */}
            <section id="contact" className="py-12 sm:py-16">
              <Container>
                <SectionTitle
                  eyebrow="Kontakt"
                  title="Projekt anfragen oder buchen"
                  subtitle="Schreibe mir eine kurze Nachricht. Ich melde mich zeitnah."
                />
                <Card>
                  <form
                    className="grid gap-4 sm:grid-cols-2"
                    action="https://formsubmit.co/mail@clemensrau.de"
                    method="POST"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const data = new FormData(form);

                      // Spam-Schutz: Honeypot + Mindestzeit (1.5s)
                      if (data.get("hp_field")) return;

                      const payload = {
                        name: data.get("name"),
                        email: data.get("email"),
                        message: data.get("message"),
                        _subject: "Anfrage über clemensrau.de",
                        _template: "table",
                        _captcha: "false",
                      };

                      setSending(true);
                      setErrorMsg("");
                      try {
                        const res = await fetch(FORM_ENDPOINT, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                          },
                          body: JSON.stringify(payload),
                        });
                        if (!res.ok) throw new Error("Fehler beim Senden");
                        setSent(true);
                        form.reset();
                      } catch (err) {
                        // Fallback: klassisch per POST absenden
                        setErrorMsg(
                          "Konnte nicht per AJAX senden – versuche Standard-Übermittlung…"
                        );
                        setTimeout(() => {
                          form.submit();
                        }, 300);
                      } finally {
                        setSending(false);
                      }
                    }}
                  >
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="hp_field"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <input
                      type="hidden"
                      name="_subject"
                      value="Anfrage über clemensrau.de"
                    />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm text-slate-300">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 outline-none ring-rose-500/40 placeholder:text-slate-500 focus:ring"
                        placeholder="Dein Name"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm text-slate-300">
                        E-Mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 outline-none ring-rose-500/40 placeholder:text-slate-500 focus:ring"
                        placeholder="du@example.com"
                      />
                    </div>

                    <div className="grid gap-2 sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="text-sm text-slate-300"
                      >
                        Nachricht
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 outline-none ring-rose-500/40 placeholder:text-slate-500 focus:ring"
                        placeholder="Worum geht es?"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={sending}
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-rose-950/30 transition hover:brightness-105 focus:outline-none focus-visible:ring focus-visible:ring-rose-500/50 disabled:opacity-60"
                      >
                        {sending ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Senden…
                          </>
                        ) : (
                          <>
                            Senden <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                      <div className="mt-3 min-h-[1.5rem]" aria-live="polite">
                        {sent && (
                          <p className="inline-flex items-center gap-2 text-sm text-emerald-400">
                            <CheckCircle2 className="h-4 w-4" /> Danke! Deine
                            Nachricht wurde gesendet.
                          </p>
                        )}
                        {!sent && errorMsg && (
                          <p className="text-xs text-rose-300">{errorMsg}</p>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-slate-400">
                        Mit dem Absenden erklärst du dich mit der Speicherung
                        deiner Angaben zur Bearbeitung der Anfrage
                        einverstanden.
                      </p>
                    </div>
                  </form>
                </Card>
              </Container>
            </section>
          </main>
        </>
      )}

      {route === "impressum" && <Impressum />}

      {/* Footer */}
      <footer className="border-t border-slate-900/70 py-8">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Clemens Rau. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#impressum"
              className="text-sm text-slate-400 hover:text-slate-200"
            >
              Impressum
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
