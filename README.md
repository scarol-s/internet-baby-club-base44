# Internet Baby Club — Atividade Base44

---
 
## Storytelling da Atividade
 
Esta atividade teve como objetivo comparar a plataforma de design orientado por IA **Base44** (https://app.base44.com) com o Google Stitch, utilizando-a para gerar e evoluir o e-commerce **Internet Baby Club** — um projeto fanmade.
 
---
 
## Etapa 1 — Design no Base44
 
### 1.1 Prints das telas geradas

## Página inicial
<img width="1366" height="768" alt="pg1 inicial" src="https://github.com/user-attachments/assets/8d1c5d03-2d4c-427e-b3e3-0c8add80bd7c" />
<img width="1366" height="768" alt="pg2 inicial" src="https://github.com/user-attachments/assets/48d2303a-9e2f-47a0-973c-0dc2e8586fec" />
<img width="1366" height="768" alt="pg3 inicial" src="https://github.com/user-attachments/assets/060cd657-c519-4274-b72b-030aceb076f6" />
<img width="1366" height="768" alt="pg4 inicial" src="https://github.com/user-attachments/assets/b51e6b4c-4d42-4dc4-b999-0a6efbea8935" />

## Lançamentos
<img width="1366" height="768" alt="lançamentos2 " src="https://github.com/user-attachments/assets/9659dba1-dbb7-4256-83bb-fc1382edad5a" />
<img width="1366" height="768" alt="lançamentos1 " src="https://github.com/user-attachments/assets/161c2973-2b08-4178-b7b7-d7bc79ee7521" />
## Produtos
<img width="1366" height="768" alt="produtos1" src="https://github.com/user-attachments/assets/7f48895f-f62c-4a13-9606-15b0669aa66f" />
## Artistas 
<img width="1366" height="768" alt="artistas1" src="https://github.com/user-attachments/assets/e6e76248-f7ca-48aa-8834-43267a002500" />
## Lista de desejos 
<img width="1366" height="768" alt="lista de desejos1" src="https://github.com/user-attachments/assets/08f6d073-06fa-4ba9-8493-9989696aa19d" />

## Sobre 

## Contato

## Busca

## Perfil

## Sacola





As páginas geradas foram:
- `index.html` — Página inicial
- `pages/produtos.html` — Produtos
- `pages/lancamentos.html` — Lançamentos
- `pages/artistas.html` — Artistas
- `pages/sobre.html` — Sobre
- `pages/contato.html` — Contato
- `pages/lista-de-desejos.html` — Lista de Desejos
- `pages/sacola.html` — Sacola/Carrinho
- `pages/pagamentos.html` — Pagamento
- `pages/perfil.html` — Perfil do usuário
- `pages/produto-detalhe.html` — Detalhe do produto
- `pages/acompanhar-pedido.html` — Acompanhar Pedido
---
 
### 1.2 Prompt utilizado no Base44
 
```
Contexto
Um e-commerce de fan made chamado Internet Baby Club (IBC).
Páginas existentes: index, produtos, lançamentos, artistas,
lista de desejos, sobre, contato.
 
## IDENTIDADE VISUAL
Paleta de cores:
- #70B8E0 — azul
- #794199 — roxo
- #95CEA5 — verde
- #FCFCED — creme (background principal)
- #1A1A1A — preto (textos, bordas)
- Branco puro para superfícies de cards
 
Tipografia: Família Matangi (Google Fonts)
 
Estilo: Neo-brutalist suavizado + Y2K + fandom culture.
Bordas sólidas (1.5–2px) com box-shadow deslocado.
Cantos arredondados em todos os cards (border-radius: 16px mínimo).
 
## REQUISITOS TÉCNICOS
- Ponto de entrada: index.html
- HTML5 + CSS3 + JavaScript vanilla
- Responsivo: Mobile-first, 375px até 1440px
- PWA: manifest.json e service worker básico
- Acessibilidade: navegação por teclado, ARIA labels,
  contraste WCAG AA, modo daltônico, textos alternativos
- Modo escuro: toggle funcional com preferência em localStorage
- Sem dependência de backend pago (localStorage para persistência)
 
## NAVEGAÇÃO GLOBAL
Navbar com:
- Ticker rotativo no topo (some ao rolar, reaparece ao voltar)
- Logo centralizada
- Ícones: busca, cadastro/login, lista de desejos, carrinho
- Hambúrguer para mobile
Painéis laterais (sidebar) para busca, wishlist e carrinho
Modal de Cadastro/Login com abas e campos completos
 
## NOVAS PÁGINAS
- produto-detalhe.html: galeria, descrição, variações, relacionados
- perfil.html: avatar, abas (dados, pedidos, wishlist, config)
- sacola.html: itens, quantidades, total, finalizar
- pagamento.html: resumo, endereço, cartão/PIX/boleto
- acompanhar-pedido.html: timeline de status do pedido
 
## ACESSIBILIDADE
Botão fixo com painel:
- Modo escuro/claro
- Alto contraste
- Simulação de daltonismo (Protanopia/Deuteranopia/Tritanopia)
- Tamanho de fonte (A- / A / A+)
```
 
---

## Etapa 2 — Conversão e Correção

O Base44 gerou inicialmente o projeto em React + Vite, no entanto solicitei ao Base44 a conversão para HTML/CSS/JS puro com o mesmo design.

**Prompt enviado ao Base44:**
```
Refaça o projeto separando em múltiplos arquivos HTML. Cada página do menu deve ser um arquivo separado:
- index.html → página inicial
- pages/produtos.html → produtos
- pages/lancamentos.html → lançamentos
- pages/artistas.html → artistas
- pages/sobre.html → sobre
- pages/contato.html → contato
- pages/lista-de-desejos.html → lista de desejos
- pages/acompanhar-pedido.html → acompanhar pedido
- pages/pagamento.html → pagamento
- pages/perfil.html → perfil
- pages/produto-detalhe.html → produto detalhe
- pages/sacola.html → sacola
O CSS deve ficar em assets/css/style.css
O JavaScript deve ficar em assets/js/main.js
Mantenha o design exatamente igual ao que está agora.
Todos os links de navegação devem apontar para os arquivos corretos, não usar âncoras (#).

```
**Correções aplicadas:**
- React convertido para HTML/CSS/JS puro
- Dependências do Base44 removidas
- Todos os links de navegação corrigidos
- Estrutura de pastas organizada
---

- Arquivos submetidos ao Claude.ai para análise — **nenhum erro encontrado.**

## Etapa 3 — Estrutura de Pastas Final
 
```
internet-baby-club/
├── index.html                      ← ponto de entrada
├── manifest.json
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
└── pages/
    ├── produtos.html
    ├── lancamentos.html
    ├── artistas.html
    ├── sobre.html
    ├── contato.html
    ├── lista-de-desejos.html
    ├── sacola.html
    ├── pagamentos.html
    ├── perfil.html
    ├── produto-detalhe.html
    └── acompanhar-pedido.html
```
 
---
 
## Etapa 4 — Repositório no GitHub
 
**Link do repositório:** [https://github.com/scarol-s/internet-baby-club](https://github.com/scarol-s/internet-baby-club-base44)
 
---
 
## Etapa 5 — Deploy na Vercel
 
**Link do deploy:** https://internet-baby-club-ibc.vercel.app/
 
---
 
## Comparativo: Stitch vs Base44
 
| | Google Stitch | Base44 |
|---|---|---|
| Output inicial | HTML/CSS básico | React + Vite |
| Qualidade do design | Simples | Mais completo e interativo |
| Exportação gratuita | ✅ ZIP direto | ❌ Pago |
| Funcionalidades | Estático | Carrinho, wishlist, perfil |
| Esforço de conversão | Médio | Alto (React → HTML) |
 
---
 
## Tecnologias utilizadas
 
| Ferramenta | Uso |
|---|---|
| Base44 | Geração do design e funcionalidades via IA |
| Claude.ai | Análise e verificação dos códigos gerados |
| HTML + CSS + JS | Desenvolvimento frontend |
| GitHub | Versionamento e repositório |
| Vercel | Deploy e hospedagem |
 
---
