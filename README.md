# 📘 MANUAL DO SITE
## Comunidade Cristã No Caminho

## Visão geral
Site estático, responsivo e acessível da Comunidade Cristã No Caminho, com páginas institucionais,
agenda, ministérios, localização, contribuição e contato.

## Estrutura atual
- `index.html` — página inicial, agenda, localização e cadastro.
- `quem-somos.html` — história, missão, identidade reformada e confissão de fé.
- `contribuicao.html` — informações de contribuição e PIX.
- `irmas.html` — Ministério Irmãs.
- `missoes.html` — Ministério Missões.
- `juventude.html` — Ministério Juventude.
- `cooperacao.html` — arquivo preservado para evitar quebra de links/URLs antigas; seu conteúdo agora é o **Culto da Família**.
- `style.css` — estilos centralizados.
- `main.js` — menu, animações, PIX e cadastro via WhatsApp.
- `sw.js` — Service Worker/PWA.
- `manifest.json` — configuração do aplicativo.
- `CNAME` — domínio personalizado.

## Programação
- Terça-feira: Estudo Bíblico — 19:30–21:15.
- Quinta-feira: Culto Público — 19:30–21:15.
- 1º domingo: Culto das Irmãs — 19:15–21:00.
- 2º domingo: Oração — 07:30–08:30; Culto de Ceia — 08:30–10:00.
- 3º domingo: Culto de Missões — 19:15–21:00.
- 4º domingo: Culto da Família — 19:15–21:00.

A programação antiga da Juventude em 4º sábado foi removida da divulgação pública porque a solicitação
de atualização não definiu um novo horário para esse ministério.

## Contato e transparência
- CNPJ: 64.757.502/0001-44.
- WhatsApp: +55 19 99853-2764.
- Instagram: @comunidadecristanocaminho.
- Endereço: Rua Rafael Paulo Teixeira de Oliveira, 224 — Campinas-SP.
- CEP: 13.091-329.

## Manutenção
O CSS é centralizado em `style.css`. O Service Worker utiliza `nocaminho-v7` e prioriza a rede,
mantendo cache como fallback para funcionamento offline.
