# Caroli Motors: Landing page

Site estático em HTML5, CSS3 e JavaScript puro, para uma loja de motos. Sem backend, sem frameworks, sem build.

## Estrutura

```
caroli-motors/
├── index.html
├── README.md
├── css/style.css
├── js/
│   ├── config.js      ← número do WhatsApp, endereço, horário, Instagram, logo, avaliações
│   ├── vehicles.js    ← estoque de motos
│   ├── clients.js     ← lista das fotos dos clientes (carrossel)
│   └── script.js      ← lógica do site
└── assets/images/
    ├── logo.png                        (logo da Caroli Motors, fundo transparente)
    ├── clientes/                       (fotos dos clientes)
    ├── veiculos/                       (fotos das motos do estoque)
    └── hero.svg, about.svg, vehicle-placeholder.svg, favicon.svg   (imagens reservadas)
```

## Abrir localmente

Dê dois cliques em `index.html`. Para simular um servidor: `python3 -m http.server 8000` dentro da pasta e acesse http://localhost:8000.

## Carrossel de clientes

As fotos dos clientes giram sozinhas na seção "Quem já levou a moto pra casa" (a cada 3,5 s). O visitante pode usar as setas, arrastar com o dedo, e o carrossel pausa quando o mouse, o teclado ou o dedo estão nele. Há um botão de pausa/play. Quem usa "reduzir movimento" no sistema vê o carrossel pausado.

**Para adicionar mais clientes:**
1. Salve a foto em `assets/images/clientes/` (formato retrato, cerca de 800 px de largura, `.webp` ou `.jpg`).
2. Acrescente o nome do arquivo na lista de `js/clients.js`.

Para remover, apague a linha da lista. Se um arquivo listado não existir, ele é ignorado. Use apenas fotos de clientes que autorizaram a divulgação.

## Trocar o número do WhatsApp

Abra `js/config.js` e edite `WHATSAPP_NUMBER`. Formato internacional, só dígitos: `55` + DDD + número (ex.: `5511987654321`).
**O valor atual (`5511999999999`) é fictício.** Todos os botões do site usam esse único número.

## Endereço, telefone, horário, Maps e Instagram

Também em `js/config.js` (`ADDRESS`, `PHONE`, `HOURS`, `MAPS_URL`, `INSTAGRAM_URL`). Preencha só dados confirmados; enquanto estiverem vazios, o site mostra "A confirmar com a loja". O botão do Google Maps só aparece quando há endereço ou link.

## Cadastrar, editar e remover motos

Tudo em `js/vehicles.js`, no array `VEHICLES`:

- **Cadastrar:** copie um objeto, cole antes do `];`, troque os campos (sem `demo: true`) e mantenha a vírgula entre objetos.
- **Editar:** altere os valores do objeto.
- **Remover:** apague o objeto inteiro.

Os 6 itens atuais são **exemplos de demonstração** (`demo: true`) e exibem o aviso "Dados de demonstração". Apague todos antes de publicar; o aviso some sozinho. Os filtros (marca, ano, categoria, câmbio) se atualizam conforme o estoque. As faixas de preço ficam em `index.html` (select `fPrice`).

## Imagens e logo

- **Fotos das motos:** coloque os arquivos em `assets/images/veiculos/` (prefira WebP, ~1200 px de largura, abaixo de 200 KB) e preencha `image: "assets/images/veiculos/arquivo.webp"`.
- **Hero e Sobre:** substitua `hero.svg` e `about.svg` por fotos reais (se mudar a extensão, ajuste o `src` no `index.html`).
- **Logo:** o arquivo está em `assets/images/logo.png` e é usado no cabeçalho (via `LOGO_PATH` em `config.js`) e no rodapé. Para trocar, substitua o arquivo mantendo o nome.
- **Cores:** o vermelho vem da logo e é definido no início de `css/style.css` (`--accent` e `--accent-btn`).

## Avaliações

Adicione depoimentos reais e autorizados em `REVIEWS` (`config.js`). Com a lista vazia, aparece um convite para o Instagram.

## Publicar gratuitamente

**Netlify:** acesse app.netlify.com/drop e arraste a pasta `caroli-motors`.
**GitHub Pages:** crie um repositório, envie os arquivos na raiz, vá em *Settings → Pages*, escolha a branch `main` e a pasta `/ (root)`.

Depois de publicar com domínio definitivo, adicione `og:url`, `og:image`, URL canônica, `sitemap.xml` e `robots.txt`.

## Checklist de testes

**Desktop**
- [ ] Menu leva a todas as seções; cabeçalho fica fixo; logo aparece no cabeçalho e no rodapé
- [ ] Carrossel de clientes gira sozinho, pausa com o mouse, setas e botão pausar funcionam
- [ ] Busca e filtros (marca, preço, ano, categoria, câmbio) funcionam e combinam entre si
- [ ] Ordenação por preço e ano; "Limpar filtros" restaura tudo
- [ ] Filtro sem resultado mostra o estado vazio
- [ ] "Tenho interesse" / "Mais informações" abrem o WhatsApp com a moto certa na mensagem
- [ ] Formulário: campos obrigatórios mostram erro; envio abre o WhatsApp com os dados
- [ ] FAQ abre e fecha (também por teclado: Tab, Enter)
- [ ] Console do navegador sem erros
- [ ] Ano do rodapé correto

**Celular**
- [ ] Sem rolagem horizontal em 360 px, 390 px e 768 px
- [ ] Menu hambúrguer abre/fecha e fecha ao tocar num link
- [ ] Carrossel: arrastar com o dedo funciona e a rotação retoma depois de alguns segundos
- [ ] Botões fáceis de tocar; campos não dão zoom ao focar (iPhone)
- [ ] Botão flutuante do WhatsApp visível e sem cobrir conteúdo importante
- [ ] Retrato e paisagem
- [ ] Mensagens pré-preenchidas aparecem no app do WhatsApp (precisa tocar em enviar)

## Privacidade

O site não tem servidor e não guarda dados. O formulário apenas monta um link `wa.me`; o visitante decide se envia a mensagem.
