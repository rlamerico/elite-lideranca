# Landing Page — Curso E.LI.TE de Liderança

Vou criar uma landing page de venda em página única, mantendo fielmente a identidade visual do material (azul navy profundo, creme off-white, verde sálvia/oliva como acento, tipografia serif para títulos com sensação editorial), mas elevando o design com mais hierarquia, micro-detalhes e ritmo visual.

## Paleta e tipografia (extraída do material)

- Navy profundo `#0E1B33` (fundo hero/CTA)
- Creme `#F4EFE4` (fundo seções claras)
- Verde sálvia `#A8B17C` (acento, linhas, eyebrows)
- Off-white `#F1ECD8` para o título display
- Cinza chumbo para textos secundários

Tipografia: display serif estilo "Domine/Fraunces" para títulos como no PDF + sans humanista (Inter ou similar) para corpo. Letterspacing amplo em eyebrows maiúsculos.

## Estrutura da página (uma rota só: `/`)

```text
1. Nav minimalista — logo "PAULA TAMARA · EDUCAÇÃO EMPRESARIAL" à esquerda, data "13 & 14 JUL · 2025" à direita
2. Hero (navy)
   - eyebrow: "CURSO PRESENCIAL DE LIDERANÇA · 8 HORAS"
   - Display gigante: E.LI.TE
   - sublinha: EVOLUA · LIDERE · TRANSFORME (com cores alternadas)
   - frase: "Liderança não se improvisa — se desenvolve."
   - subcopy + CTA "Garantir minha vaga" (WhatsApp) + link secundário
   - barra inferior: DATAS · HORÁRIO · LOCAL · VAGAS
3. Seção "5 pilares" (creme) — lista numerada 01–05 com divisórias, fiel ao PDF mas com hover sutil
4. Bloco "Para quem é" / "O que você leva" — duas colunas com bullets
5. Instrutora Paula Tamara (creme) — foto retrato à esquerda + bio + badges de credenciais
6. Prova social "Quem já viveu essa experiência" — grid com as 2 fotos das turmas
7. Investimento (navy) — 3 cards de lotes (1º destacado "MELHOR PREÇO"), nota ACC
8. CTA final "Garanta sua vaga" — dois botões WhatsApp (Inscrições / Sócios ACC)
9. Footer minimalista
```

## Melhorias visuais sobre o PDF

- Hero com textura sutil (grão/noise) e linha vertical sálvia ao lado do logo (motivo do material)
- Números dos pilares em serif outline grande, com linha sálvia divisória animada no hover
- Cards de lote com borda fina sálvia; o destacado "MELHOR PREÇO" usa fundo navy + selo creme
- Botões CTA: WhatsApp abre `wa.me` direto com mensagem pré-preenchida
- Imagens das turmas com leve tratamento (cantos retos, borda sálvia fina)
- Animações discretas de entrada (fade/translate) com framer-motion — nada exagerado
- Responsivo mobile-first

## Detalhes técnicos

- Atualizar `src/styles.css` com os tokens da marca em oklch (background creme, foreground navy, primary sálvia, accent creme escuro)
- Substituir `src/routes/index.tsx` pela landing completa, com head() SEO em PT-BR (title "E.LI.TE — Curso Presencial de Liderança | Paula Tamara", meta description, og tags)
- Fontes via `<link>` no `__root.tsx` (Fraunces + Inter)
- Foto da Paula: copiar da imagem extraída para `src/assets/`
- Fotos de turma: copiar as 2 do PDF
- Componentes pequenos colocados inline no arquivo da rota (sem fragmentação prematura)
- Sem backend necessário — CTAs abrem WhatsApp via link

Não vou adicionar Lovable Cloud, formulários, ou qualquer coisa fora do escopo de landing institucional.
