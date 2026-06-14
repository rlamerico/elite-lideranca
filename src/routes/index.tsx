import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
const paulaImg = "/Paula.png";
const turma1 = "/turma1.jpeg";
const turma2 = "/turma2.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E.LI.TE — Curso Presencial de Liderança | Paula Tamara" },
      {
        name: "description",
        content:
          "Curso presencial de liderança em Cachoeirinha/RS, 13 e 14 de julho. 8h de conteúdo prático: comunicação, engajamento, perfil comportamental e autoliderança.",
      },
      { property: "og:title", content: "E.LI.TE — Evolua, Lidere, Transforme" },
      {
        property: "og:description",
        content:
          "Liderança não se improvisa — se desenvolve. Curso presencial de 8h com Paula Tamara em Cachoeirinha/RS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA_INSCRICOES =
  "https://wa.me/5551981192510?text=Ol%C3%A1%2C+quero+mais+informa%C3%A7%C3%B5es+sobre+o+curso+ELITE";
const WA_ACC =
  "https://wa.me/5551985778553?text=Ol%C3%A1%2C+sou+s%C3%B3cio+da+ACC+e+quero+mais+informa%C3%A7%C3%B5es+sobre+o+ELITE";
const SYMPLA_URL =
  "https://www.sympla.com.br/evento/treinamento-elite-lideranca-e-gestao-de-pessoas/3461447";

const pilares = [
  { n: "01", t: "Comunicação e Feedback", d: "Diálogos claros e feedbacks que desenvolvem o time sem desmotivar." },
  { n: "02", t: "Motivação e Engajamento", d: "O que realmente move as pessoas — e como sustentar isso no dia a dia." },
  { n: "03", t: "Rotinas de Gerenciamento de Pessoas", d: "Estruturas e ritmos que organizam a gestão da sua equipe." },
  { n: "04", t: "Perfil Comportamental", d: "Entenda os perfis para liderar cada pessoa do jeito certo." },
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
  { lote: "1º LOTE", preco: "R$ 780", parcelas: "em até 12x", destaque: true, tag: "MELHOR PREÇO" },
  { lote: "2º LOTE", preco: "R$ 890", parcelas: "em até 12x", destaque: false },
  { lote: "3º LOTE", preco: "R$ 1.190", parcelas: "em até 12x", destaque: false },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-sage-deep">
      {children}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-cream text-navy-deep antialiased">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-3 border-l-2 border-sage pl-3">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.28em] text-navy-deep">PAULA TAMARA</p>
              <p className="text-[9px] tracking-[0.32em] text-sage-deep">EDUCAÇÃO EMPRESARIAL</p>
            </div>
          </div>
          <div className="hidden border border-sage/60 px-4 py-2 text-[11px] tracking-[0.28em] text-navy-deep md:block">
            13 &amp; 14 JUL · 2026
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
              <Eyebrow>Curso Presencial de Liderança · 8 horas</Eyebrow>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-8 font-display text-[clamp(4.5rem,15vw,11rem)] font-semibold leading-[0.85] tracking-tight text-navy-deep"
              >
                E.LI.TE
              </motion.h1>
              <div className="mt-6 flex items-center gap-4">
                <span className="h-px w-16 bg-sage-deep" />
                <p className="text-sm tracking-[0.4em]">
                  <span className="text-navy-deep">E</span>
                  <span className="text-sage-deep">volua</span>{" "}
                  <span className="text-navy-deep">LI</span>
                  <span className="text-sage-deep">dere</span>{" "}
                  <span className="text-navy-deep">T</span>
                  <span className="text-sage-deep">ransform</span>
                  <span className="text-navy-deep">E</span>
                </p>
              </div>
              <p className="mt-10 max-w-xl font-display text-2xl leading-snug text-navy-deep md:text-3xl">
                Liderança não se improvisa — <em className="not-italic text-sage-deep">se desenvolve.</em>
              </p>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-navy-deep/70">
                Transforme a forma como você comunica, engaja e gera resultados através das pessoas.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={SYMPLA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 bg-navy-deep px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-sage-deep"
                >
                  Garantir minha vaga
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#conteudo"
                  className="text-sm uppercase tracking-[0.2em] text-navy-deep/80 underline-offset-8 hover:underline"
                >
                  Ver o conteúdo
                </a>
              </div>
            </div>

            {/* meta column */}
            <div className="grid grid-cols-2 gap-px border border-sage/40 bg-sage/40 text-navy-deep lg:mb-2">
              {[
                { k: "Datas", v: "13 e 14 jul · 2026" },
                { k: "Horário", v: "14h às 18h · 8h" },
                { k: "Local", v: "ACC · Cachoeirinha/RS" },
                { k: "Vagas", v: "Limitadas" },
              ].map((it) => (
                <div key={it.k} className="bg-cream p-6">
                  <p className="text-[10px] tracking-[0.28em] text-sage-deep">{it.k.toUpperCase()}</p>
                  <p className="mt-2 font-display text-lg">{it.v}</p>
                </div>
              ))}
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

      {/* INSTRUTORA */}
      <section className="bg-cream-soft py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="relative">
            <div className="absolute -left-3 -top-3 hidden h-full w-full border border-sage lg:block" />
            <img
              src={paulaImg}
              alt="Paula Tamara, educadora empresarial"
              className="relative w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <Eyebrow>A instrutora</Eyebrow>
            <h2 className="mt-6 font-display text-5xl md:text-6xl">Paula Tamara</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-deep/85">
              <p>
                Educadora empresarial com graduação e MBA em Finanças e pós-graduação em Gestão de
                Pessoas. Mais de 15 anos de experiência em gestão. Desde 2018, desenvolve líderes,
                empreendedores e profissionais liberais no Brasil e no exterior — com foco em
                crescimento estruturado, posicionamento estratégico e resultados sustentáveis.
              </p>
              <p>
                Uma abordagem prática e orientada à ação, que promove mudança de mentalidade e
                elevação do nível de consciência profissional — refletindo diretamente na
                performance.
              </p>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-3">
              {["MBA em Finanças", "Pós em Gestão de Pessoas", "+15 anos em gestão", "Brasil & exterior"].map(
                (b) => (
                  <div
                    key={b}
                    className="border border-sage/60 px-4 py-3 text-center text-sm font-medium text-navy-deep"
                  >
                    {b}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-cream py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Eyebrow>Quem já viveu essa experiência</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl md:text-4xl">
            Turmas formadas e líderes desenvolvidos por todo o país.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[turma1, turma2].map((src, i) => (
              <div key={i} className="relative overflow-hidden border border-sage/40">
                <img src={src} alt={`Turma ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
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
              <div
                key={l.lote}
                className={`relative flex flex-col border p-8 transition ${l.destaque
                  ? "border-sage bg-sage/5"
                  : "border-cream/15 hover:border-sage/60"
                  }`}
              >
                {l.tag && (
                  <span className="absolute -top-3 left-8 bg-sage px-3 py-1 text-[10px] tracking-[0.28em] text-navy-deep">
                    {l.tag}
                  </span>
                )}
                <p className="text-[11px] tracking-[0.32em] text-sage">{l.lote}</p>
                <p className="mt-8 font-display text-6xl font-medium text-cream">{l.preco}</p>
                <p className="mt-3 text-sm text-cream/60">{l.parcelas}</p>
              </div>
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
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
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
                <span className="mt-1 block font-display text-2xl">+55 51 8119-2510</span>
              </span>
              <span aria-hidden className="text-xl transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href={WA_ACC}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border border-sage/50 px-6 py-5 text-cream transition hover:border-sage hover:bg-sage/10"
            >
              <span>
                <span className="block text-[10px] tracking-[0.3em] text-sage">MAIORES INFORMAÇÕES · SÓCIOS ACC</span>
                <span className="mt-1 block font-display text-2xl">+55 51 98577-8553</span>
              </span>
              <span aria-hidden className="text-xl transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep text-cream/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-xs tracking-[0.18em] md:flex-row md:items-center md:px-10">
          <p>© 2026 PAULA TAMARA · EDUCAÇÃO EMPRESARIAL</p>
          <p className="text-sage">CONSULTORIA · TREINAMENTO · LIDERANÇA</p>
        </div>
      </footer>
    </div>
  );
}
