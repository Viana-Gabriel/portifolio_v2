# Portfólio de landing pages (Vite, HTML estático)

A página inteira está pronta no `index.html`. O JavaScript (`src/main.js`, um único arquivo) só cuida do carrossel e da animação de entrada.

## Rodar e publicar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera dist/
npm run preview
```

Na Vercel: Framework **Vite**, build `npm run build`, saída `dist`. O `vercel.json` já define o cache.

## Como o cache funciona

O build gera arquivos com hash no nome (`/assets/index-a1b2c3.css`, `.js` e as imagens). Como o nome muda quando o conteúdo muda, a Vercel os envia com `Cache-Control: public, max-age=31536000, immutable` (1 ano). O `index.html` não é cacheado de forma fixa, então cada publicação nova é vista na hora e os arquivos antigos continuam em cache nos visitantes.

Regra de ouro: **coloque imagens em `src/assets/`** (ganham hash e cache de 1 ano). A pasta `public/` não gera hash e só é indicada para o favicon.

## Imagens

- Todas já têm `width` e `height` (evita que a página "pule" ao carregar).
- As que ficam abaixo da primeira tela têm `loading="lazy"`: só baixam quando estão perto de aparecer. As duas do topo (hero) carregam direto, porque já aparecem na primeira tela.
- Para capturas reais, prefira **WebP ou AVIF**, com largura máxima de 900 px, e ajuste `width`/`height` para as medidas reais.

## Adicionar um projeto

1. Salve a imagem em `src/assets/` (ex.: `meu-projeto.webp`).
2. No `index.html`, copie um bloco `<a class="slide"> ... </a>` dentro de `#trk`, troque a imagem, o segmento, o nome e a descrição. Os pontos e o contador se ajustam sozinhos.

## Onde editar

| O que mudar | Onde |
| --- | --- |
| Nome, textos, e-mail, redes, serviços | `index.html` |
| Cores e tipografia | `src/style.css` (`:root`) |
| Comportamento do carrossel | `src/main.js` |
| Cache e cabeçalhos | `vercel.json` |

## Se o `node_modules` foi para o repositório

Ele não deve ser versionado (já está no `.gitignore`). Para remover do Git:

```bash
git rm -r --cached node_modules
git commit -m "Remove node_modules do repositório"
git push
```
