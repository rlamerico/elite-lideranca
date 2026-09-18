import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Gift } from "lucide-react";
import { HoverPlayVideo } from "@/components/hover-play-video";
const paulaImg = "/Paula.JPG";
const turma1 = "/turma1.jpeg";
const turma2 = "/turma2.jpeg";
const discReport = "/disc-report.jpg";
const depoimentoVideo = "/depoimento-cliente.mp4";
const depoimentoPoster = "/depoimento-cliente-poster.jpg";
const feedbackPrint = "/depoimento_whats_01.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E.LI.TE | Curso Presencial de Liderança | Paula Tamara" },
      {
        name: "description",
        content:
          "Curso presencial de liderança: 10 de outubro em Cachoeirinha (ACC) e 07 de novembro em Gravataí (Sindilojas). 8h de conteúdo prático: comunicação, engajamento, perfil comportamental e autoliderança.",
      },
      { property: "og:title", content: "E.LI.TE: Evolua, Lidere, Transforme" },
      {
        property: "og:description",
        content:
          "Liderança não se improvisa, se desenvolve. Curso presencial de 8h com Paula Tamara: 10 out em Cachoeirinha (ACC) e 07 nov em Gravataí (Sindilojas).",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: "/Paula.JPG" },
      {
        property: "og:image:alt",
        content: "Paula Tamara | Curso E.LI.TE de Liderança",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/Paula.JPG" },
    ],
  }),
  component: Index,
});

const WA_INSCRICOES =
  "https://wa.me/5551998119251?text=Ol%C3%A1%2C+quero+mais+informa%C3%A7%C3%B5es+sobre+o+curso+ELITE";
const WA_ACC =
  "https://wa.me/5551985778553?text=Ol%C3%A1%2C+sou+s%C3%B3cio+da+ACC+e+quero+mais+informa%C3%A7%C3%B5es+sobre+o+ELITE";
const SYMPLA_URL =
  "https://www.sympla.com.br/evento/treinamento-elite-lideranca-e-gestao-de-pessoas-copia/3569765";

const EASE = [0.22, 1, 0.36, 1] as const;

