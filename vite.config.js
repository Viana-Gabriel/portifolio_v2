import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // Nada de imagens embutidas no JS/CSS: cada arquivo vai para /assets com hash no nome
    // e fica em cache do navegador por 1 ano (veja vercel.json).
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    modulePreload: { polyfill: false },
  },
});
