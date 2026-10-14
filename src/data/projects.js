// Seus projetos ficam aqui. Para adicionar um, copie uma linha e troque os dados.
//
// Campos:
//   nome, seg     Nome do projeto e segmento
//   d             Descrição curta (uma frase)
//   imagem        (opcional) caminho de uma captura real, ex.: "/projetos/aura.png"
//                 Coloque o arquivo na pasta public/projetos/. Sem esse campo,
//                 a imagem fictícia é gerada automaticamente.
//   v             Layout da imagem fictícia: 0 dividido, 1 centralizado, 2 escuro
//   bg dk ac lt   Cores da imagem fictícia (fundo, escuro, destaque, claro)
//   h1 h2 cta     Textos da imagem fictícia (título em duas linhas e botão)
//   band          Faixa de destaque da imagem fictícia
//   url           (opcional) link da página no ar

export const projetos = [
 {nome:"Clínica Aura",seg:"Saúde",v:0,bg:"#F2FAF6",dk:"#0B3D32",ac:"#0F8A71",lt:"#CFF0E4",h1:"Cuide do seu",h2:"sorriso hoje",cta:"Agendar",d:"Agendamento sempre à vista no celular."},
 {nome:"Finlo",seg:"Tecnologia",v:2,bg:"#fff",dk:"#141C5A",ac:"#4B63F5",lt:"#DCE1FF",h1:"Controle suas",h2:"finanças",cta:"Testar grátis",d:"Cadastro em dois campos e demonstração no topo."},
 {nome:"Casa Brasa",seg:"Gastronomia",v:1,bg:"#FFF4EC",dk:"#4A1A08",ac:"#C94A18",lt:"#FFDFCC",h1:"Sabor de brasa",h2:"na sua mesa",cta:"Reservar",d:"Cardápio visual e reserva em poucos toques."},
 {nome:"Curso Prisma",seg:"Educação",v:0,bg:"#F7F1FF",dk:"#2F0F52",ac:"#8A3FD6",lt:"#E9DEFF",h1:"Aprenda design",h2:"do zero",cta:"Quero entrar",d:"Pré-venda com módulos e garantia."},
 {nome:"Vértice Imóveis",seg:"Imobiliário",v:1,bg:"#EEF4F7",dk:"#16303F",ac:"#1F6F94",lt:"#CFE3EC",h1:"Seu novo lar",h2:"te espera",cta:"Ver plantas",d:"Plantas e simulador de parcelas em destaque."},
];

export const destaques = [
 {nome:"Nômade Viagens",seg:"Turismo",v:0,bg:"#FFF9EC",dk:"#3A2A06",ac:"#B3710F",lt:"#FBE5B6",h1:"Sua próxima",h2:"aventura",cta:"Ver roteiros",band:"Viaje sem complicação",d:"Página de roteiros com reserva em poucos toques e fotos em destaque."},
 {nome:"Oficina Verde",seg:"Casa e jardim",v:2,bg:"#fff",dk:"#12301F",ac:"#2F8F57",lt:"#CDEBD8",h1:"Plantas para",h2:"sua casa",cta:"Comprar",band:"Entrega com cuidado",d:"Landing de lançamento de uma linha de plantas, pensada para o celular."},
 {nome:"Studio Lume",seg:"Beleza",v:1,bg:"#FDF1F3",dk:"#4A1426",ac:"#B83755",lt:"#F9D4DC",h1:"Realce sua",h2:"beleza",cta:"Agendar",band:"Seu momento de pausa",d:"Página de agendamento com serviços, equipe e depoimentos."},
];

export const todos = [...projetos, ...destaques];
