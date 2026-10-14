import "./style.css";
import { todos } from "./data/projects.js";
import { img, BAR } from "./lib/shot.js";
import { initCarousel } from "./lib/carousel.js";

const ARROW = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const $ = (id) => document.getElementById(id);

// Imagens do hero e do case em destaque
$("v1").innerHTML = `<div class="mk">${BAR}${img(todos[0], false, "im", true)}</div>`;
$("v2").innerHTML = img(todos[2], true, "im", true).replace('class="im"', 'class="im" style="height:100%;object-fit:cover;object-position:top"');
$("big").innerHTML = BAR + img(todos[0], false, "im", true);

// Carrossel
$("trk").innerHTML = todos.map((p, i) => {
  const href = p.url || "#";
  return `<a class="slide" href="${href}" draggable="false" role="group" aria-roledescription="slide" aria-label="${i + 1} de ${todos.length}: ${p.nome}">${img(p, true, "", true)}<div class="si"><span class="k">${p.seg}</span><h3>${p.nome}</h3><p>${p.d}</p><span class="go" aria-hidden="true">${ARROW}</span></div></a>`;
}).join("");
initCarousel();

// Animação de entrada ao rolar
document.documentElement.classList.add("js");
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".rv").forEach((el) => io.observe(el));
