# 📘 MANUAL DO SITE
## Comunidade Cristã No Caminho

---

## 📋 ÍNDICE
1. [Visão Geral](#visão-geral)
2. [Estrutura do Site](#estrutura-do-site)
3. [Páginas e Funções](#páginas-e-funções)
4. [Como Usar](#como-usar)
5. [Padrões de Design](#padrões-de-design)
6. [Acessibilidade](#acessibilidade)
7. [Responsividade](#responsividade)
8. [Formulários](#formulários)
9. [Contato e Links](#contato-e-links)
10. [Manutenção Futura](#manutenção-futura)

---

## 🎯 VISÃO GERAL

O site da Comunidade Cristã No Caminho é uma plataforma moderna, responsiva e acessível que apresenta:
- **Informações** sobre a comunidade, identidade reformada e confissão de fé
- **Programação** de cultos, agenda semanal e reuniões ministérios
- **Ministérios** dedicados com páginas próprias (Irmãs, Missões, Juventude, Cooperação)
- **Localização** com Google Maps interativo
- **Formulário de cadastro** simples para contato
- **Integração WhatsApp e Instagram** para comunicação direta

**Cores Principais:**
- Azul Marinho Primário: `#0F3A5C`
- Dourado Acentuante: `#D4A574`
- Brancos e Cinzas Neutros

---

## 📁 ESTRUTURA DO SITE

```
comunidade-caminho/
├── index.html              (Página inicial)
├── quem-somos.html         (Sobre nós + Confissão de Fé)
├── irmas.html              (Ministério Irmãs)
├── missoes.html            (Ministério Missões)
├── juventude.html          (Ministério Juventude)
├── cooperacao.html         (Ministério Cooperação)
├── README.md               (Este arquivo)
├── CHANGELOG.md            (Histórico de mudanças)
└── sw.js                   (Service Worker para PWA - opcional)
```

**Total: 6 páginas HTML principais**

---

## 📄 PÁGINAS E FUNÇÕES

### 1. **index.html** - Página Inicial
**Seções:**
- Hero com CTA (Call To Action)
- 4 Cards de Ministérios (clicáveis → leva às páginas específicas)
- Agenda Semanal (Terça, Quinta, Sábado, Domingo)
- Localização com Google Maps embed
- Formulário de cadastro
- Footer com links rápidos

**Funcionalidades:**
- Menu Hamburger responsivo para mobile
- Animações suaves (fade-in, float)
- Links dinâmicos para WhatsApp e Instagram
- Formulário com validação básica

---

### 2. **quem-somos.html** - Identidade e Confissão de Fé
**Seções:**
- Hero com identidade da comunidade
- História da comunidade
- Os 5 Solas da Reforma (com cards explicativos)
- 10 Pontos da Confissão de Fé completa
- Valores da comunidade

**Conteúdo:**
- Confissão de Fé detalhada e teologicamente sólida
- Identidade reformada clara
- Referências diretas aos 5 Solas

---

### 3-6. **irmas.html / missoes.html / juventude.html / cooperacao.html**
**Padrão para cada ministério:**
- Hero com ícone e título
- "Quem Somos" descritivo
- Grid com 4 áreas de atuação
- Horário de reunião
- CTA para WhatsApp

---

## 🎮 COMO USAR

### Acessar o Site
1. **Local:** Abra `index.html` em qualquer navegador
2. **Online:** Após fazer upload para GitHub Pages, use o domínio `comunidadecristanocaminho.org.br`

### Navegar
- **Menu Fixo (topo):** Clique em qualquer link para ir para seção ou página
- **Menu Hamburger (mobile):** Toque para abrir/fechar menu
- **Botões CTA:** "Cadastre-se Agora" ou "Fale no WhatsApp" levam para ação específica
- **Links do Footer:** Acesso rápido a todas as seções

### Formulário de Cadastro
1. Preencha: Nome, WhatsApp (obrigatório), Email, Ministério de interesse
2. Clique "Enviar Cadastro"
3. Mensagem de sucesso aparece
4. Dados são enviados via WhatsApp automaticamente

---

## 🎨 PADRÕES DE DESIGN

### Tipografia
- **Títulos:** Crimson Text (serif) — elegante e formidável
- **Corpo:** Poppins (sans-serif) — legível e moderna

### Paleta de Cores
```
--primary: #0F3A5C          (Azul Marinho)
--primary-light: #1B5E8F    (Azul Marinho Claro)
--primary-dark: #062A43     (Azul Marinho Escuro)
--accent: #D4A574           (Dourado)
--accent-light: #E8BFA3     (Dourado Claro)
--white: #FFFFFF
--gray-light: #F8F9FA
--gray-dark: #2C3E50
```

### Componentes Reutilizáveis
- **Cards:** Background branco, sombra sutil, borda esquerda colorida
- **Botões:** Padding consistente, transições suaves, hover effect
- **Seções:** Padding 6rem (top/bottom), fundo alternado (branco/cinza)
- **Divisores:** Linha dourada de 60px de largura

---

## ♿ ACESSIBILIDADE

O site implementa:
- ✅ **Semântica HTML5:** `<nav>`, `<section>`, `<footer>`, `<h1-h6>`
- ✅ **ARIA Labels:** Em elementos interativos
- ✅ **Skip Links:** Pular direto para conteúdo principal
- ✅ **Contraste:** Mínimo de 4.5:1 em textos
- ✅ **Responsividade:** Funciona em qualquer tela
- ✅ **Teclado:** Todos os links/botões acessíveis por Tab
- ✅ **Alt Text:** Em imagens (aqui, emojis são decorativos)

---

## 📱 RESPONSIVIDADE

**Breakpoints:**
- **Desktop:** 1024px+ (layout de 2-4 colunas)
- **Tablet:** 768px-1023px (layout adaptado)
- **Mobile:** <768px (layout single-column, menu hamburger)

**Testado em:**
- Chrome (Desktop, Mobile)
- Firefox
- Safari
- Edge

---

## 📝 FORMULÁRIOS

### Formulário de Cadastro (index.html)
**Campos:**
1. Nome Completo* (obrigatório)
2. WhatsApp* (obrigatório, format: (XX) 9XXXX-XXXX)
3. Email (opcional)
4. Interesse em Ministério (select: Irmãs, Missões, Juventude, Cooperação, Geral)
5. Mensagem (opcional, textarea)

**Ações ao Enviar:**
- Valida campos obrigatórios
- Exibe mensagem de sucesso por 5 segundos
- Abre WhatsApp com mensagem pré-preenchida
- Reseta formulário

**Dados Enviados:**
- Nome, WhatsApp, Email, Ministério, Mensagem, Timestamp

---

## 🔗 CONTATO E LINKS

### WhatsApp
- **Link:** `https://wa.me/5519998532764`
- **Usado em:** CTA buttons, footer, cada página de ministério
- **Pré-mensagens:** Customizadas por contexto

### Instagram
- **Perfil:** `https://instagram.com/comunidadecristanocaminho`
- **Acesso em:** Footer, links sociais

### Google Maps
- **Localização:** Rua Rafael Paulo Teixeira de Oliveira, 224, Campinas-SP
- **Embed:** Mapa interativo em seção "Onde Estamos"
- **Link Direto:** Google Maps com direções

---

## 🔧 MANUTENÇÃO FUTURA

### Adicionar Conteúdo
1. **Horários/Agenda:** Edite a seção `#agenda` em `index.html`
2. **Informações de Contato:** Atualize footer e seção localização
3. **Novos Ministérios:** Copie template de um `.html` existente

### Customizações Comuns
- **Trocar Cores:** Modifique `:root { --primary: ... }` em qualquer `<style>`
- **Adicionar Imagens:** Use `<img src="">` (cuidado com links relativos/absolutos)
- **Mudar Logo/Ícone:** Atualize o emoji de cruz (✝️) por imagem PNG

### Manutenção Técnica
- **SEO:** Atualize `<meta name="description">` em cada página
- **Performance:** Comprima imagens antes de adicionar
- **Links Externos:** Sempre use `target="_blank"` e `rel="noopener"`

### Migrando para Banco de Dados (Futuro)
Estrutura preparada para:
- Conectar formulário a backend (Node.js, Python, etc)
- Armazenar cadastros em DB
- Enviar confirmação por email
- Gerenciar ministérios dinamicamente

---

## 📞 SUPORTE

**Dúvidas sobre o site?**
- Revise este manual
- Procure comentários no HTML (`<!-- comentário -->`)
- Verifique seção "Contato" em index.html

**Problemas técnicos?**
- Teste em navegador diferente
- Limpe cache (Ctrl+Shift+R)
- Verifique console (F12 → Console)

---

## ✅ CHECKLIST PRE-LAUNCH

- [ ] Todos os links funcionando (teste cada página)
- [ ] Formulário enviando corretamente
- [ ] WhatsApp link abrindo chat
- [ ] Google Maps carregando
- [ ] Instagram link acessível
- [ ] Site responsivo em mobile
- [ ] Sem erros no console (F12)
- [ ] Cores corretas em todos os navegadores
- [ ] Todas as páginas com footer
- [ ] Meta descriptions preenchidas

---

**Versão:** 1.0  
**Data:** Maio 2026  
**Desenvolvido por:** Claude  
**Para:** Comunidade Cristã No Caminho — Campinas, SP
