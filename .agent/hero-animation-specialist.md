# Hero Animation Specialist

> Como a IDE cria, corrige e aperfeiçoa seções HERO com animações suaves e coerentes.

## Visão Geral

O **Hero Animation Specialist** é um agente especializado em seções HERO de websites - aquelas seções principais no topo da página que causam a primeira impressão. Ele detecta bugs, centraliza elementos, suaviza animações, e garante uma experiência visual coerente e profissional.

---

## Pipeline de Trabalho

```
┌─────────────────────────────────────────────────────────────┐
│           HERO ANIMATION SPECIALIST (Orquestrador)           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                FASE 0: HERO DISCOVERY & AUDIT                │
│                                                              │
│  🔍 Identificação Automática de HEROs:                      │
│                                                              │
│  Busca por padrões comuns:                                  │
│  • Seções com class/id: hero, banner, jumbotron            │
│  • Primeira seção do <main> ou <body>                       │
│  • Elementos com height: 100vh ou min-height: 100vh        │
│  • Seções com background-image ou video                     │
│  • Elementos com position: relative/absolute                │
│                                                              │
│  📊 Análise de Componentes:                                 │
│  • Título principal (h1, h2)                                │
│  • Subtítulo ou descrição                                   │
│  • CTAs (Call-to-Actions / Botões)                          │
│  • Imagens ou vídeos de fundo                               │
│  • Overlays e efeitos                                       │
│  • Animações ativas                                         │
│  • Elementos decorativos                                    │
│                                                              │
│  🐛 Detecção Automática de Problemas:                       │
│  ├─ Centralização incorreta                                 │
│  ├─ Animações quebradas ou travando                         │
│  ├─ Performance issues (lag, jank)                          │
│  ├─ Responsividade quebrada                                 │
│  ├─ Texto ilegível (contraste)                              │
│  ├─ Elementos sobrepostos incorretamente                    │
│  ├─ Z-index conflicts                                       │
│  ├─ Scroll behavior inadequado                              │
│  └─ Inconsistências de timing                               │
│                                                              │
│  Output: hero-audit-report.md                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              FASE 1: PROBLEM CLASSIFICATION                  │
│                                                              │
│  🎯 CATEGORIAS DE PROBLEMAS:                                │
│                                                              │
│  1️⃣ **LAYOUT ISSUES**                                      │
│     • Elementos desalinhados                                │
│     • Centralização incorreta (vertical/horizontal)         │
│     • Overflow indesejado                                   │
│     • Espaçamento inconsistente                             │
│     • Elementos cortados                                    │
│                                                              │
│  2️⃣ **ANIMATION ISSUES**                                   │
│     • Animações travando (janky)                            │
│     • Timing inconsistente                                  │
│     • Animações muito rápidas/lentas                        │
│     • Falta de easing natural                               │
│     • Animações conflitantes                                │
│     • Performance ruim (< 60fps)                            │
│                                                              │
│  3️⃣ **VISUAL ISSUES**                                      │
│     • Contraste insuficiente                                │
│     • Cores inconsistentes                                  │
│     • Tipografia problemática                               │
│     • Imagens distorcidas                                   │
│     • Background não carregando                             │
│                                                              │
│  4️⃣ **RESPONSIVENESS ISSUES**                              │
│     • Quebra em mobile                                      │
│     • Elementos desproporcionais                            │
│     • Touch targets muito pequenos                          │
│     • Texto cortado em viewports pequenas                   │
│                                                              │
│  5️⃣ **INTERACTION ISSUES**                                 │
│     • Botões não clicáveis                                  │
│     • Scroll behavior quebrado                              │
│     • Parallax não funcionando                              │
│     • Hover effects ausentes/quebrados                      │
│                                                              │
│  6️⃣ **PERFORMANCE ISSUES**                                 │
│     • Large Contentful Paint (LCP) ruim                     │
│     • Layout shifts (CLS)                                   │
│     • First Input Delay (FID) alto                          │
│     • Animações causando reflow                             │
│                                                              │
│  Output: problem-classification.md                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│         FASE 2: DEEP ANALYSIS (Código + Comportamento)       │
│                                                              │
│  📋 Análise de HTML:                                        │
│  ```html                                                     │
│  <section class="hero">                                     │
│    <div class="hero-content">                               │
│      <h1>Título</h1>          ← Analisar hierarquia       │
│      <p>Descrição</p>         ← Verificar semântica        │
│      <button>CTA</button>     ← Verificar acessibilidade   │
│    </div>                                                    │
│    <div class="hero-bg"></div> ← Verificar estrutura       │
│  </section>                                                  │
│  ```                                                         │
│                                                              │
│  🎨 Análise de CSS:                                         │
│  • Display/Position properties                              │
│  • Flexbox/Grid alignment                                   │
│  • Transform/translate values                               │
│  • Z-index stacking                                         │
│  • Animation/transition definitions                         │
│  • Media queries                                            │
│  • Viewport units usage                                     │
│                                                              │
│  ⚡ Análise de JavaScript:                                  │
│  • Animation libraries usadas                               │
│  • Event listeners ativos                                   │
│  • Scroll listeners                                         │
│  • IntersectionObserver usage                               │
│  • RequestAnimationFrame                                    │
│  • Performance optimizations                                │
│                                                              │
│  📊 Análise de Performance:                                 │
│  • FPS during animations                                    │
│  • Paint/Layout triggers                                    │
│  • Forced reflows                                           │
│  • GPU acceleration usage                                   │
│  • Animation frame drops                                    │
│                                                              │
│  Output: deep-analysis-report.md                            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│           FASE 3: CENTERING & ALIGNMENT FIX                  │
│                                                              │
│  🎯 CENTRALIZAÇÃO PERFEITA:                                 │
│                                                              │
│  **Método 1: Flexbox (RECOMENDADO)**                        │
│  ```css                                                      │
│  .hero {                                                     │
│    display: flex;                                           │
│    flex-direction: column;                                  │
│    justify-content: center;  /* Vertical center */          │
│    align-items: center;      /* Horizontal center */        │
│    min-height: 100vh;                                       │
│    text-align: center;       /* Text alignment */           │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  **Método 2: Grid**                                         │
│  ```css                                                      │
│  .hero {                                                     │
│    display: grid;                                           │
│    place-items: center;      /* Center both axes */         │
│    min-height: 100vh;                                       │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  **Método 3: Position Absolute (legacy)**                   │
│  ```css                                                      │
│  .hero-content {                                            │
│    position: absolute;                                      │
│    top: 50%;                                                │
│    left: 50%;                                               │
│    transform: translate(-50%, -50%);                        │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  🔧 CORREÇÕES AUTOMÁTICAS:                                  │
│  • Remover margins/paddings conflitantes                    │
│  • Ajustar box-sizing para border-box                       │
│  • Corrigir width/max-width do container                    │
│  • Adicionar vertical-align se necessário                   │
│  • Normalizar line-height                                   │
│                                                              │
│  Output: Código corrigido + centering-fix-report.md         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│          FASE 4: ANIMATION SMOOTHING & OPTIMIZATION          │
│                                                              │
│  🎬 PRINCÍPIOS DE ANIMAÇÃO SUAVE:                           │
│                                                              │
│  1. **Use CSS Animations + GPU Acceleration**               │
│     ```css                                                   │
│     .hero-title {                                           │
│       animation: fadeInUp 1s ease-out forwards;            │
│       will-change: transform, opacity;  /* GPU hint */      │
│     }                                                        │
│                                                              │
│     @keyframes fadeInUp {                                   │
│       from {                                                │
│         opacity: 0;                                         │
│         transform: translateY(30px);                        │
│       }                                                      │
│       to {                                                  │
│         opacity: 1;                                         │
│         transform: translateY(0);                           │
│       }                                                      │
│     }                                                        │
│     ```                                                      │
│                                                              │
│  2. **Easing Functions Naturais**                           │
│     ❌ Evitar: linear, ease (genérico)                      │
│     ✅ Usar: ease-out (entrada), ease-in-out (geral)       │
│     ✅ Custom cubic-bezier para suavidade profissional:    │
│     ```css                                                   │
│     /* Smooth entrance */                                   │
│     cubic-bezier(0.16, 1, 0.3, 1)                           │
│                                                              │
│     /* Bouncy effect */                                     │
│     cubic-bezier(0.68, -0.55, 0.265, 1.55)                  │
│                                                              │
│     /* Material Design standard */                          │
│     cubic-bezier(0.4, 0, 0.2, 1)                            │
│     ```                                                      │
│                                                              │
│  3. **Timing Coerente (Sistema de Duração)**                │
│     ```css                                                   │
│     /* Design System de Timing */                           │
│     --duration-fast: 200ms;      /* Micro-interactions */   │
│     --duration-normal: 400ms;    /* Standard transitions */ │
│     --duration-slow: 800ms;      /* Hero animations */      │
│     --duration-very-slow: 1200ms; /* Complex sequences */   │
│                                                              │
│     /* Delays escalonados */                                │
│     .hero-title {                                           │
│       animation-delay: 0ms;                                 │
│     }                                                        │
│     .hero-subtitle {                                        │
│       animation-delay: 200ms;  /* +200ms do anterior */     │
│     }                                                        │
│     .hero-cta {                                             │
│       animation-delay: 400ms;  /* +200ms do anterior */     │
│     }                                                        │
│     ```                                                      │
│                                                              │
│  4. **Otimização de Performance**                           │
│     ```css                                                   │
│     /* ✅ Boas propriedades para animar (GPU) */            │
│     transform: translateX(), translateY(), scale(), rotate()│
│     opacity: 0 to 1                                         │
│                                                              │
│     /* ❌ Propriedades ruins (causam reflow) */             │
│     width, height, top, left, margin, padding               │
│     ```                                                      │
│                                                              │
│  5. **Stagger Animations (Sequência)**                      │
│     ```css                                                   │
│     .hero-element {                                         │
│       opacity: 0;                                           │
│       animation: fadeIn 0.6s ease-out forwards;            │
│     }                                                        │
│                                                              │
│     .hero-element:nth-child(1) { animation-delay: 0s; }     │
│     .hero-element:nth-child(2) { animation-delay: 0.1s; }   │
│     .hero-element:nth-child(3) { animation-delay: 0.2s; }   │
│     .hero-element:nth-child(4) { animation-delay: 0.3s; }   │
│     ```                                                      │
│                                                              │
│  6. **Reduzir Motion para Acessibilidade**                  │
│     ```css                                                   │
│     @media (prefers-reduced-motion: reduce) {               │
│       * {                                                    │
│         animation-duration: 0.01ms !important;              │
│         animation-iteration-count: 1 !important;            │
│         transition-duration: 0.01ms !important;             │
│       }                                                      │
│     }                                                        │
│     ```                                                      │
│                                                              │
│  🔧 CORREÇÕES AUTOMÁTICAS DE ANIMAÇÃO:                      │
│  • Substituir propriedades que causam reflow                │
│  • Adicionar will-change apropriadamente                    │
│  • Implementar easing natural                               │
│  • Sincronizar delays entre elementos                       │
│  • Adicionar fallbacks para reduced-motion                  │
│  • Remover animações conflitantes                           │
│                                                              │
│  Output: Código otimizado + animation-optimization.md       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│            FASE 5: VISUAL COHERENCE & CONSISTENCY            │
│                                                              │
│  🎨 DESIGN SYSTEM PARA HERO:                                │
│                                                              │
│  1. **Tipografia Coerente**                                 │
│     ```css                                                   │
│     .hero {                                                  │
│       /* Scale tipográfica harmoniosa */                    │
│       --hero-title-size: clamp(2rem, 5vw, 4rem);           │
│       --hero-subtitle-size: clamp(1rem, 2.5vw, 1.5rem);    │
│       --hero-text-size: clamp(0.875rem, 1.5vw, 1.125rem);  │
│                                                              │
│       /* Line heights proporcionais */                      │
│       --hero-title-line: 1.1;                               │
│       --hero-subtitle-line: 1.4;                            │
│       --hero-text-line: 1.6;                                │
│                                                              │
│       /* Pesos consistentes */                              │
│       --hero-title-weight: 700;                             │
│       --hero-subtitle-weight: 500;                          │
│       --hero-text-weight: 400;                              │
│     }                                                        │
│     ```                                                      │
│                                                              │
│  2. **Espaçamento Rítmico**                                 │
│     ```css                                                   │
│     /* Sistema de espaçamento 8px base */                   │
│     --space-xs: 0.5rem;   /* 8px */                         │
│     --space-sm: 1rem;     /* 16px */                        │
│     --space-md: 1.5rem;   /* 24px */                        │
│     --space-lg: 2rem;     /* 32px */                        │
│     --space-xl: 3rem;     /* 48px */                        │
│     --space-2xl: 4rem;    /* 64px */                        │
│                                                              │
│     .hero-title {                                           │
│       margin-bottom: var(--space-md);                       │
│     }                                                        │
│     .hero-subtitle {                                        │
│       margin-bottom: var(--space-lg);                       │
│     }                                                        │
│     .hero-cta {                                             │
│       margin-top: var(--space-xl);                          │
│     }                                                        │
│     ```                                                      │
│                                                              │
│  3. **Paleta de Cores Consistente**                         │
│     ```css                                                   │
│     .hero {                                                  │
│       /* Cores primárias */                                 │
│       --hero-primary: #2563eb;                              │
│       --hero-primary-dark: #1e40af;                         │
│       --hero-primary-light: #60a5fa;                        │
│                                                              │
│       /* Cores de texto */                                  │
│       --hero-text-primary: #0f172a;                         │
│       --hero-text-secondary: #475569;                       │
│       --hero-text-muted: #94a3b8;                           │
│                                                              │
│       /* Backgrounds */                                     │
│       --hero-bg: #ffffff;                                   │
│       --hero-bg-overlay: rgba(0, 0, 0, 0.4);               │
│     }                                                        │
│     ```                                                      │
│                                                              │
│  4. **Contraste Acessível (WCAG AA)**                       │
│     ```css                                                   │
│     /* Garantir contraste mínimo de 4.5:1 */                │
│     .hero-on-dark {                                         │
│       color: #ffffff;  /* Contraste 21:1 com #000 */        │
│     }                                                        │
│                                                              │
│     .hero-on-light {                                        │
│       color: #1e293b;  /* Contraste 13.6:1 com #fff */      │
│     }                                                        │
│                                                              │
│     /* Overlay para melhorar contraste em imagens */        │
│     .hero-overlay {                                         │
│       background: linear-gradient(                          │
│         to bottom,                                          │
│         rgba(0, 0, 0, 0.3),                                 │
│         rgba(0, 0, 0, 0.6)                                  │
│       );                                                     │
│     }                                                        │
│     ```                                                      │
│                                                              │
│  5. **Proporções Harmônicas**                               │
│     ```css                                                   │
│     .hero {                                                  │
│       /* Golden ratio para heights */                       │
│       min-height: 100vh;                                    │
│     }                                                        │
│                                                              │
│     .hero-content {                                         │
│       /* Largura confortável para leitura */                │
│       max-width: min(90%, 1200px);                          │
│       margin-inline: auto;                                  │
│     }                                                        │
│                                                              │
│     /* Proporção de imagens */                              │
│     .hero-image {                                           │
│       aspect-ratio: 16 / 9;                                 │
│       object-fit: cover;                                    │
│     }                                                        │
│     ```                                                      │
│                                                              │
│  🔧 CORREÇÕES DE COERÊNCIA:                                 │
│  • Padronizar tamanhos de fonte                             │
│  • Uniformizar espaçamentos                                 │
│  • Corrigir contraste de cores                              │
│  • Alinhar hierarquia visual                                │
│  • Normalizar border-radius                                 │
│  • Consistir sombras (box-shadow)                           │
│                                                              │
│  Output: Código harmonizado + visual-coherence.md           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│            FASE 6: RESPONSIVE HERO PERFECTION                │
│                                                              │
│  📱 BREAKPOINTS ESTRATÉGICOS:                               │
│                                                              │
│  ```css                                                      │
│  /* Mobile First Approach */                                │
│                                                              │
│  /* Base (Mobile) - 320px to 767px */                       │
│  .hero {                                                     │
│    min-height: 100svh;  /* Safe area viewport height */     │
│    padding: var(--space-lg);                                │
│  }                                                           │
│                                                              │
│  .hero-title {                                              │
│    font-size: 2rem;     /* 32px */                          │
│    line-height: 1.2;                                        │
│  }                                                           │
│                                                              │
│  /* Tablet - 768px to 1023px */                             │
│  @media (min-width: 768px) {                                │
│    .hero {                                                   │
│      min-height: 100vh;                                     │
│      padding: var(--space-xl);                              │
│    }                                                         │
│                                                              │
│    .hero-title {                                            │
│      font-size: 3rem;   /* 48px */                          │
│    }                                                         │
│  }                                                           │
│                                                              │
│  /* Desktop - 1024px+ */                                    │
│  @media (min-width: 1024px) {                               │
│    .hero {                                                   │
│      min-height: 100vh;                                     │
│      padding: var(--space-2xl);                             │
│    }                                                         │
│                                                              │
│    .hero-title {                                            │
│      font-size: 4rem;   /* 64px */                          │
│    }                                                         │
│  }                                                           │
│                                                              │
│  /* Large Desktop - 1440px+ */                              │
│  @media (min-width: 1440px) {                               │
│    .hero-title {                                            │
│      font-size: 5rem;   /* 80px */                          │
│    }                                                         │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  🔧 TÉCNICAS RESPONSIVAS:                                   │
│                                                              │
│  **1. Fluid Typography**                                    │
│  ```css                                                      │
│  .hero-title {                                              │
│    font-size: clamp(2rem, 4vw + 1rem, 5rem);               │
│    /*         min    preferred    max */                    │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  **2. Responsive Spacing**                                  │
│  ```css                                                      │
│  .hero {                                                     │
│    padding-block: clamp(2rem, 10vh, 6rem);                 │
│    padding-inline: clamp(1rem, 5vw, 3rem);                 │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  **3. Adaptive Layout**                                     │
│  ```css                                                      │
│  .hero-content {                                            │
│    display: grid;                                           │
│    grid-template-columns: 1fr;                              │
│    gap: var(--space-lg);                                    │
│  }                                                           │
│                                                              │
│  @media (min-width: 768px) {                                │
│    .hero-content {                                          │
│      grid-template-columns: 1fr 1fr;                        │
│      align-items: center;                                   │
│    }                                                         │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  **4. Touch-Friendly Targets**                              │
│  ```css                                                      │
│  .hero-cta {                                                │
│    min-height: 44px;   /* iOS guideline */                  │
│    min-width: 44px;                                         │
│    padding: 1rem 2rem;                                      │
│    font-size: 1rem;                                         │
│  }                                                           │
│                                                              │
│  @media (min-width: 768px) {                                │
│    .hero-cta {                                              │
│      padding: 1.25rem 2.5rem;                               │
│      font-size: 1.125rem;                                   │
│    }                                                         │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  Output: Código responsivo + responsive-fixes.md            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              FASE 7: ADVANCED HERO PATTERNS                  │
│                                                              │
│  🎨 PADRÕES MODERNOS DE HERO:                               │
│                                                              │
│  **Pattern 1: Fade In on Load**                             │
│  ```css                                                      │
│  .hero {                                                     │
│    opacity: 0;                                              │
│    animation: heroFadeIn 1.2s ease-out 0.3s forwards;      │
│  }                                                           │
│                                                              │
│  @keyframes heroFadeIn {                                    │
│    to {                                                      │
│      opacity: 1;                                            │
│    }                                                         │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  **Pattern 2: Staggered Text Reveal**                       │
│  ```css                                                      │
│  .hero-title,                                               │
│  .hero-subtitle,                                            │
│  .hero-cta {                                                │
│    opacity: 0;                                              │
│    transform: translateY(30px);                             │
│    animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)   │
│               forwards;                                     │
│  }                                                           │
│                                                              │
│  .hero-title { animation-delay: 0.2s; }                     │
│  .hero-subtitle { animation-delay: 0.4s; }                  │
│  .hero-cta { animation-delay: 0.6s; }                       │
│                                                              │
│  @keyframes slideUp {                                       │
│    to {                                                      │
│      opacity: 1;                                            │
│      transform: translateY(0);                              │
│    }                                                         │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  **Pattern 3: Parallax Background**                         │
│  ```css                                                      │
│  .hero {                                                     │
│    position: relative;                                      │
│    overflow: hidden;                                        │
│  }                                                           │
│                                                              │
│  .hero-bg {                                                 │
│    position: absolute;                                      │
│    inset: 0;                                                │
│    background-image: url('hero-bg.jpg');                    │
│    background-size: cover;                                  │
│    background-position: center;                             │
│    transform: translateZ(0);  /* GPU acceleration */        │
│    will-change: transform;                                  │
│  }                                                           │
│  ```                                                         │
│  ```javascript                                               │
│  // JavaScript para parallax suave                          │
│  const heroBg = document.querySelector('.hero-bg');         │
│  let ticking = false;                                       │
│                                                              │
│  window.addEventListener('scroll', () => {                  │
│    if (!ticking) {                                          │
│      requestAnimationFrame(() => {                          │
│        const scrolled = window.scrollY;                     │
│        heroBg.style.transform =                             │
│          `translateY(${scrolled * 0.5}px) translateZ(0)`;   │
│        ticking = false;                                     │
│      });                                                     │
│      ticking = true;                                        │
│    }                                                         │
│  });                                                         │
│  ```                                                         │
│                                                              │
│  **Pattern 4: Gradient Overlay**                            │
│  ```css                                                      │
│  .hero::before {                                            │
│    content: '';                                             │
│    position: absolute;                                      │
│    inset: 0;                                                │
│    background: linear-gradient(                             │
│      135deg,                                                │
│      rgba(99, 102, 241, 0.8) 0%,                            │
│      rgba(168, 85, 247, 0.6) 100%                           │
│    );                                                        │
│    z-index: 1;                                              │
│  }                                                           │
│                                                              │
│  .hero-content {                                            │
│    position: relative;                                      │
│    z-index: 2;                                              │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  **Pattern 5: Scroll Indicator**                            │
│  ```html                                                     │
│  <div class="hero">                                         │
│    <!-- content -->                                         │
│    <div class="scroll-indicator">                           │
│      <span>Scroll</span>                                    │
│      <svg><!-- arrow icon --></svg>                         │
│    </div>                                                    │
│  </div>                                                      │
│  ```                                                         │
│  ```css                                                      │
│  .scroll-indicator {                                        │
│    position: absolute;                                      │
│    bottom: 2rem;                                            │
│    left: 50%;                                               │
│    transform: translateX(-50%);                             │
│    animation: bounce 2s ease-in-out infinite;              │
│  }                                                           │
│                                                              │
│  @keyframes bounce {                                        │
│    0%, 100% { transform: translateX(-50%) translateY(0); }  │
│    50% { transform: translateX(-50%) translateY(-10px); }   │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  **Pattern 6: Video Background**                            │
│  ```html                                                     │
│  <div class="hero">                                         │
│    <video class="hero-video" autoplay muted loop playsinline>│
│      <source src="hero-video.mp4" type="video/mp4">        │
│    </video>                                                  │
│    <div class="hero-content">                               │
│      <!-- content -->                                       │
│    </div>                                                    │
│  </div>                                                      │
│  ```                                                         │
│  ```css                                                      │
│  .hero-video {                                              │
│    position: absolute;                                      │
│    inset: 0;                                                │
│    width: 100%;                                             │
│    height: 100%;                                            │
│    object-fit: cover;                                       │
│    z-index: 0;                                              │
│  }                                                           │
│                                                              │
│  .hero-content {                                            │
│    position: relative;                                      │
│    z-index: 1;                                              │
│  }                                                           │
│  ```                                                         │
│                                                              │
│  Output: Padrões implementados + pattern-library.md         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│         FASE 8: PERFORMANCE OPTIMIZATION                     │
│                                                              │
│  ⚡ OTIMIZAÇÕES CRÍTICAS:                                   │
│                                                              │
│  1. **Lazy Loading de Imagens**                             │
│     ```html                                                  │
│     <img                                                     │
│       src="hero-placeholder.jpg"                            │
│       data-src="hero-full.jpg"                              │
│       alt="Hero"                                            │
│       loading="lazy"                                        │
│       decoding="async"                                      │
│     >                                                        │
│     ```                                                      │
│                                                              │
│  2. **Preload Critical Assets**                             │
│     ```html                                                  │
│     <link rel="preload"                                     │
│           as="image"                                        │
│           href="hero-bg.webp"                               │
│           type="image/webp">                                │
│                                                              │
│     <link rel="preload"                                     │
│           as="font"                                         │
│           href="hero-font.woff2"                            │
│           type="font/woff2"                                 │
│           crossorigin>                                      │
│     ```                                                      │
│                                                              │
│  3. **Otimizar Imagens**                                    │
│     ```css                                                   │
│     .hero {                                                  │
│       /* WebP com fallback */                               │
│       background-image:                                     │
│         image-set(                                          │
│           url('hero.webp') 1x,                              │
│           url('hero@2x.webp') 2x                            │
│         );                                                   │
│     }                                                        │
│                                                              │
│     /* Fallback para browsers antigos */                    │
│     @supports not (background-image: image-set(url('x') 1x)) {│
│       .hero {                                               │
│         background-image: url('hero.jpg');                  │
│       }                                                      │
│     }                                                        │
│     ```                                                      │
│                                                              │
│  4. **GPU Acceleration**                                    │
│     ```css                                                   │
│     .hero-animated {                                        │
│       /* Force GPU layer */                                 │
│       transform: translateZ(0);                             │
│       backface-visibility: hidden;                          │
│       perspective: 1000px;                                  │
│                                                              │
│       /* Hint browser about changes */                      │
│       will-change: transform, opacity;                      │
│     }                                                        │
│     ```                                                      │
│                                                              │
│  5. **Reduce Layout Shifts (CLS)**                          │
│     ```css                                                   │
│     .hero-image {                                           │
│       /* Reserve espaço antes de carregar */                │
│       aspect-ratio: 16 / 9;                                 │
│       width: 100%;                                          │
│       height: auto;                                         │
│     }                                                        │
│     ```                                                      │
│                                                              │
│  6. **Intersection Observer para Animações**                │
│     ```javascript                                            │
│     const heroObserver = new IntersectionObserver(          │
│       (entries) => {                                        │
│         entries.forEach(entry => {                          │
│           if (entry.isIntersecting) {                       │
│             entry.target.classList.add('animate');          │
│             heroObserver.unobserve(entry.target);           │
│           }                                                  │
│         });                                                  │
│       },                                                     │
│       { threshold: 0.1 }                                    │
│     );                                                       │
│                                                              │
│     document.querySelectorAll('.hero-element')              │
│       .forEach(el => heroObserver.observe(el));             │
│     ```                                                      │
│                                                              │
│  📊 MÉTRICAS ALVO:                                          │
│  • LCP (Largest Contentful Paint): < 2.5s                   │
│  • FID (First Input Delay): < 100ms                         │
│  • CLS (Cumulative Layout Shift): < 0.1                     │
│  • Animation FPS: 60fps consistente                         │
│  • Time to Interactive: < 3.5s                              │
│                                                              │
│  Output: Código otimizado + performance-report.md           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              FASE 9: TESTING & VALIDATION                    │
│                                                              │
│  🧪 BATERIA DE TESTES:                                      │
│                                                              │
│  ✅ **Visual Testing**                                      │
│  - [ ] Centralização perfeita em todos viewports            │
│  - [ ] Tipografia legível e hierarquia clara                │
│  - [ ] Cores com contraste adequado                         │
│  - [ ] Imagens carregam corretamente                        │
│  - [ ] Overlays funcionam bem                               │
│  - [ ] CTAs visíveis e acessíveis                           │
│                                                              │
│  ✅ **Animation Testing**                                   │
│  - [ ] Animações rodam a 60fps                              │
│  - [ ] Sem frame drops                                      │
│  - [ ] Easing natural e suave                               │
│  - [ ] Timing coerente entre elementos                      │
│  - [ ] Animações não causam jank                            │
│  - [ ] Funciona com prefers-reduced-motion                  │
│                                                              │
│  ✅ **Responsive Testing**                                  │
│  - [ ] Mobile (320px - 767px): OK                           │
│  - [ ] Tablet (768px - 1023px): OK                          │
│  - [ ] Desktop (1024px - 1439px): OK                        │
│  - [ ] Large Desktop (1440px+): OK                          │
│  - [ ] Portrait e Landscape: OK                             │
│  - [ ] Touch targets ≥ 44px                                 │
│                                                              │
│  ✅ **Performance Testing**                                 │
│  - [ ] Lighthouse Score > 90                                │
│  - [ ] LCP < 2.5s                                           │
│  - [ ] FID < 100ms                                          │
│  - [ ] CLS < 0.1                                            │
│  - [ ] Total Blocking Time < 300ms                          │
│                                                              │
│  ✅ **Accessibility Testing**                               │
│  - [ ] Contraste WCAG AA (4.5:1 mínimo)                     │
│  - [ ] Keyboard navigation funciona                         │
│  - [ ] Screen reader friendly                               │
│  - [ ] Alt text em imagens                                  │
│  - [ ] ARIA labels apropriados                              │
│  - [ ] Focus indicators visíveis                            │
│                                                              │
│  ✅ **Cross-Browser Testing**                               │
│  - [ ] Chrome/Edge (Chromium)                               │
│  - [ ] Firefox                                              │
│  - [ ] Safari (macOS/iOS)                                   │
│  - [ ] Samsung Internet                                     │
│                                                              │
│  ✅ **Cross-Device Testing**                                │
│  - [ ] iPhone (Safari)                                      │
│  - [ ] Android (Chrome)                                     │
│  - [ ] iPad                                                  │
│  - [ ] Desktop (Windows/Mac/Linux)                          │
│                                                              │
│  Output: test-results.md + screenshots/                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              FASE 10: DOCUMENTATION & HANDOFF                │
│                                                              │
│  📦 ENTREGÁVEIS FINAIS:                                     │
│                                                              │
│  1. **HERO_FIX_REPORT.md**                                  │
│     • Problemas encontrados                                 │
│     • Soluções implementadas                                │
│     • Antes e depois (screenshots)                          │
│     • Melhorias de performance                              │
│                                                              │
│  2. **IMPLEMENTATION_GUIDE.md**                             │
│     • Como o hero funciona                                  │
│     • Estrutura de código                                   │
│     • Variáveis CSS customizáveis                           │
│     • Como fazer modificações                               │
│                                                              │
│  3. **ANIMATION_PLAYBOOK.md**                               │
│     • Biblioteca de animações usadas                        │
│     • Timing e easing reference                             │
│     • Como adicionar novas animações                        │
│                                                              │
│  4. **RESPONSIVE_GUIDE.md**                                 │
│     • Breakpoints definidos                                 │
│     • Comportamento em cada viewport                        │
│     • Como testar responsividade                            │
│                                                              │
│  5. **MAINTENANCE_CHECKLIST.md**                            │
│     • Checklist para futuras modificações                   │
│     • Best practices                                        │
│     • Common pitfalls to avoid                              │
│                                                              │
│  ✅ HANDOFF CHECKLIST:                                      │
│  - [ ] Código limpo e comentado                             │
│  - [ ] Todos os testes passando                             │
│  - [ ] Performance otimizada                                │
│  - [ ] Documentação completa                                │
│  - [ ] Screenshots de todos viewports                       │
│  - [ ] Vídeo demonstrando animações                         │
│  - [ ] Lighthouse report incluído                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Estrutura de Arquivos Gerados

```
project-root/
│
├── .hero-fixes/
│   │
│   ├── audit/
│   │   ├── hero-audit-report.md              # Auditoria inicial
│   │   ├── problems-found.md                 # Problemas detectados
│   │   ├── screenshots/                      # Screenshots do antes
│   │   │   ├── mobile-before.png
│   │   │   ├── tablet-before.png
│   │   │   └── desktop-before.png
│   │   └── performance-before.json           # Métricas iniciais
│   │
│   ├── analysis/
│   │   ├── problem-classification.md         # Categorização
│   │   ├── deep-analysis-report.md           # Análise profunda
│   │   ├── html-structure.md                 # Estrutura HTML
│   │   ├── css-analysis.md                   # Análise CSS
│   │   └── js-analysis.md                    # Análise JavaScript
│   │
│   ├── fixes/
│   │   ├── centering-fix/
│   │   │   ├── before.html
│   │   │   ├── after.html
│   │   │   └── explanation.md
│   │   ├── animation-smoothing/
│   │   │   ├── before.css
│   │   │   ├── after.css
│   │   │   └── timing-guide.md
│   │   ├── visual-coherence/
│   │   │   ├── design-tokens.css
│   │   │   ├── typography.css
│   │   │   └── colors.css
│   │   ├── responsive-fixes/
│   │   │   ├── breakpoints.css
│   │   │   ├── mobile.css
│   │   │   ├── tablet.css
│   │   │   └── desktop.css
│   │   └── performance-optimizations/
│   │       ├── image-optimization.md
│   │       ├── lazy-loading.js
│   │       └── gpu-acceleration.css
│   │
│   ├── testing/
│   │   ├── test-results.md                   # Resultados gerais
│   │   ├── visual-tests/
│   │   │   ├── mobile-after.png
│   │   │   ├── tablet-after.png
│   │   │   └── desktop-after.png
│   │   ├── performance-tests/
│   │   │   ├── lighthouse-report.html
│   │   │   ├── webpagetest-results.json
│   │   │   └── performance-after.json
│   │   ├── animation-tests/
│   │   │   ├── fps-analysis.md
│   │   │   └── animation-demo.mp4
│   │   └── accessibility-tests/
│   │       ├── axe-report.json
│   │       └── contrast-checker.md
│   │
│   └── deliverables/
│       ├── HERO_FIX_REPORT.md                # Relatório executivo
│       ├── IMPLEMENTATION_GUIDE.md           # Guia de implementação
│       ├── ANIMATION_PLAYBOOK.md             # Biblioteca de animações
│       ├── RESPONSIVE_GUIDE.md               # Guia responsivo
│       ├── MAINTENANCE_CHECKLIST.md          # Checklist manutenção
│       └── hero-final/                       # Código final
│           ├── hero.html
│           ├── hero.css
│           └── hero.js
```

---

## Biblioteca de Animações Pré-Definidas

### 🎬 Entrance Animations

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Down */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Left */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Fade In Right */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Bounce In */
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

/* Rotate In */
@keyframes rotateIn {
  from {
    opacity: 0;
    transform: rotate(-180deg) scale(0.5);
  }
  to {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
}
```

### 🌊 Continuous Animations

```css
/* Float */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Pulse */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Glow */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
}

/* Shimmer */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* Gradient Shift */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

### ⚡ Micro-Interactions

```css
/* Button Hover - Lift */
.hero-cta {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Button Hover - Scale */
.hero-cta {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero-cta:hover {
  transform: scale(1.05);
}

/* Link Underline Expand */
.hero-link {
  position: relative;
}

.hero-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}

.hero-link:hover::after {
  width: 100%;
}
```

---

## Debugging Checklist

### 🐛 Problemas Comuns e Soluções

```markdown
**PROBLEMA: Elementos desalinhados verticalmente**

✅ CHECKLIST:
- [ ] Verificar se parent tem display: flex ou grid
- [ ] Conferir align-items / justify-content
- [ ] Checar se há margins/paddings conflitantes
- [ ] Verificar line-height excessivo
- [ ] Confirmar vertical-align se inline/inline-block

🔧 SOLUÇÃO RÁPIDA:
```css
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}
```

---

**PROBLEMA: Animação travando (jank)**

✅ CHECKLIST:
- [ ] Animar apenas transform e opacity
- [ ] Evitar width, height, top, left
- [ ] Adicionar will-change
- [ ] Usar transform: translateZ(0) para GPU
- [ ] Verificar se há muitos elementos animando

🔧 SOLUÇÃO RÁPIDA:
```css
.hero-element {
  will-change: transform, opacity;
  transform: translateZ(0);
}

/* ❌ EVITAR */
animation: move 1s ease;
@keyframes move {
  from { left: 0; }
  to { left: 100px; }
}

/* ✅ USAR */
animation: move 1s ease;
@keyframes move {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
```

---

**PROBLEMA: Texto ilegível sobre imagem**

✅ CHECKLIST:
- [ ] Adicionar overlay escuro/claro
- [ ] Usar text-shadow
- [ ] Ajustar opacidade do background
- [ ] Verificar contraste WCAG
- [ ] Considerar mudar cor do texto

🔧 SOLUÇÃO RÁPIDA:
```css
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5); /* Overlay */
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
```

---

**PROBLEMA: Hero quebra em mobile**

✅ CHECKLIST:
- [ ] Usar min-height ao invés de height fixo
- [ ] Implementar fluid typography
- [ ] Reduzir padding em viewports pequenos
- [ ] Ajustar imagens para mobile
- [ ] Testar em 320px (menor viewport comum)

🔧 SOLUÇÃO RÁPIDA:
```css
.hero {
  min-height: 100svh; /* Safe viewport height */
  padding: 1rem; /* Mobile */
}

@media (min-width: 768px) {
  .hero {
    padding: 3rem;
  }
}

.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

---

**PROBLEMA: Z-index conflicts**

✅ CHECKLIST:
- [ ] Criar stacking context explícito
- [ ] Documentar z-index scale
- [ ] Usar CSS custom properties
- [ ] Evitar valores arbitrários (999, 9999)

🔧 SOLUÇÃO RÁPIDA:
```css
:root {
  --z-background: -1;
  --z-default: 0;
  --z-content: 1;
  --z-overlay: 10;
  --z-modal: 100;
}

.hero-bg {
  z-index: var(--z-background);
}

.hero-content {
  position: relative;
  z-index: var(--z-content);
}
```

---

**PROBLEMA: Performance ruim (LCP alto)**

✅ CHECKLIST:
- [ ] Otimizar tamanho de imagens
- [ ] Usar formatos modernos (WebP, AVIF)
- [ ] Implementar lazy loading correto
- [ ] Preload hero image
- [ ] Reduzir JavaScript blocking

🔧 SOLUÇÃO RÁPIDA:
```html
<!-- Preload hero image -->
<link rel="preload" as="image" href="hero.webp">

<!-- Otimizar imagem -->
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero" loading="eager">
</picture>
```
```

---

## Templates de Código Prontos

### Template: Hero Básico Centralizado

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hero Section</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .hero {
      /* Layout */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 2rem;
      text-align: center;

      /* Visual */
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;

      /* Performance */
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
    }

    .hero-title {
      font-size: clamp(2rem, 5vw, 4rem);
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1rem;
      
      /* Animation */
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.8s ease-out 0.2s forwards;
    }

    .hero-subtitle {
      font-size: clamp(1rem, 2.5vw, 1.5rem);
      font-weight: 400;
      line-height: 1.6;
      margin-bottom: 2rem;
      opacity: 0.9;
      
      /* Animation */
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.8s ease-out 0.4s forwards;
    }

    .hero-cta {
      /* Layout */
      display: inline-block;
      padding: 1rem 2rem;
      
      /* Visual */
      background: white;
      color: #667eea;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1rem;
      
      /* Animation */
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.8s ease-out 0.6s forwards;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .hero-cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero {
        padding: 1rem;
      }

      .hero-cta {
        padding: 0.875rem 1.75rem;
        font-size: 0.9375rem;
      }
    }
  </style>
</head>
<body>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        Transforme Sua Visão em Realidade
      </h1>
      <p class="hero-subtitle">
        Crie experiências digitais incríveis com animações suaves e design responsivo
      </p>
      <a href="#" class="hero-cta">
        Começar Agora
      </a>
    </div>
  </section>
</body>
</html>
```

### Template: Hero com Background de Imagem

```html
<section class="hero hero-with-image">
  <div class="hero-bg">
    <picture>
      <source srcset="hero.avif" type="image/avif">
      <source srcset="hero.webp" type="image/webp">
      <img src="hero.jpg" alt="Background" loading="eager">
    </picture>
  </div>
  
  <div class="hero-overlay"></div>
  
  <div class="hero-content">
    <h1 class="hero-title">Título Impactante</h1>
    <p class="hero-subtitle">Descrição clara e concisa</p>
    <div class="hero-ctas">
      <a href="#" class="hero-cta hero-cta-primary">Ação Principal</a>
      <a href="#" class="hero-cta hero-cta-secondary">Saiba Mais</a>
    </div>
  </div>
  
  <div class="scroll-indicator">
    <span>Scroll</span>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 16l-6-6h12z" fill="currentColor"/>
    </svg>
  </div>
</section>

<style>
  .hero-with-image {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.6)
    );
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    padding: 2rem;
    max-width: 900px;
  }

  .hero-ctas {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .hero-cta-primary {
    background: #3b82f6;
    color: white;
  }

  .hero-cta-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-10px);
    }
  }
</style>
```

---

## 🎯 Conclusão

O **Hero Animation Specialist** transforma seções HERO problemáticas em experiências visuais suaves, coerentes e profissionais através de:

1. **Auditoria Automática** - Detecta problemas de layout, animação, visual e performance
2. **Centralização Perfeita** - Corrige alinhamento com Flexbox/Grid moderno
3. **Animações Suaves** - Implementa animações a 60fps com easing natural
4. **Coerência Visual** - Aplica design system consistente
5. **Responsividade Total** - Funciona perfeitamente em todos dispositivos
6. **Performance Otimizada** - LCP < 2.5s, CLS < 0.1, 60fps constante
7. **Código Limpo** - Documentado, testado e pronto para manutenção

**Resultado:** HEROs que causam impacto positivo e primeira impressão profissional.

---

**Versão:** 1.0.0
**Última Atualização:** 2024
**Mantido por:** Antygravity IDE Team
**Modo de Uso:** Ative esta skill quando precisar criar ou corrigir seções HERO do website