const ELITE_SEGMENTS = [
  { t: "E", d: 0.2 },
  { t: ".", d: 0.3 },
  { t: "LI", d: 0.36, accent: true },
  { t: ".", d: 0.46 },
  { t: "TE", d: 0.54 },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

const pilares = [
  {
    n: "01",
    t: "Comunicação e Feedback",
    d: "Diálogos claros e feedbacks que desenvolvem o time sem desmotivar.",
  },
  {
    n: "02",
    t: "Motivação e Engajamento",
    d: "O que realmente move as pessoas e como sustentar isso no dia a dia.",
  },
  {
    n: "03",
    t: "Rotinas de Gerenciamento de Pessoas",
    d: "Estruturas e ritmos que organizam a gestão da sua equipe.",
  },
  {
    n: "04",
    t: "Perfil Comportamental",
    d: "Entenda os perfis para liderar cada pessoa do jeito certo.",
  },
  { n: "05", t: "Autoliderança", d: "Lidere a si mesmo antes de liderar os outros." },
];

const paraQuem = [
  "Donos e gestores de empresas",
  "Líderes e coordenadores de equipe",
  "Empreendedores e profissionais liberais",
  "Quem vai assumir uma posição de liderança",
];

const voceLeva = [
  "Clareza para dar feedback e direcionar o time",
  "Equipes mais engajadas e produtivas",
  "Uma rotina de gestão estruturada",
  "Elevação do nível de consciência profissional",
];

const lotes = [
  {
    lote: "1º LOTE",
    preco: "12x R$ 80,67",
    parcelas: "ou R$ 780 à vista",
    destaque: true,
    tag: "LOTE ATUAL",
    status: "Disponível agora",
  },
  {
    lote: "2º LOTE",
    preco: "12x R$ 92,05",
    parcelas: "ou R$ 890 à vista",
    destaque: false,
    status: "Esgota em breve",
  },
  {
    lote: "3º LOTE",
    preco: "12x R$ 123,07",
    parcelas: "ou R$ 1.190 à vista",
    destaque: false,
    status: "",
  },
];

const numeros = [
  { v: "Desde 2018", k: "desenvolvendo líderes" },
  { v: "+15 anos", k: "de experiência em gestão" },
  { v: "Brasil & exterior", k: "alcance dos treinamentos" },
  { v: "100% presencial", k: "prática e mão na massa" },
];

const disc = [
  { letter: "D", name: "Dominância", desc: "Foco em resultado e decisão.", color: "#C0492F" },
  { letter: "I", name: "Influência", desc: "Comunicação e relacionamento.", color: "#E0A93B" },
  { letter: "C", name: "Conformidade", desc: "Precisão e análise.", color: "#5B8AAE" },
  { letter: "S", name: "Estabilidade", desc: "Constância e cooperação.", color: "#8C9670" },
];

const depoimentoVideoInfo = {
  nome: "Leandro",
  cargo: "Frealle Auto Center · Área automotiva",
  fala: "Aprendi a dar o feedback para os meus funcionários. Eu indico o E.LI.TE pra todos os líderes.",
  exemplo: false,
};

const depoimentoPrintInfo = {
  nome: "",
  cargo: "Participante do E.LI.TE presencial",
  fala: "Saio de hoje com muita esperança de construir uma equipe mais autônoma e uma cultura mais forte no meu negócio.",
  exemplo: false,
};

function PlaceholderTag({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <span className="absolute right-3 top-3 z-10 bg-navy-deep/85 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.22em] text-cream">
      Exemplo
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-sage-deep">
      {children}
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      aria-hidden={!show}
      initial={false}
      animate={show ? { y: 0, opacity: 1 } : { y: "120%", opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-sage/30 bg-navy-deep/95 backdrop-blur supports-[backdrop-filter]:bg-navy-deep/80"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-10">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.28em] text-sage">
            1º lote · melhor preço
          </p>
          <p className="truncate font-display text-base text-cream md:text-lg">
            12x R$ 80,67 <span className="text-cream/50">ou R$ 780 à vista</span>
          </p>
        </div>
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex shrink-0 items-center gap-2 bg-sage px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-navy-deep transition hover:bg-cream"
        >
          Garantir vaga
          <span aria-hidden className="transition group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-cream text-navy-deep antialiased">
      <StickyCta />
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-3 border-l-2 border-sage pl-3">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.28em] text-navy-deep">
                PAULA TAMARA
              </p>
              <p className="text-[9px] tracking-[0.32em] text-sage-deep">EDUCAÇÃO EMPRESARIAL</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden border border-sage/60 px-4 py-2 text-[11px] tracking-[0.28em] text-navy-deep md:block">
              10 OUT · 07 NOV · 2026
            </div>
            <a
              href={SYMPLA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-navy-deep px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-sage-deep"
            >
              Inscrever-se
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-cream text-navy-deep">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(20,20,40,0.5) 1px, transparent 0)",
            backgroundSize: "3px 3px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-sage/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 md:px-10 md:pb-32 md:pt-44">
          <div className="grid items-end gap-16 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <motion.div {...fadeUp(0)}>
                <Eyebrow>Curso Presencial de Liderança · 8&nbsp;horas</Eyebrow>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, letterSpacing: "0.06em" }}
                animate={{ opacity: 1, letterSpacing: "-0.025em" }}
                transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
                className="mt-8 font-display text-[clamp(4.5rem,15vw,11rem)] font-semibold leading-[0.85] text-navy-deep"
              >
                {ELITE_SEGMENTS.map((s, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={
                      s.accent
                        ? { opacity: 0, y: 8, color: "oklch(0.72 0.06 115)" }
                        : { opacity: 0, y: 8 }
                    }
                    animate={
                      s.accent
                        ? { opacity: 1, y: 0, color: "oklch(0.17 0.04 260)" }
                        : { opacity: 1, y: 0 }
                    }
                    transition={{
                      duration: s.accent ? 1.2 : 0.5,
                      delay: s.d,
                      ease: EASE,
                      color: { duration: 1.2, delay: s.d + 0.6, ease: EASE },
                    }}
                  >
                    {s.t}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.95, ease: EASE }}
                className="mt-6 flex items-center gap-4"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.95, ease: EASE }}
                  className="h-px w-16 origin-left bg-sage-deep"
                />
                <motion.p
                  initial={{ opacity: 0, letterSpacing: "0.08em" }}
                  animate={{ opacity: 1, letterSpacing: "0.4em" }}
                  transition={{ duration: 0.6, delay: 1.05, ease: EASE }}
                  className="text-sm"
                >
                  <span className="text-navy-deep">E</span>
                  <span className="text-sage-deep">volua</span>{" "}
                  <span className="text-navy-deep">LI</span>
                  <span className="text-sage-deep">dere</span>{" "}
                  <span className="text-navy-deep">T</span>
                  <span className="text-sage-deep">ransform</span>
                  <span className="text-navy-deep">E</span>
                </motion.p>
              </motion.div>
              <motion.p
                {...fadeUp(1.2)}
                className="mt-10 max-w-xl font-display text-2xl leading-snug text-navy-deep md:text-3xl"
              >
                Liderança não se improvisa,{" "}
                <em className="not-italic text-sage-deep">se desenvolve.</em>
              </motion.p>
              <motion.p
                {...fadeUp(1.3)}
                className="mt-5 max-w-lg text-base leading-relaxed text-navy-deep/70"
              >
                Transforme a forma como você comunica, engaja e gera resultados através das pessoas.
              </motion.p>
              <motion.div {...fadeUp(1.4)} className="mt-10 flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SYMPLA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 bg-navy-deep px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-sage-deep md:px-6 md:py-4 md:text-sm"
                  >
                    Vaga • 10 out
                    <span aria-hidden className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href={SYMPLA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 bg-navy-deep px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-sage-deep md:px-6 md:py-4 md:text-sm"
                  >
                    Vaga • 07 nov
                    <span aria-hidden className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
                <a
                  href="#conteudo"
                  className="text-sm uppercase tracking-[0.2em] text-navy-deep/80 underline-offset-8 hover:underline"
                >
                  Ver o conteúdo
                </a>
              </motion.div>
            </div>

            {/* meta column */}
            <div className="space-y-4 lg:mb-2">
              <motion.div
                {...fadeUp(0.7)}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(20,20,40,0.12)" }}
                transition={{ duration: 0.3, ease: EASE }}
                className="grid grid-cols-2 gap-px border border-sage/40 bg-sage/40 text-navy-deep"
              >
                {[
                  { k: "Data", v: "10 out · 2026" },
                  { k: "Horário", v: "08h30 às 17h30" },
                  { k: "Local", v: "ACC · Cachoeirinha/RS" },
                  { k: "Vagas", v: "Limitadas" },
                ].map((it) => (
                  <div key={it.k} className="bg-cream p-6">
                    <p className="text-[10px] tracking-[0.28em] text-sage-deep">
                      {it.k.toUpperCase()}
                    </p>
                    <p className="mt-2 font-display text-lg">{it.v}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div
                {...fadeUp(0.8)}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(20,20,40,0.12)" }}
                transition={{ duration: 0.3, ease: EASE }}
                className="grid grid-cols-2 gap-px border border-sage/40 bg-sage/40 text-navy-deep"
              >
                {[
                  { k: "Data", v: "07 nov · 2026" },
                  { k: "Horário", v: "08h30 às 17h30" },
                  { k: "Local", v: "Sindilojas · Gravataí/RS" },
                  { k: "Vagas", v: "Limitadas" },
                ].map((it) => (
                  <div key={it.k} className="bg-cream p-6">
                    <p className="text-[10px] tracking-[0.28em] text-sage-deep">
                      {it.k.toUpperCase()}
                    </p>
                    <p className="mt-2 font-display text-lg">{it.v}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-sage/50" />
      </section>

      {/* PILARES */}
      <section id="conteudo" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Eyebrow>O que você vai desenvolver</Eyebrow>
              <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
                5 pilares para liderar com consistência
              </h2>
              <div className="mt-8 inline-flex border border-sage/50 px-4 py-2 text-[11px] tracking-[0.28em] text-sage-deep">
                CONTEÚDO · 8H
              </div>
            </div>
            <ul className="divide-y divide-sage/30 border-y border-sage/30">
              {pilares.map((p) => (
                <li
                  key={p.n}
                  className="group grid grid-cols-[auto_1fr] gap-8 py-7 transition hover:bg-cream-soft md:gap-12 md:py-9"
                >
                  <span className="font-display text-5xl font-medium text-sage md:text-6xl">
                    {p.n}
                  </span>
                  <div className="self-center">
                    <h3 className="font-display text-xl font-semibold md:text-2xl">{p.t}</h3>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                      {p.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem / O que leva */}
          <div className="mt-24 grid gap-12 border-t border-sage/30 pt-16 md:grid-cols-2 md:gap-20">
            <div>
              <Eyebrow>Para quem é</Eyebrow>
              <ul className="mt-8 space-y-5">
                {paraQuem.map((i) => (
                  <li key={i} className="flex items-start gap-4 text-base">
                    <span className="mt-2 h-px w-6 shrink-0 bg-sage" />
                    <span className="font-medium">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:border-l md:border-sage/30 md:pl-20">
              <Eyebrow>O que você leva</Eyebrow>
              <ul className="mt-8 space-y-5">
                {voceLeva.map((i) => (
                  <li key={i} className="flex items-start gap-4 text-base">
                    <span className="mt-2 h-px w-6 shrink-0 bg-sage" />
                    <span className="font-medium">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BÔNUS DISC */}
      <section className="relative overflow-hidden bg-navy-deep py-24 text-cream md:py-32">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 left-0 select-none font-display text-[30vw] font-bold leading-none text-cream/[0.035] md:text-[18rem]"
        >
          DISC
        </span>
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center bg-cream/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-cream">
                Bônus Exclusivo
              </span>
              <Gift aria-hidden className="h-6 w-6 text-sage" />
            </div>
            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-sage">
              Incluso na sua inscrição
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Análise de Perfil Comportamental <span className="text-sage">DISC</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
              Cada líder receberá um{" "}
              <strong className="font-semibold text-cream">relatório completo</strong> sobre o seu
              perfil comportamental, suas maiores forças e os principais pontos de melhoria.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="mt-12">
              <div className="border border-sage/30 bg-[#0a1422] p-2.5">
                <img
                  src={discReport}
                  alt="Exemplo de relatório DISC com análise de perfil comportamental"
                  className="block h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-cream/50">
                Exemplo de relatório individual, entregue a cada participante
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-16 text-[11px] uppercase tracking-[0.28em] text-sage">
              Os 4 perfis que você vai entender
            </p>
            <div className="mt-6 grid grid-cols-2 gap-px border border-cream/10 bg-cream/10 lg:grid-cols-4">
              {disc.map((p) => (
                <div
                  key={p.letter}
                  className="bg-navy-deep px-5 py-6"
                  style={{ borderTop: `3px solid ${p.color}` }}
                >
                  <span
                    className="font-display text-4xl font-bold leading-none"
                    style={{ color: p.color }}
                  >
                    {p.letter}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-cream">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-cream/55">{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTRUTORA */}
      <section className="bg-cream-soft py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal className="relative">
            <div className="absolute -left-3 -top-3 hidden h-full w-full border border-sage lg:block" />
            <img
              src={paulaImg}
              alt="Paula Tamara, educadora empresarial"
              className="relative w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Eyebrow>A treinadora</Eyebrow>
            <h2 className="mt-6 font-display text-5xl md:text-6xl">Paula Tamara</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-deep/85">
              <p>
                Educadora empresarial com graduação e MBA em Finanças e pós-graduação em Gestão de
                Pessoas. Mais de 15 anos de experiência em gestão. Desde 2018, desenvolve líderes,
                empreendedores e profissionais liberais no Brasil e no exterior, com foco em
                crescimento estruturado, posicionamento estratégico e resultados sustentáveis.
              </p>
              <p>
                Uma abordagem prática e orientada à ação, que promove mudança de mentalidade e
                elevação do nível de consciência profissional, refletindo diretamente na
                performance.
              </p>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-3">
              {[
                "MBA em Finanças",
                "Pós em Gestão de Pessoas",
                "+15 anos em gestão",
                "Brasil & exterior",
              ].map((b) => (
                <div
                  key={b}
                  className="border border-sage/60 px-4 py-3 text-center text-sm font-medium text-navy-deep"
                >
                  {b}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-cream py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Eyebrow>Quem já viveu essa experiência</Eyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-12 grid grid-cols-2 gap-px border border-sage/40 bg-sage/40 lg:grid-cols-4">
              {numeros.map((n) => (
                <div key={n.v} className="bg-cream px-6 py-8">
                  <dt className="font-display text-2xl font-medium text-navy-deep md:text-3xl">
                    {n.v}
                  </dt>
                  <dd className="mt-2 text-[13px] leading-snug text-muted-foreground">{n.k}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[turma1, turma2].map((src, i) => (
                <figure
                  key={i}
                  className="group relative flex items-center justify-center overflow-hidden border border-sage/40 bg-sage/5"
                >
                  <img
                    src={src}
                    alt={`Turma ${i + 1} do curso E.LI.TE`}
                    className="max-h-[400px] w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-deep/70 to-transparent px-5 py-4 text-[11px] uppercase tracking-[0.24em] text-cream">
                    Turma {i + 1} · E.LI.TE presencial
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-cream-soft py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <Eyebrow>Na voz de quem participou</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-navy-deep md:text-4xl">
              O que muda na segunda-feira depois do curso
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal delay={0.1}>
              <figure className="flex h-full flex-col border border-sage/40 bg-cream">
                <div className="relative aspect-[4/5] w-full bg-navy-deep">
                  <PlaceholderTag show={depoimentoVideoInfo.exemplo} />
                  <HoverPlayVideo
                    src={depoimentoVideo}
                    poster={depoimentoPoster}
                    label={`Depoimento de ${depoimentoVideoInfo.nome} sobre o curso E.LI.TE`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <figcaption className="flex flex-1 flex-col justify-between gap-4 px-6 py-6">
                  <p className="font-display text-lg leading-snug text-navy-deep">
                    “{depoimentoVideoInfo.fala}”
                  </p>
                  <div className="border-l-2 border-sage pl-3">
                    <p className="text-[13px] font-medium text-navy-deep">
                      {depoimentoVideoInfo.nome}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-sage-deep">
                      {depoimentoVideoInfo.cargo}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.15}>
              <figure className="flex h-full flex-col border border-sage/40 bg-cream">
                <div className="relative flex min-h-0 flex-1 items-center justify-center bg-sage/5 p-5">
                  <PlaceholderTag show={depoimentoPrintInfo.exemplo} />
                  <img
                    src={feedbackPrint}
                    alt="Mensagem de uma participante agradecendo pelo curso E.LI.TE"
                    className="h-full max-h-[640px] w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <figcaption className="flex flex-col gap-4 border-t border-sage/30 px-6 py-6">
                  <p className="font-display text-lg leading-snug text-navy-deep">
                    “{depoimentoPrintInfo.fala}”
                  </p>
                  <div className="border-l-2 border-sage pl-3">
                    {depoimentoPrintInfo.nome && (
                      <p className="text-[13px] font-medium text-navy-deep">
                        {depoimentoPrintInfo.nome}
                      </p>
                    )}
                    <p className="text-[11px] uppercase tracking-[0.2em] text-sage-deep">
                      {depoimentoPrintInfo.cargo}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section className="bg-navy-deep py-24 text-cream md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Investimento</Eyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Escolha seu lote</h2>
            </div>
            <p className="max-w-sm text-sm text-cream/70">
              Vagas limitadas. Quanto antes você se inscrever, melhor o preço.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {lotes.map((l) => (
              <a
                href={SYMPLA_URL}
                target="_blank"
                rel="noreferrer"
                key={l.lote}
                className={`relative flex flex-col border p-8 transition ${
                  l.destaque
                    ? "border-sage bg-sage/5 hover:bg-sage/10"
                    : "border-cream/15 hover:border-sage/60 hover:bg-cream/5"
                }`}
              >
                {l.tag && (
                  <span className="absolute -top-3 left-8 bg-sage px-3 py-1 text-[10px] tracking-[0.28em] text-navy-deep">
                    {l.tag}
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-[11px] tracking-[0.32em] text-sage">{l.lote}</p>
                  {l.status && (
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] ${
                        l.destaque ? "text-sage" : "text-cream/45"
                      }`}
                    >
                      {l.destaque && (
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
                      )}
                      {l.status}
                    </span>
                  )}
                </div>
                <p className="mt-8 font-display text-4xl md:text-5xl font-medium text-cream">
                  {l.preco}
                </p>
                <p className="mt-3 text-sm text-cream/60">{l.parcelas}</p>
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-sage">Condições especiais para sócios da ACC.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={SYMPLA_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-sage px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-navy-deep transition hover:bg-cream"
            >
              Inscrever-se pelo Sympla
              <span aria-hidden className="transition group-hover:translate-x-1">
                →
              </span>
            </a>
            <span className="text-xs uppercase tracking-[0.24em] text-cream/60">
              Pagamento seguro · parcelamento disponível
            </span>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-navy text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-sage/20 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-24">
          <div>
            <Eyebrow>Próximo passo</Eyebrow>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Fale com a gente</h2>
            <p className="mt-5 max-w-md text-cream/75">
              Inscrições pelo Sympla. Para tirar dúvidas e receber mais informações sobre o curso,
              fale com a nossa equipe pelo WhatsApp.
            </p>
            <a
              href={SYMPLA_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-sage underline-offset-8 hover:underline"
            >
              Ir para inscrição no Sympla →
            </a>
          </div>
          <div className="flex flex-col gap-4 self-center">
            <a
              href={WA_INSCRICOES}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border border-sage bg-sage px-6 py-5 text-navy-deep transition hover:bg-cream hover:border-cream"
            >
              <span>
                <span className="block text-[10px] tracking-[0.3em]">MAIORES INFORMAÇÕES</span>
                <span className="mt-1 block font-display text-2xl">+55 51 99811-9251</span>
              </span>
              <span aria-hidden className="text-xl transition group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={WA_ACC}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border border-sage/50 px-6 py-5 text-cream transition hover:border-sage hover:bg-sage/10"
            >
              <span>
                <span className="block text-[10px] tracking-[0.3em] text-sage">
                  MAIORES INFORMAÇÕES · SÓCIOS ACC
                </span>
                <span className="mt-1 block font-display text-2xl">+55 51 98577-8553</span>
              </span>
              <span aria-hidden className="text-xl transition group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep text-cream/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 pb-28 text-xs tracking-[0.18em] md:flex-row md:items-center md:px-10 md:pb-24">
          <p>© 2026 PAULA TAMARA · EDUCAÇÃO EMPRESARIAL</p>
          <p className="text-sage">CONSULTORIA · TREINAMENTO · LIDERANÇA</p>
        </div>
      </footer>
    </div>
  );
}
