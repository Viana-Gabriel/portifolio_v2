# Portfólio de landing pages

Projeto em Vite (JavaScript puro, sem framework), pronto para publicar na Vercel.

## Rodar no seu computador

Requisito: Node.js 20.19 ou superior.

```bash
npm install
npm run dev        # abre em http://localhost:5173
npm run build      # gera a pasta dist/
npm run preview    # testa a versão de produção
```

## Publicar na Vercel

**Pelo GitHub (recomendado)**

1. Crie um repositório e envie estes arquivos (`git init`, `git add .`, `git commit`, `git push`).
2. Em vercel.com, clique em **Add New → Project** e escolha o repositório.
3. A Vercel detecta o Vite sozinha. Confirme:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Clique em **Deploy**. Cada `git push` publica uma nova versão.

**Pela linha de comando**

```bash
npm i -g vercel
vercel          # primeira publicação (prévia)
vercel --prod   # publicação final
```

## Como editar

| O que mudar | Onde |
| --- | --- |
| Nome, textos, e-mail, links sociais, serviços | `index.html` |
| Projetos do carrossel | `src/data/projects.js` |
| Cores e tipografia | `src/style.css` (variáveis no topo, em `:root`) |
| Ícone da aba | `public/favicon.svg` |

### Adicionar um projeto

Abra `src/data/projects.js`, copie uma linha da lista `destaques` e troque os dados.

### Usar capturas reais no lugar das imagens fictícias

1. Salve a captura em `public/projetos/` (por exemplo, `aura.png`, proporção vertical de uma página inteira funciona melhor).
2. No projeto, adicione `imagem: "/projetos/aura.png"` e, se quiser, `url: "https://link-da-pagina.com"`.

### Trocar o case em destaque e o hero

Em `src/main.js`, as imagens do hero e do case usam `todos[0]` e `todos[2]`. Troque o número para escolher outro projeto.

## Estrutura

```
index.html            marcação da página
src/main.js           monta a página e inicia o carrossel
src/style.css         estilos (responsivos)
src/data/projects.js  dados dos projetos
src/lib/shot.js       gerador das imagens fictícias
src/lib/carousel.js   lógica do carrossel
public/               arquivos estáticos (favicon, capturas)
```
