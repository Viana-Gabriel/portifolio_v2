// Gera imagens fictícias de landing pages em SVG (sem arquivos externos).
const r = (x, y, w, h, f, rx = 0, o = 1) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}" opacity="${o}"/>`;
const c = (x, y, rr, f, o = 1) => `<circle cx="${x}" cy="${y}" r="${rr}" fill="${f}" opacity="${o}"/>`;
const t = (x, y, sz, txt, f, a = "start") => `<text x="${x}" y="${y}" font-size="${sz}" font-weight="700" fill="${f}" text-anchor="${a}" font-family="Helvetica,Arial,sans-serif">${txt}</text>`;

function shot(p, tall) {
  const H = tall ? 860 : 480, dark = p.v === 2, tx = dark ? "#fff" : p.dk;
  let s = r(0, 0, 600, H, dark ? p.dk : p.bg) + c(52, 40, 12, p.ac) + t(72, 46, 16, p.nome, tx) + t(392, 45, 13, "Início", tx) + t(450, 45, 13, "Sobre", tx) + r(506, 26, 60, 28, p.ac, 14);
  if (p.v === 1) {
    s += t(300, 140, 34, p.h1, tx, "middle") + t(300, 182, 34, p.h2, tx, "middle") + r(150, 206, 300, 8, tx, 4, .25) + r(190, 224, 220, 8, tx, 4, .25) + r(220, 256, 160, 44, p.ac, 22) + t(300, 284, 15, p.cta, "#fff", "middle") + r(48, 330, 504, 130, p.lt, 22) + c(150, 395, 40, p.ac, .9) + c(300, 395, 40, p.dk, .8) + c(450, 395, 40, p.ac, .6);
  } else {
    s += t(36, 150, 34, p.h1, tx) + t(36, 192, 34, p.h2, tx) + r(36, 214, 250, 8, tx, 4, .25) + r(36, 232, 200, 8, tx, 4, .25) + r(36, 264, 160, 44, p.ac, 22) + t(116, 292, 15, p.cta, "#fff", "middle") + r(330, 96, 234, 350, dark ? "#fff" : p.lt, 28, dark ? .1 : 1) + c(447, 240, 72, p.ac, .9) + r(356, 372, 182, 46, "#fff", 14, .85) + r(372, 390, 100, 8, p.dk, 4, .35);
  }
  if (tall) {
    for (let i = 0; i < 3; i++) {
      const x = 36 + i * 184;
      s += c(x + 22, 540, 22, p.ac, .9) + r(x, 584, 120, 10, tx, 5, .7) + r(x, 604, 150, 7, tx, 3, .25) + r(x, 620, 130, 7, tx, 3, .25);
    }
    s += r(0, 672, 600, 100, p.ac) + t(300, 730, 22, p.band || "Resultados reais", "#fff", "middle") + r(220, 796, 160, 44, tx, 22) + t(300, 824, 15, p.cta, dark ? p.dk : "#fff", "middle");
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 ${H}">${s}</svg>`;
}

/** Retorna a tag <img> do projeto. Usa p.imagem se existir; senão, a imagem fictícia. */
export function img(p, tall, cls = "", decorative = false) {
  const src = p.imagem || `data:image/svg+xml;charset=utf-8,${encodeURIComponent(shot(p, tall))}`;
  const alt = decorative ? "" : (p.imagem ? `Captura da landing page ${p.nome}` : `Imagem fictícia da landing page ${p.nome}`);
  return `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy">`;
}

export const BAR = '<div class="bar"><b></b><b></b><b></b></div>';
