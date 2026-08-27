# 📋 CHANGELOG
## Comunidade Cristã No Caminho — Atualização de Agenda e Ministérios

**Data:** Agosto de 2026
**Versão:** 2.0
**Status:** Atualização preparada para publicação

## Principais alterações

### 1. Cooperação → Culto da Família
- `cooperacao.html` deixou de apresentar o Ministério Cooperação.
- A página foi reestruturada como **Culto da Família**, com novo hero, conteúdo, cards, convite e programação.
- Horário: **4º domingo de cada mês, das 19:15 às 21:00**.
- O arquivo foi mantido com o nome `cooperacao.html` para preservar links existentes e evitar quebra de URLs.

### 2. Nova programação dos domingos
- **1º domingo:** Culto das Irmãs — 19:15 às 21:00.
- **2º domingo:** Oração — 07:30 às 08:30; Culto de Ceia — 08:30 às 10:00.
- **3º domingo:** Culto de Missões — 19:15 às 21:00.
- **4º domingo:** Culto da Família — 19:15 às 21:00.

### 3. Página inicial
- Cards de ministérios atualizados.
- Agenda refeita para exibir os quatro domingos.
- Sábado Especial removido da agenda principal.
- Horários da localização atualizados.
- Formulário recebeu "Culto da Família" como opção.

### 4. Páginas de ministérios
- Ministério Irmãs: 1º sábado → 1º domingo, 19:15–21:00.
- Ministério Missões: 3º sábado → 3º domingo, 19:15–21:00.
- Ministério Juventude: horário antigo de 4º sábado removido; programação marcada como em atualização, pois a conversa não definiu novo horário.

### 5. JavaScript
- Corrigido o bug do menu mobile (`remove` → `open`).
- Cadastro agora prepara uma mensagem estruturada e abre o WhatsApp oficial.
- Cópia do PIX usa a chave presente no HTML.
- Fallback da animação de revelação incluído.

### 6. Service Worker
- Cache atualizado para `nocaminho-v7`.
- HTML e ativos priorizam a rede, com cache como fallback.
- Corrigida a leitura potencialmente nula do header `Accept`.
- Cache antigo é removido ao ativar nova versão.

### 7. Padronização
- Menus e rodapés atualizados para Culto da Família.
- Estilos inline repetitivos foram centralizados no `style.css`.
- Navegação mobile recebeu `aria-expanded` e `aria-controls`.

A atualização foi baseada na conversa fornecida no PDF e nos arquivos atuais enviados no chat.
