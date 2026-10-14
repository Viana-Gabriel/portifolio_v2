// Carrossel com efeito de profundidade, pontos, setas, teclado e arraste com o mouse.
export function initCarousel() {
  const trk = document.getElementById("trk");
  const sl = [...trk.children];
  const num = document.getElementById("num");
  const dots = document.getElementById("dots");
  const pv = document.getElementById("prev");
  const nx = document.getElementById("next");
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  let cur = 0, dragging = false, startX = 0, startLeft = 0, moved = 0;

  dots.innerHTML = sl.map((_, i) => `<button type="button" aria-label="Ir para o projeto ${i + 1}"></button>`).join("");
  [...dots.children].forEach((b, i) => (b.onclick = () => go(i)));

  function update() {
    const mid = trk.scrollLeft + trk.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    sl.forEach((el, i) => {
      const dx = (el.offsetLeft + el.offsetWidth / 2 - mid) / (el.offsetWidth + 20);
      const a = Math.abs(dx);
      el.style.setProperty("--o", Math.min(a, 2).toFixed(3));
      el.style.setProperty("--s", Math.sign(dx));
      if (a < bestDist) { bestDist = a; best = i; }
    });
    cur = best;
    num.textContent = `${String(best + 1).padStart(2, "0")} / ${String(sl.length).padStart(2, "0")}`;
    [...dots.children].forEach((d, i) => d.setAttribute("aria-current", i === best));
    pv.disabled = best === 0;
    nx.disabled = best === sl.length - 1;
  }

  function go(i) {
    i = Math.max(0, Math.min(sl.length - 1, i));
    const el = sl[i];
    trk.scrollTo({ left: el.offsetLeft + el.offsetWidth / 2 - trk.clientWidth / 2, behavior: reduce ? "auto" : "smooth" });
  }

  trk.addEventListener("scroll", () => requestAnimationFrame(update));
  addEventListener("resize", update);
  pv.onclick = () => go(cur - 1);
  nx.onclick = () => go(cur + 1);
  trk.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(cur + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(cur - 1); }
  });
  sl.forEach((el, i) => el.addEventListener("click", (ev) => {
    if (moved > 6) { ev.preventDefault(); return; }
    if (i !== cur) { ev.preventDefault(); go(i); }
  }));
  trk.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    dragging = true; moved = 0; startX = e.clientX; startLeft = trk.scrollLeft;
    trk.classList.add("drag");
  });
  addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const d = e.clientX - startX;
    moved = Math.max(moved, Math.abs(d));
    trk.scrollLeft = startLeft - d;
  });
  addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    trk.classList.remove("drag");
    go(cur);
  });

  update();
  requestAnimationFrame(() => {
    const el = sl[Math.min(2, sl.length - 1)];
    trk.scrollLeft = el.offsetLeft + el.offsetWidth / 2 - trk.clientWidth / 2;
    update();
  });
}
