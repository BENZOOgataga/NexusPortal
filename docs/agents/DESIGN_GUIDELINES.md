# SC COMPANION — DESIGN GUIDELINES
### Référence complète pour reproduire l'esthétique Roberts Space Industries

> **Version** : 3.0 — Document maître  
> **Portée** : Chaque pixel de l'interface doit pouvoir être justifié par ce document.  
> **Principe absolu** : *"Ce n'est pas une application. C'est un terminal opérationnel de l'United Empire of Earth."*

---

## TABLE DES MATIÈRES

1. [ADN Visuel RSI — Philosophie profonde](#1-adn-visuel-rsi--philosophie-profonde)
2. [Design Tokens — Variables complètes](#2-design-tokens--variables-complètes)
3. [Couleurs — Système et sémantique](#3-couleurs--système-et-sémantique)
4. [Typographie — Hiérarchie et règles](#4-typographie--hiérarchie-et-règles)
5. [Grille, Espacement et Layout](#5-grille-espacement-et-layout)
6. [Fonds, Textures et Atmosphère](#6-fonds-textures-et-atmosphère)
7. [Bordures, Séparateurs et Coins](#7-bordures-séparateurs-et-coins)
8. [Composants — Spécifications complètes](#8-composants--spécifications-complètes)
9. [Animations — Catalogue et philosophie](#9-animations--catalogue-et-philosophie)
10. [Effets Spéciaux — Holo, Scanline, Shimmer](#10-effets-spéciaux--holo-scanline-shimmer)
11. [Iconographie et Symboles](#11-iconographie-et-symboles)
12. [Micro-interactions et Game Feel](#12-micro-interactions-et-game-feel)
13. [États et Feedback Système](#13-états-et-feedback-système)
14. [Responsive et Densité](#14-responsive-et-densité)
15. [Accessibilité — Contrastes et Focus](#15-accessibilité--contrastes-et-focus)
16. [Vocabulaire et Tone of Voice UEE](#16-vocabulaire-et-tone-of-voice-uee)
17. [Anti-patterns — Ce qu'il est INTERDIT de faire](#17-anti-patterns)
18. [Checklist de validation](#18-checklist-de-validation)

---

## 1. ADN Visuel RSI — Philosophie profonde

### 1.1 Ce qu'est le design RSI

Roberts Space Industries a construit un site qui ne ressemble à aucun autre site de jeu. Il n'est pas *fun*, il n'est pas *accessible*, il n'est pas *chaleureux*. Il est **austère, cinématique, militaire, premium**. C'est le site d'une corporation spatiale de 30ème siècle qui vend des vaisseaux à des milliards de dollars.

Le site RSI moderne (2020–2024) est une évolution de l'UI militaire sci-fi vers quelque chose de plus raffiné. Moins de chrome, plus de substance. Moins d'effets, plus de typographie. Mais l'ADN est intact : **noir profond, or sparingement utilisé, grilles géométriques, texte monospace pour les données critiques**.

### 1.2 Les 7 lois de l'immersion

**Loi 1 — Tout élément est diegétique**  
Chaque composant doit avoir une raison d'exister dans l'univers. Un bouton n'est pas un bouton — c'est une *commande terminale*. Un formulaire n'est pas un formulaire — c'est un *protocole d'enregistrement citoyen*. Avant de designer un composant, demandez-vous : "Est-ce que ça pourrait être dans le cockpit d'un Hammerhead ?"

**Loi 2 — Le fond n'est jamais neutre**  
Un fond `#000000` uni est interdit. Il y a toujours une grille, un dégradé radial, un glow. Ces textures doivent être quasi-invisibles (opacité 2–5%), mais leur absence se ressentira immédiatement : l'interface paraîtra "morte".

**Loi 3 — L'or est la couleur de l'autorité, pas de la décoration**  
`#c5a84e` représente l'UEE, la certification, l'authentification. Il apparaît sur les éléments qui *signifient* quelque chose : la bordure top d'une card importante, le label d'un Citizen ID, le fill d'un bouton CTA. Jamais utilisé pour "égayer" un fond.

**Loi 4 — Les transitions racontent une histoire**  
La boot sequence n'est pas optionnelle — elle dit "ce système démarre". Les `fadeUp` sur les pages ne sont pas décoratifs — ils disent "ce terminal affiche des données". Chaque animation a une narration interne.

**Loi 5 — La densité est une feature**  
RSI n't pas peur de la densité d'information. Les cartes techniques montrent des fingerprints, des IDs, des signatures tronquées. Les utilisateurs de Star Citizen sont habitués à l'information dense. Ne pas over-simplifier.

**Loi 6 — L'angularité est une signature**  
Zéro border-radius sur les composants principaux (inputs, boutons, modals, cards). La forme hexagonale et les lignes droites définissent le style. Le seul arrondi autorisé : les tags/badges (border-radius 10px — pill).

**Loi 7 — La monospace est le langage des données**  
Toute donnée technique (IDs, fingerprints, signatures, callsigns, timestamps précis, coordonnées) utilise une police monospace. Cela différencie visuellement le "contenu" de la "donnée" et renforce l'impression de système informatique.

### 1.3 Analyse du site RSI — ce qu'on observe

En disséquant robertsspaceindustries.com :

**Palette chromatique observée**  
- Fond quasi-noir avec teinte bleue marine (pas noir pur — ~`#08091a`)
- Sections alternent entre noirs légèrement différents (~`#050608`, `#0a0c18`, `#0f1120`)
- Accents : or antique `#c5a84e`, bleu acier `#4a9fd4`, vert certification `#3dc878`
- Texte : blanc très légèrement bleuté (`#e8eaf5`), jamais blanc pur

**Typographie observée**  
- Sans-serif neutre (Neue Helvetica, ou équivalent) pour le corps et l'UI
- Quelques titres hero en font geométrique
- **Signature absolue** : eyebrows en uppercase avec letter-spacing ≥ 0.15em
- Texte monospace pour données/stats
- Pas d'italique dans l'UI (seulement pour le lore/citations)

**Layout observé**  
- Navigation horizontale top, très fine, 52–60px height
- Sections en full-width avec max-content centré
- Images vaisseaux en très grand format, assombries aux bords
- Grilles de cards 2, 3 ou 4 colonnes selon le contenu
- Aucun card rounded corner > 2px

**Effets observés**  
- Overlay subtil sur les images (linear-gradient sombre)
- Hover: brightening subtil + border color change
- Badges/tags minuscules et denses
- Séparateurs fins (1px) plutôt que dividers massifs

---

## 2. Design Tokens — Variables complètes

### 2.1 Système de tokens CSS complet

```css
/* ═══════════════════════════════════════════════════════════
   SC COMPANION — DESIGN TOKENS
   Toute valeur hardcodée dans un composant = violation
   ═══════════════════════════════════════════════════════════ */

:root {

  /* ──────────────────────────────────────
     BACKGROUNDS
     Hiérarchie : bg-0 = plus sombre/profond
                  bg-4 = plus élevé/éclairé
     ────────────────────────────────────── */
  --bg-0:  #05060e;   /* Fond absolu. Derrière tout. Inputs. */
  --bg-1:  #08091a;   /* Page background. Surface de base. */
  --bg-2:  #0d0f20;   /* Cards. Panels. Surfaces raised. */
  --bg-3:  #121428;   /* Hover state. Overlays légers. */
  --bg-4:  #181b30;   /* Éléments elevated. Dropdowns. */
  --bg-5:  #1e2238;   /* Sélections actives. Highlight fort. */

  /* ──────────────────────────────────────
     BORDERS
     ────────────────────────────────────── */
  --bdr-0: #0d0f1e;   /* Séparateurs ultra-subtils */
  --bdr-1: #1a1e35;   /* Séparateurs standard, presque invisible */
  --bdr-2: #242848;   /* Bordures de composants (inputs, cards) */
  --bdr-3: #323868;   /* Bordures hover, focus sans gold */
  --bdr-4: #404880;   /* Bordures actives, sélectionnées */

  /* ──────────────────────────────────────
     OR — Accent UEE principal
     Représente : autorité, certification, UEE
     ────────────────────────────────────── */
  --gold:       #c5a84e;
  --gold-light: #dfc070;              /* Text hover, highlights */
  --gold-dark:  #8a6c28;              /* Holo strip, ombres dorées */
  --gold-deep:  #4a3a10;              /* Fond très sombre teinté or */
  --gold-05:    rgba(197,168,78,.05); /* Fond imperceptible */
  --gold-10:    rgba(197,168,78,.10); /* Fond subtil (gold-dim) */
  --gold-15:    rgba(197,168,78,.15); /* Fond visible */
  --gold-20:    rgba(197,168,78,.20); /* Fond hover */
  --gold-30:    rgba(197,168,78,.30); /* Glow, box-shadow */
  --gold-50:    rgba(197,168,78,.50); /* Bordures semi-transparentes */

  /* ──────────────────────────────────────
     BLEU — Accent secondaire (data, info)
     Représente : information, citoyen, lien
     ────────────────────────────────────── */
  --blue:       #4a9fd4;
  --blue-light: #6ab8e8;
  --blue-dark:  #2a6080;
  --blue-10:    rgba(74,159,212,.10);
  --blue-20:    rgba(74,159,212,.20);
  --blue-30:    rgba(74,159,212,.30);

  /* ──────────────────────────────────────
     TEAL — Accent tertiaire (stats, métriques)
     ────────────────────────────────────── */
  --teal:       #2ec4b6;
  --teal-light: #4eddd0;
  --teal-10:    rgba(46,196,182,.10);
  --teal-20:    rgba(46,196,182,.20);

  /* ──────────────────────────────────────
     VIOLET — Cryptographie, signatures
     ────────────────────────────────────── */
  --purple:     #8b6cf6;
  --purple-10:  rgba(139,108,246,.10);
  --purple-20:  rgba(139,108,246,.20);

  /* ──────────────────────────────────────
     SÉMANTIQUES — Statuts et feedback
     ────────────────────────────────────── */
  --green:      #3dc878;
  --green-10:   rgba(61,200,120,.10);
  --green-20:   rgba(61,200,120,.20);
  --green-glow: rgba(61,200,120,.35);

  --red:        #e04055;
  --red-10:     rgba(224,64,85,.10);
  --red-20:     rgba(224,64,85,.20);

  --orange:     #e07b2a;
  --orange-10:  rgba(224,123,42,.10);

  --yellow:     #f5c842;
  --yellow-10:  rgba(245,200,66,.10);

  /* ──────────────────────────────────────
     TEXTE
     Jamais blanc pur — toujours légèrement bleuté
     ────────────────────────────────────── */
  --txt:        #e2e8ff;   /* Principal. Titres. Données. Ratio 13:1 */
  --txt-2:      #8a94bc;   /* Secondaire. Corps. Descriptions. Ratio 5:1 */
  --txt-3:      #3d4468;   /* Muted. DÉCORATIF SEULEMENT. Ratio 2.4:1 */
  --txt-inv:    #05060e;   /* Texte sur fond doré/coloré */
  --txt-accent: #c5a84e;   /* Alias de --gold pour les textes */
  --txt-link:   #4a9fd4;   /* Alias de --blue pour les liens */

  /* ──────────────────────────────────────
     TYPOGRAPHIE
     ────────────────────────────────────── */
  --font-sans:  'Helvetica Neue', 'Segoe UI', 'Arial', sans-serif;
  --font-mono:  'Courier New', 'Consolas', 'Lucida Console', monospace;
  /* Futur : --font-display: 'Orbitron', var(--font-sans); */

  /* ──────────────────────────────────────
     ESPACEMENT — Échelle harmonique ×1.5
     ────────────────────────────────────── */
  --sp-1:  4px;
  --sp-2:  8px;
  --sp-3:  12px;
  --sp-4:  16px;
  --sp-5:  24px;
  --sp-6:  32px;
  --sp-7:  48px;
  --sp-8:  64px;
  --sp-9:  96px;
  --sp-10: 128px;

  /* ──────────────────────────────────────
     BORDER RADIUS
     Principe : angulaire par défaut
     ────────────────────────────────────── */
  --r-0:    0px;    /* Composants principaux TOUJOURS */
  --r-sm:   2px;    /* Tolérance infime */
  --r-md:   4px;    /* Maximum absolu pour composants */
  --r-pill: 10px;   /* UNIQUEMENT pour badges/tags */

  /* ──────────────────────────────────────
     TRANSITIONS
     ────────────────────────────────────── */
  --t-instant: 80ms ease;
  --t-fast:    150ms ease;
  --t-med:     220ms ease;
  --t-slow:    350ms cubic-bezier(0.22, 1, 0.36, 1);
  --t-reveal:  400ms cubic-bezier(0.16, 1, 0.3, 1);

  /* ──────────────────────────────────────
     SHADOWS
     RSI utilise des ombres profondes et dramatiques
     Pas de Material Design (ombres douces et diffuses)
     ────────────────────────────────────── */
  --shadow-sm:  0 2px 12px rgba(0,0,0,.4);
  --shadow-md:  0 4px 24px rgba(0,0,0,.55);
  --shadow-lg:  0 8px 48px rgba(0,0,0,.7);
  --shadow-xl:  0 16px 80px rgba(0,0,0,.85);
  --shadow-gold:0 0 24px var(--gold-30), 0 0 8px var(--gold-20);
  --shadow-blue:0 0 24px var(--blue-30), 0 0 8px var(--blue-20);

  /* ──────────────────────────────────────
     Z-INDEX — Hiérarchie stricte
     ────────────────────────────────────── */
  --z-base:      0;
  --z-raised:    5;
  --z-overlay:   10;
  --z-sidebar:   20;
  --z-topbar:    50;
  --z-dropdown:  60;
  --z-modal:     100;
  --z-toast:     200;
  --z-scanline:  9999;

  /* ──────────────────────────────────────
     DIMENSIONS FIXES
     Respecter ces valeurs pour la cohérence du layout
     ────────────────────────────────────── */
  --topbar-h:    54px;
  --sidebar-w:   220px;
  --sidebar-w-collapsed: 56px;
  --page-padding: 40px;
  --card-padding: 22px;
  --card-padding-sm: 14px;

}
```

### 2.2 Tokens sémantiques — aliases recommandés

```css
/* Utiliser ces aliases dans les composants pour découpler
   la sémantique de la valeur brute */
:root {
  /* Surfaces */
  --surface-page:    var(--bg-1);
  --surface-card:    var(--bg-2);
  --surface-hover:   var(--bg-3);
  --surface-input:   var(--bg-0);
  --surface-overlay: rgba(5,6,14,.85);

  /* Borders */
  --border-subtle:   var(--bdr-1);
  --border-default:  var(--bdr-2);
  --border-hover:    var(--bdr-3);
  --border-active:   var(--bdr-4);
  --border-accent:   var(--gold);
  --border-info:     var(--blue);
  --border-error:    var(--red);

  /* Text */
  --text-primary:    var(--txt);
  --text-secondary:  var(--txt-2);
  --text-muted:      var(--txt-3);   /* DÉCORATIF uniquement */
  --text-accent:     var(--gold);
  --text-link:       var(--blue);
  --text-error:      var(--red);
  --text-success:    var(--green);

  /* Status */
  --status-available:var(--green);
  --status-active:   var(--gold);
  --status-offline:  var(--txt-3);
  --status-repair:   var(--red);
  --status-busy:     var(--orange);

  /* Ship/Op status */
  --op-planned:      var(--gold);
  --op-active:       var(--green);
  --op-done:         var(--blue);
}
```

---

## 3. Couleurs — Système et sémantique

### 3.1 La palette complète avec usage

```
┌─────────────────────────────────────────────────────────┐
│                    BACKGROUNDS                          │
│  #05060e  bg-0  ████  Inputs, fond absolu               │
│  #08091a  bg-1  ████  Page background                   │
│  #0d0f20  bg-2  ████  Cards, panels                     │
│  #121428  bg-3  ████  Hover states                      │
│  #181b30  bg-4  ████  Éléments élevés                   │
├─────────────────────────────────────────────────────────┤
│                    ACCENTS                              │
│  #c5a84e  gold  ████  UEE, autorité, CTA               │
│  #4a9fd4  blue  ████  Info, citoyen, data               │
│  #2ec4b6  teal  ████  Stats, métriques                  │
│  #8b6cf6  purple████  Crypto, signatures                │
├─────────────────────────────────────────────────────────┤
│                  SÉMANTIQUES                            │
│  #3dc878  green ████  Online, disponible, vérifié       │
│  #e04055  red   ████  Erreur, danger, hors-service      │
│  #e07b2a  orange████  Warning, busy, attention          │
│  #f5c842  yellow████  Away, info non-critique           │
├─────────────────────────────────────────────────────────┤
│                     TEXTES                              │
│  #e2e8ff  txt   ████  Texte principal                   │
│  #8a94bc  txt-2 ████  Texte secondaire                  │
│  #3d4468  txt-3 ████  Décoratif seulement               │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Règles d'utilisation de l'or

L'or `#c5a84e` est le token le plus important. Il doit être utilisé avec discipline.

```
✅ Usages AUTORISÉS de l'or
──────────────────────────────────────────────────
  border-top: 2px solid var(--gold)          Card importante
  color: var(--gold)                          Citizen ID, label actif
  background: var(--gold)                     Bouton CTA UNIQUEMENT
  border-left: 2px solid var(--gold)          Info box, section active
  border-color: var(--gold) sur focus         Input focusé
  nav-item.active border-left-color           Item sélectionné sidebar
  box-shadow: 0 0 24px var(--gold-30)         Glow sur hover important
  ::before gradient top line sur card         Accent subtil automatique
  Strip holographique                          Signature visuelle

❌ Usages INTERDITS de l'or
──────────────────────────────────────────────────
  background: var(--gold) sur un fond entier  Trop agressif
  color: var(--gold) sur tous les textes       Perd sa valeur
  border: var(--gold) sur toutes les cards    Dilue l'importance
  Dégradé or/orange                           Trop ostentatoire
  Utiliser l'or "pour décorer"                Doit signifier qqch
```

### 3.3 Combinaisons de couleurs autorisées

```css
/* ✅ Sur fond bg-1 (#08091a) */
.combo-gold    { color: #c5a84e; }   /* Ratio 6.8:1 ✓ AA */
.combo-blue    { color: #4a9fd4; }   /* Ratio 5.4:1 ✓ AA */
.combo-green   { color: #3dc878; }   /* Ratio 8.2:1 ✓ AAA */
.combo-white   { color: #e2e8ff; }   /* Ratio 13.2:1 ✓ AAA */
.combo-txt2    { color: #8a94bc; }   /* Ratio 5.1:1 ✓ AA */
.combo-txt3    { color: #3d4468; }   /* Ratio 2.4:1 ✗ DÉCO UNIQUEMENT */

/* ✅ Texte sur fond or (#c5a84e) — bouton gold */
.on-gold { color: #05060e; }         /* Ratio 8.1:1 ✓ AAA */

/* ✅ Texte sur fond vert (#3dc878) */
.on-green { color: #05060e; }        /* Ratio 9.3:1 ✓ AAA */
```

### 3.4 Dégradés — catalogue complet

```css
/* ── Dégradés de fond de page ── */

/* Radial glow or en coin — hero sections */
.grad-page-gold {
  background:
    radial-gradient(ellipse at 60% 0%, rgba(197,168,78,.06) 0%, transparent 55%),
    var(--bg-1);
}

/* Dual glow — or + bleu */
.grad-page-dual {
  background:
    radial-gradient(ellipse at 20% 20%, rgba(197,168,78,.05) 0%, transparent 45%),
    radial-gradient(ellipse at 80% 80%, rgba(74,159,212,.05) 0%, transparent 45%),
    var(--bg-1);
}

/* Simple gradient vertical */
.grad-page-vert {
  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-0) 100%);
}

/* ── Dégradés de header section ── */

/* Header de card/section avec teinte */
.grad-header {
  background: linear-gradient(
    90deg,
    var(--bg-1) 0%,
    rgba(13,15,32,.95) 50%,
    var(--bg-1) 100%
  );
}

/* Header avec accent or */
.grad-header-gold {
  background: linear-gradient(
    180deg,
    rgba(197,168,78,.04) 0%,
    transparent 100%
  );
}

/* ── Dégradés de transition ── */

/* Fade bas — pour images */
.grad-fade-bottom {
  background: linear-gradient(
    0deg,
    var(--bg-1) 0%,
    rgba(8,9,26,.8) 30%,
    transparent 100%
  );
}

/* Fade latéral — pour longues lignes */
.grad-fade-right {
  background: linear-gradient(
    90deg,
    transparent 60%,
    var(--bg-1) 100%
  );
}

/* ── Lignes séparatrices gradient ── */

/* Ligne or centrale */
.grad-line-gold {
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--gold) 30%,
    var(--gold) 70%,
    transparent 100%
  );
}

/* Ligne or depuis gauche */
.grad-line-gold-left {
  background: linear-gradient(
    90deg,
    var(--gold) 0%,
    transparent 100%
  );
}
```

---

## 4. Typographie — Hiérarchie et règles

### 4.1 Stack typographique

```css
/* ── Polices ── */
--font-sans:  'Helvetica Neue', 'Segoe UI', 'Arial', sans-serif;
--font-mono:  'Courier New', 'Consolas', monospace;

/*
  Pour un level up : charger depuis Google Fonts

  Titres hero (futur) :
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap');
    → Orbitron est exactement le style RSI pour les grands titres
    → Utiliser UNIQUEMENT sur les titres hero, pas sur l'UI

  Police UI alternative (plus distinctif qu'Helvetica) :
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;900&display=swap');
    → Exo 2 : géométrique, légèrement futuriste, excellent pour l'UI
    → À activer pour un redesign plus marqué
*/
```

### 4.2 Échelle typographique complète

```css
/* ─────────────────────────────────────────────
   NIVEAU 1 — HERO
   Splash screens, titres de landing
   ───────────────────────────────────────────── */
.type-hero {
  font-family: var(--font-sans);
  font-size: clamp(36px, 5vw, 72px);
  font-weight: 900;
  letter-spacing: -0.025em;
  line-height: 1.05;
  color: var(--txt);
}
/* Usage : "UNITED EMPIRE OF EARTH" sur l'écran de boot */

/* ─────────────────────────────────────────────
   NIVEAU 2 — H1 PAGE
   Titre principal de chaque page
   ───────────────────────────────────────────── */
.type-h1 {
  font-family: var(--font-sans);
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 900;
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: var(--txt);
}
/* Usage : "Tableau de bord", "Opérations" */

/* ─────────────────────────────────────────────
   NIVEAU 3 — H2 SECTION
   Sous-titres de section dans une page
   ───────────────────────────────────────────── */
.type-h2 {
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.25;
  color: var(--txt);
}

/* ─────────────────────────────────────────────
   NIVEAU 4 — H3 CARD
   Titres de cards individuelles
   ───────────────────────────────────────────── */
.type-h3 {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.3;
  color: var(--txt);
}

/* ─────────────────────────────────────────────
   EYEBROW — SIGNATURE RSI
   Label de section. TOUJOURS uppercase + tracké.
   C'est LE pattern typographique RSI.
   ───────────────────────────────────────────── */
.type-eyebrow {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.20em;    /* ← Clé absolue du style RSI */
  text-transform: uppercase;
  line-height: 1.4;
  color: var(--txt-3);
  /* Variante gold : color: var(--gold) */
  /* Variante blue : color: var(--blue) */
}

/* ─────────────────────────────────────────────
   BODY — Corps principal
   ───────────────────────────────────────────── */
.type-body {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.65;
  color: var(--txt-2);
}

/* ─────────────────────────────────────────────
   BODY STRONG — Corps mis en avant
   ───────────────────────────────────────────── */
.type-body-strong {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--txt);
}

/* ─────────────────────────────────────────────
   UI LABEL — Navigation, labels de composants
   ───────────────────────────────────────────── */
.type-label {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1.4;
  color: var(--txt-2);
}

/* ─────────────────────────────────────────────
   CAPTION — Metadata, timestamps, sous-infos
   ───────────────────────────────────────────── */
.type-caption {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--txt-3);
}

/* ─────────────────────────────────────────────
   MONO DATA — IDs, fingerprints, callsigns
   Usage : toute donnée technique
   ───────────────────────────────────────────── */
.type-mono {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--txt-2);
}

/* ─────────────────────────────────────────────
   MONO ACCENT — Citizen ID, données critiques
   ───────────────────────────────────────────── */
.type-mono-accent {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--gold);
}

/* ─────────────────────────────────────────────
   TERMINAL — Boot sequence, CLI, logs
   ───────────────────────────────────────────── */
.type-terminal {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 2.2;
  color: var(--txt-2);
}

/* ─────────────────────────────────────────────
   BUTTON TEXT — Toujours uppercase
   ───────────────────────────────────────────── */
.type-btn {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
}

/* ─────────────────────────────────────────────
   TAG TEXT — Tags/badges
   ───────────────────────────────────────────── */
.type-tag {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```

### 4.3 Le pattern Eyebrow + Titre — règle d'or

C'est le motif le plus reconnaissable du style RSI. Il doit introduire **chaque section majeure**.

```html
<!-- Forme courte -->
<div>
  <p class="type-eyebrow" style="color: var(--gold)">REGISTRE FLEET</p>
  <h1 class="type-h1">Flotte de l'organisation</h1>
</div>

<!-- Avec ligne accent et sous-titre -->
<div>
  <p class="type-eyebrow">CENTRE OPÉRATIONNEL · NOVA VANGUARD</p>
  <h1 class="type-h1">Opérations planifiées</h1>
  <p class="type-body">3 opérations · 1 en cours</p>
</div>

<!-- Dans une topbar avec contexte UEE -->
<div>
  <p class="type-eyebrow">TABLEAU DE BORD — JEUDI 20 AVRIL 2954</p>
  <h1 class="type-h1">Bienvenue, <span style="color:var(--gold)">AceViper_99</span></h1>
</div>
```

### 4.4 Règles typographiques strictes

| Contexte | Taille | Poids | Color token | Letter-spacing |
|----------|--------|-------|-------------|----------------|
| Hero | 36–72px | 900 | `--txt` | -0.025em |
| H1 page | 22–32px | 900 | `--txt` | -0.01em |
| H2 section | 20px | 700 | `--txt` | 0 |
| H3 card | 16–17px | 700 | `--txt` | 0 |
| **Eyebrow** | **10px** | **700** | `--txt-3` / `--gold` | **0.20em** |
| Corps | 14px | 400 | `--txt-2` | 0 |
| Navigation | 13px | 500–600 | `--txt-3` actif → `--gold` | 0.03em |
| **Boutons** | **12px** | **700** | variable | **0.10em uppercase** |
| Labels UI | 12px | 600 | `--txt-2` | 0.04em |
| Caption | 11px | 400 | `--txt-3` | 0 |
| **Citizen ID** | **14–17px** | **700** | `--gold` | 0.06–0.08em |
| Fingerprints | 12–13px | 700 | `--blue` / `--gold` | 0.05em |
| Callsigns | 11–12px | 700 | `--txt-3` | 0.10em |
| Timestamps | 11px | 400 | `--txt-3` | 0 |
| Tags | 9–10px | 700 | variable | 0.12em uppercase |
| Terminal | 13px | 400 | `--txt-2` | 0.02em |

---

## 5. Grille, Espacement et Layout

### 5.1 Structure globale de l'application

```
┌──────────────────────────────────────────────────────────┐
│                    TOPBAR (54px fixe)                    │
├──────────────┬───────────────────────────────────────────┤
│              │                                           │
│   SIDEBAR    │            CONTENU DE PAGE               │
│   (220px)    │            (padding: 40px)                │
│   position   │            overflow-y: auto               │
│   sticky     │                                           │
│              │                                           │
│              │                                           │
└──────────────┴───────────────────────────────────────────┘
```

```css
/* Shell principal */
.app-shell {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: var(--bg-0);
  color: var(--txt);
  font-family: var(--font-sans);
}

/* Topbar */
.topbar {
  height: var(--topbar-h);   /* 54px — ne jamais varier */
  position: sticky;
  top: 0;
  z-index: var(--z-topbar);
  background: rgba(8, 9, 26, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--bdr-1);
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

/* Zone body (sidebar + page) */
.body-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
  height: calc(100vh - var(--topbar-h));
}

/* Sidebar */
.sidebar {
  width: var(--sidebar-w);   /* 220px */
  background: var(--bg-1);
  border-right: 1px solid var(--bdr-1);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

/* Contenu de page */
.page-content {
  flex: 1;
  overflow-y: auto;
  padding: var(--page-padding);
  background: var(--bg-0);
}
```

### 5.2 Grilles de contenu

```css
/* ── Statistiques avec séparateurs intégrés ── */
/* Le gap = 1px sur fond border = effet séparateur élégant */
.grid-stats-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--bdr-2);  /* Couleur visible entre cellules */
}
.grid-stats-4 > * {
  background: var(--bg-2);
  padding: 20px 24px;
}

.grid-stats-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--bdr-2);
}

/* ── Grilles de cards ── */
.grid-cards-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.grid-cards-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.grid-cards-auto {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
}

/* ── Layout sidebar principale (ex: chat) ── */
.layout-sidebar-main {
  display: grid;
  grid-template-columns: 220px 1fr;
  height: calc(100vh - var(--topbar-h));
}

/* ── Formulaire 2 colonnes ── */
.form-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.form-grid-2 .full-width { grid-column: 1 / -1; }
```

### 5.3 Espacements dans les composants

```
TOPBAR INTERNE
  logo-group → gap: 10px
  nav-group  → gap: 16px entre éléments majeurs
  user-group → gap: 12px
  padding    : 0 28px

SIDEBAR
  section padding : 0 20px
  nav-item padding: 12px 20px
  nav-item gap    : 12px
  section gap     : 4px entre items nav
  footer padding  : 14px 20px

PAGE
  padding extérieur : 40px
  margin section    : 32–36px
  margin sous-section: 20–24px

CARDS
  padding standard  : 22px
  padding compact   : 14–16px
  gap entre cards   : 14–20px
  gap interne label+valeur : 8–12px

FORMULAIRES
  gap entre champs  : 16–18px
  gap label+input   : 6px
  gap hint/error    : 5px

MESSAGES / CHAT
  padding message   : 10px 0
  gap avatar+content: 14px
  gap header+text   : 4px
```

### 5.4 Max-widths

```css
/* Contenu qui ne doit pas s'étirer à l'infini */
.content-xs    { max-width: 400px; }
.content-sm    { max-width: 560px; }
.content-md    { max-width: 720px; }
.content-lg    { max-width: 960px; }
.content-xl    { max-width: 1200px; }
.content-2xl   { max-width: 1400px; }
.content-full  { max-width: 100%; }
```

---

## 6. Fonds, Textures et Atmosphère

### 6.1 Principe fondamental

Le fond crée l'atmosphère. Sans textures, l'interface est un écran noir avec du texte blanc — aucune immersion. Les textures doivent être **imperceptibles au premier coup d'œil** mais **ressenties à leur absence**.

### 6.2 Grille géométrique (fond principal)

```css
/* Variante A — Large (48px) — Espaces ouverts, dashboards */
.bg-grid-lg {
  background-color: var(--bg-1);
  background-image:
    linear-gradient(rgba(197,168,78,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(197,168,78,.025) 1px, transparent 1px);
  background-size: 48px 48px;
}

/* Variante B — Fine (24px) — Zones denses, tables */
.bg-grid-sm {
  background-color: var(--bg-1);
  background-image:
    linear-gradient(rgba(197,168,78,.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(197,168,78,.02) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Variante C — Points (24px) — Ambiance spatiale */
.bg-dot {
  background-color: var(--bg-1);
  background-image: radial-gradient(
    circle,
    rgba(197,168,78,.15) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}
```

### 6.3 Glows radiaux

```css
/* Coin supérieur droit — or */
.bg-glow-gold-tr {
  background:
    radial-gradient(ellipse at 80% 0%, rgba(197,168,78,.07) 0%, transparent 50%),
    var(--bg-1);
}

/* Coin supérieur gauche — bleu */
.bg-glow-blue-tl {
  background:
    radial-gradient(ellipse at 20% 0%, rgba(74,159,212,.07) 0%, transparent 50%),
    var(--bg-1);
}

/* Combiné — dual glow */
.bg-glow-dual {
  background:
    radial-gradient(ellipse at 15% 15%, rgba(197,168,78,.05) 0%, transparent 45%),
    radial-gradient(ellipse at 85% 85%, rgba(74,159,212,.05) 0%, transparent 45%),
    var(--bg-1);
}

/* Hero — fort glow central or */
.bg-hero {
  background:
    radial-gradient(ellipse at 50% 0%, rgba(197,168,78,.08) 0%, transparent 60%),
    radial-gradient(ellipse at 50% 50%, rgba(197,168,78,.03) 0%, transparent 80%),
    var(--bg-1);
}

/* Combinaison grid + glow (le meilleur) */
.bg-cinematic {
  background-color: var(--bg-1);
  background-image:
    radial-gradient(ellipse at 60% 0%, rgba(197,168,78,.06) 0%, transparent 55%),
    linear-gradient(rgba(197,168,78,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(197,168,78,.025) 1px, transparent 1px);
  background-size: auto, 48px 48px, 48px 48px;
}
```

### 6.4 Overlay scanline — CRT / Holographique

```css
/*
  S'applique sur le wrapper global (.app-shell ou body)
  L'effet simule un faisceau qui balaye l'écran — très subtil.
  Ne jamais augmenter l'opacité au-delà de .02 : irritant.
*/
.scanline-host::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;  /* Hauteur du "rayon" */
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(197,168,78,.018) 50%,
    transparent 100%
  );
  animation: scanDown 9s linear infinite;
  pointer-events: none;
  z-index: var(--z-scanline);
}

@keyframes scanDown {
  0%   { transform: translateY(-100vh); }
  100% { transform: translateY(200vh); }
}
```

### 6.5 Shimmer holographique sur cards

```css
/*
  Simule un reflet lumineux qui se déplace sur la carte.
  Donner l'impression que la surface est en matériau réfléchissant.
*/
.card-holographic {
  position: relative;
  overflow: hidden;
}
.card-holographic::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 20%,
    rgba(197,168,78,.04) 40%,
    rgba(255,255,255,.02) 50%,
    rgba(74,159,212,.04) 60%,
    transparent 80%
  );
  background-size: 200% 100%;
  animation: shimmer 8s linear infinite;
  pointer-events: none;
}

@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### 6.6 Effets sur images de vaisseaux

RSI assombrit toujours les images aux bords pour les fondre dans le fond sombre.

```css
/* Image plein écran fondue */
.image-cinematic {
  position: relative;
}
.image-cinematic img {
  width: 100%;
  display: block;
  object-fit: cover;
}
.image-cinematic::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(0deg,   var(--bg-1) 0%,   transparent 35%),
    linear-gradient(90deg,  var(--bg-1) 0%,   transparent 20%),
    linear-gradient(270deg, var(--bg-1) 0%,   transparent 20%),
    linear-gradient(180deg, var(--bg-1) 0%,   transparent 20%);
}

/* Overlay couleur d'org sur image */
.image-org-tint::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--org-color, rgba(197,168,78,.15)) 0%,
    transparent 60%
  );
  mix-blend-mode: color;
}
```

---

## 7. Bordures, Séparateurs et Coins

### 7.1 Système de bordures

```css
/* ── Bordures fonctionnelles ── */
.border-subtle  { border: 1px solid var(--bdr-1); }
.border-default { border: 1px solid var(--bdr-2); }
.border-strong  { border: 1px solid var(--bdr-3); }
.border-accent  { border: 1px solid var(--gold); }

/* ── Bordures directionnelles accent ── */
/* Bordure top — card importante */
.border-t-gold { border-top: 2px solid var(--gold); }
.border-t-blue { border-top: 2px solid var(--blue); }

/* Bordure gauche — info box, nav active */
.border-l-gold   { border-left: 2px solid var(--gold); }
.border-l-blue   { border-left: 2px solid var(--blue); }
.border-l-green  { border-left: 2px solid var(--green); }
.border-l-red    { border-left: 2px solid var(--red); }

/* ── Lignes séparatrices ── */
.divider {
  height: 1px;
  background: var(--bdr-1);
  margin: 20px 0;
}

.divider-gold {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%, var(--gold) 20%, var(--gold) 80%, transparent 100%
  );
  opacity: 0.25;
  margin: 20px 0;
}

.divider-subtle {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent, var(--bdr-2), transparent
  );
  margin: 16px 0;
}

/* ── Section top line (::before sur card) ── */
/* Appliqué automatiquement sur .card-shine */
.card-shine::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(
    90deg, transparent, var(--gold), transparent
  );
  opacity: 0.18;
}
```

### 7.2 Coins décoratifs (corner brackets)

Signature visuelle directement tirée des interfaces SC. Suggèrent un "ciblage", une "mise au point" militaire. Utilisés sur les éléments importants : carte d'identité, hero sections, modals.

```css
/* Mixin corner brackets */
.corner-frame {
  position: relative;
}
.corner-frame::before,
.corner-frame::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
}
/* Coin haut-gauche */
.corner-frame::before {
  top: 0; left: 0;
  border-top: 2px solid var(--gold);
  border-left: 2px solid var(--gold);
}
/* Coin haut-droit */
.corner-frame::after {
  top: 0; right: 0;
  border-top: 2px solid var(--gold);
  border-right: 2px solid var(--gold);
}
/* Pour les coins bas : utiliser des pseudo-éléments sur un enfant */

/*
  En React/JSX — rendu des 4 coins manuellement :
  (méthode préférée car plus flexible)
*/
const CornerFrame = ({ color = 'var(--gold)', size = 16, children }) => (
  <div style={{ position:'relative' }}>
    {/* Coin HG */ <div style={{position:'absolute',top:0,left:0,width:size,height:size,borderTop:`2px solid ${color}`,borderLeft:`2px solid ${color}`}}/>}
    {/* Coin HD */ <div style={{position:'absolute',top:0,right:0,width:size,height:size,borderTop:`2px solid ${color}`,borderRight:`2px solid ${color}`}}/>}
    {/* Coin BG */ <div style={{position:'absolute',bottom:0,left:0,width:size,height:size,borderBottom:`2px solid ${color}`,borderLeft:`2px solid ${color}`}}/>}
    {/* Coin BD */ <div style={{position:'absolute',bottom:0,right:0,width:size,height:size,borderBottom:`2px solid ${color}`,borderRight:`2px solid ${color}`}}/>}
    {children}
  </div>
);
```

### 7.3 Effets de bordure lumineuse

```css
/* Bordure avec glow — carte d'identité, éléments certifiés */
.border-glow-gold {
  border: 1px solid rgba(197,168,78,.4);
  box-shadow:
    0 0 0 1px rgba(197,168,78,.1),   /* Halo interne */
    inset 0 0 20px rgba(197,168,78,.03); /* Glow intérieur */
}

/* Sidebar — ligne lumineuse latérale */
.sidebar-glow-edge::after {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(197,168,78,.3) 30%,
    rgba(197,168,78,.3) 70%,
    transparent 100%
  );
  opacity: 0.15;
}
```

---

## 8. Composants — Spécifications complètes

### 8.1 Boutons

```css
/* ── Base commune ── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  border-radius: 0;             /* ANGULAIRE — jamais arrondi */
  border: none;
  padding: 11px 22px;
  cursor: pointer;
  transition:
    background var(--t-fast),
    color var(--t-fast),
    border-color var(--t-fast),
    box-shadow var(--t-med),
    filter var(--t-fast),
    transform var(--t-instant);
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  overflow: hidden;
}
.btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  pointer-events: none;
}
.btn:active:not(:disabled) {
  transform: scale(0.97);
}

/* ── CTA Gold — Bouton principal ── */
/* Utiliser pour l'action la plus importante d'une vue */
.btn-gold {
  background: var(--gold);
  color: var(--txt-inv);
}
.btn-gold:hover:not(:disabled) {
  filter: brightness(1.12);
  box-shadow: 0 0 24px var(--gold-30), 0 4px 12px rgba(0,0,0,.4);
}

/* ── Outline Gold — Action secondaire importante ── */
.btn-outline {
  background: transparent;
  color: var(--gold);
  border: 1px solid var(--gold);
}
.btn-outline:hover:not(:disabled) {
  background: var(--gold);
  color: var(--txt-inv);
  box-shadow: 0 0 20px var(--gold-20);
}

/* ── Ghost — Action tertiaire / navigation ── */
.btn-ghost {
  background: transparent;
  color: var(--txt-2);
  border: 1px solid var(--bdr-2);
}
.btn-ghost:hover:not(:disabled) {
  color: var(--txt);
  border-color: var(--bdr-3);
  background: var(--bg-3);
}

/* ── Danger ── */
.btn-danger {
  background: transparent;
  color: var(--red);
  border: 1px solid var(--red);
}
.btn-danger:hover:not(:disabled) {
  background: var(--red);
  color: #fff;
}

/* ── Icon button ── */
.btn-icon {
  width: 34px; height: 34px;
  padding: 0;
  flex-shrink: 0;
}

/* ── Tailles ── */
.btn-xs  { padding: 4px 10px;  font-size: 10px; }
.btn-sm  { padding: 6px 14px;  font-size: 11px; }
.btn-md  { /* défaut */        }
.btn-lg  { padding: 14px 32px; font-size: 13px; }
.btn-xl  { padding: 18px 40px; font-size: 14px; }
.btn-full { width: 100%; }

/* ── État loading ── */
/* Toujours afficher <Spinner/> + texte de statut */
/* Jamais juste un spinner sans contexte */
.btn-loading { pointer-events: none; }
```

### 8.2 Inputs

```css
/* ── Base ── */
.inp {
  width: 100%;
  background: var(--bg-0);           /* Le plus sombre — profondeur */
  border: 1px solid var(--bdr-2);
  border-radius: 0;                   /* ANGULAIRE */
  color: var(--txt);
  font-family: var(--font-sans);
  font-size: 14px;
  padding: 11px 15px;
  outline: none;
  transition:
    border-color var(--t-fast),
    box-shadow var(--t-fast);
  -webkit-appearance: none;
  appearance: none;
}
.inp::placeholder {
  color: var(--txt-3);
  font-style: normal;                 /* Pas d'italique sur placeholder */
}
.inp:hover:not(:focus):not(:disabled) {
  border-color: var(--bdr-3);
}
.inp:focus {
  border-color: var(--gold);
  box-shadow:
    0 0 0 1px var(--gold-10),         /* Anneau subtil */
    inset 0 1px 4px rgba(0,0,0,.5);  /* Profondeur */
}
.inp:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: var(--bg-2);
}

/* ── Textarea ── */
textarea.inp {
  resize: vertical;
  min-height: 80px;
  line-height: 1.6;
}

/* ── Select ── */
select.inp {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%238a94bc' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}
select.inp option {
  background: var(--bg-3);
  color: var(--txt);
}

/* ── Input avec icône ── */
.inp-icon-wrapper {
  position: relative;
}
.inp-icon-wrapper .inp { padding-left: 40px; }
.inp-icon-wrapper .icon {
  position: absolute;
  left: 12px; top: 50%;
  transform: translateY(-50%);
  color: var(--txt-3);
  pointer-events: none;
}
.inp-icon-wrapper .inp:focus ~ .icon { color: var(--gold); }

/* ── États d'erreur ── */
.inp.error {
  border-color: var(--red);
  box-shadow: 0 0 0 1px var(--red-10);
}
.inp.success {
  border-color: var(--green);
  box-shadow: 0 0 0 1px var(--green-10);
}

/* ── Field wrapper (label + input + hint/error) ── */
.field {
  margin-bottom: 18px;
}
.field-label {
  /* Utilise le style eyebrow */
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.20em;
  text-transform: uppercase;
  color: var(--txt-3);
  margin-bottom: 6px;
}
.field-hint {
  font-size: 11px;
  color: var(--txt-3);
  margin-top: 5px;
  line-height: 1.4;
}
.field-error {
  font-size: 11px;
  color: var(--red);
  margin-top: 5px;
}
.field-error::before { content: '⚠ '; }
```

### 8.3 Cards

```css
/* ── Card de base ── */
.card {
  background: var(--bg-2);
  border: 1px solid var(--bdr-1);
  padding: var(--card-padding);
  position: relative;
  transition:
    border-color var(--t-med),
    background var(--t-med),
    box-shadow var(--t-med);
}

/* ── Card gold (la plus courante) ── */
.card-gold {
  border-top: 2px solid var(--gold);
}

/* ── Card avec top-line subtile auto ── */
.card-shine::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(
    90deg, transparent, var(--gold), transparent
  );
  opacity: 0.18;
  pointer-events: none;
}

/* ── Card interactive ── */
.card-hover {
  cursor: pointer;
}
.card-hover:hover {
  border-color: var(--bdr-3);
  background: var(--bg-3);
  box-shadow: var(--shadow-md);
}
.card-hover:hover::before { opacity: 0.45; }

/* ── Card compact ── */
.card-sm {
  padding: var(--card-padding-sm);
}

/* ── Card de stat ── */
.card-stat {
  background: var(--bg-2);
  padding: 18px 22px;
  border-bottom: 0;
}
.card-stat-value {
  font-size: 28px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 4px;
}
.card-stat-label { /* eyebrow style */ }

/* ── Card avec couleur latérale ── */
.card-color-left {
  border-left: 3px solid var(--card-accent-color, var(--gold));
  padding-left: 18px;
}
```

### 8.4 Tags / Badges

```css
/* ── Base ── */
.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  padding: 3px 10px;
  text-transform: uppercase;
  border: 1px solid currentColor;
  border-radius: var(--r-pill);
  white-space: nowrap;
  flex-shrink: 0;
}

/* Variantes couleurs */
.tag-gold   { color:var(--gold);   background:var(--gold-10);  border-color:var(--gold-50);  }
.tag-blue   { color:var(--blue);   background:var(--blue-10);  border-color:var(--blue-30);  }
.tag-green  { color:var(--green);  background:var(--green-10); border-color:var(--green-20); }
.tag-red    { color:var(--red);    background:var(--red-10);   border-color:var(--red-20);   }
.tag-teal   { color:var(--teal);   background:var(--teal-10);  border-color:var(--teal-20);  }
.tag-purple { color:var(--purple); background:var(--purple-10);border-color:var(--purple-20);}
.tag-ghost  { color:var(--txt-2);  background:transparent;     border-color:var(--bdr-2);    }

/* Avec dot de statut */
.tag::before {
  content: '●';
  font-size: 6px;
}

/* Variante large — pour statuts importants */
.tag-lg {
  font-size: 11px;
  padding: 5px 14px;
}
```

### 8.5 Navigation latérale

```css
/* ── Item de navigation ── */
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  cursor: pointer;
  color: var(--txt-3);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.03em;
  border-left: 2px solid transparent;
  transition:
    color var(--t-fast),
    background var(--t-fast),
    border-color var(--t-fast);
  user-select: none;
  position: relative;
}
.nav-item:hover {
  color: var(--txt);
  background: linear-gradient(
    90deg,
    rgba(197,168,78,.04) 0%,
    transparent 100%
  );
  border-left-color: var(--bdr-3);
}
.nav-item.active {
  color: var(--gold);
  background: linear-gradient(
    90deg,
    var(--gold-10) 0%,
    transparent 100%
  );
  border-left-color: var(--gold);
}

/* ── Icône de nav ── */
.nav-icon {
  font-size: 16px;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
}

/* ── Section heading dans sidebar ── */
.nav-section-heading {
  padding: 16px 20px 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.20em;
  text-transform: uppercase;
  color: var(--txt-3);
}
```

### 8.6 Topbar / Header

```css
/* ── Logo bloc ── */
.logo-block {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-hex {
  /* Hexagone 30×30 avec l'icône ✦ */
  width: 30px; height: 30px;
  border: 1px solid var(--gold);
  background: var(--gold-10);
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; color: var(--gold);
  clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
}
.logo-text {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: var(--gold);
  text-transform: uppercase;
  line-height: 1;
}
.logo-version {
  font-size: 9px;
  color: var(--txt-3);
  letter-spacing: 0.10em;
}

/* ── Org badge dans topbar ── */
.topbar-org {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  border-left: 1px solid var(--bdr-1);
}
.org-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ── User info ── */
.topbar-user {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 14px;
  border-left: 1px solid var(--bdr-1);
}
.user-handle {
  font-size: 13px;
  font-weight: 600;
  color: var(--txt);
  line-height: 1;
}
.user-cid {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--txt-3);
  line-height: 1;
}
```

### 8.7 Composant Message (Chat)

```css
.message {
  display: flex;
  gap: 14px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,.03);
  transition: background var(--t-instant);
}
.message:hover { background: rgba(197,168,78,.02); }
.message:last-child { border-bottom: none; }

/* Avatar hexagonal */
.message-avatar {
  width: 36px; height: 36px;
  border: 1px solid;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700;
  clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
  flex-shrink: 0;
}

/* Message header */
.message-header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 4px;
}
.message-author {
  font-size: 13px;
  font-weight: 700;
}
.message-ts {
  font-size: 11px;
  color: var(--txt-3);
}

/* Texte */
.message-text {
  font-size: 14px;
  color: var(--txt);
  line-height: 1.6;
}

/* Variantes */
.message-own .message-author { color: var(--gold); }
.message-system { opacity: 0.7; font-style: italic; }
.message-system .message-author { color: var(--txt-3); }
```

### 8.8 Avatar hexagonal

```css
/*
  La forme hexagonale est la signature de Star Citizen.
  Utilisée pour les avatars utilisateurs, le logo, les décos.
*/
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-family: var(--font-sans);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  flex-shrink: 0;
  transition: box-shadow var(--t-med);
}

/* Couleur dérivée du handle — 5 couleurs cycliques */
/* La cohérence visuelle renforce l'identité des membres */
/*
  Couleur = AVATAR_COLORS[charCodeAt(0) % 5]
  [0] #c5a84e  or      (A–E, 0–4)
  [1] #4a9fd4  bleu    (F–J, 5–9)
  [2] #8b6cf6  violet  (K–O)
  [3] #3dc878  vert    (P–T)
  [4] #d45060  rouge   (U–Z)
*/

/* Sizes */
.avatar-xs  { width:24px;  height:24px;  font-size:10px; }
.avatar-sm  { width:32px;  height:32px;  font-size:13px; }
.avatar-md  { width:40px;  height:40px;  font-size:16px; }  /* défaut */
.avatar-lg  { width:52px;  height:52px;  font-size:20px; }
.avatar-xl  { width:72px;  height:72px;  font-size:28px; }
.avatar-2xl { width:96px;  height:96px;  font-size:36px; }

/* Style avec border et glow */
.avatar-framed {
  border: 2px solid var(--avatar-color);
  background: color-mix(in srgb, var(--avatar-color) 25%, transparent);
  box-shadow: 0 0 16px color-mix(in srgb, var(--avatar-color) 30%, transparent);
}
```

---

## 9. Animations — Catalogue et philosophie

### 9.1 Catalogue complet des keyframes

```css
/* ─── ENTRÉES ─── */

/* Montée depuis le bas — pour les contenus de page */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apparition simple — pour les overlays */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Slide depuis la gauche — sidebar items, listes */
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Slide depuis la droite — panels latéraux */
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(12px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Scale depuis le centre — modals, popups */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
}

/* ─── CHARGEMENT ─── */

/* Rotation spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Pulsation lente — dots de statut, éléments "vivants" */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.35; }
}

/* Pulsation rapide — urgence, alerte */
@keyframes pulseFast {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.2; }
}

/* Skeleton loading */
@keyframes skeleton {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* ─── AMBIANCE ─── */

/* Holo strip — gradient animé */
@keyframes holoFlow {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Scanline CRT — rayon balayant l'écran */
@keyframes scanDown {
  0%   { transform: translateY(-100vh); }
  100% { transform: translateY(200vh); }
}

/* Shimmer holographique sur cards */
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* ─── FEEDBACK ─── */

/* Glow pulsant — éléments certifiés, actifs */
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 8px var(--gold-20);
  }
  50% {
    box-shadow: 0 0 24px var(--gold-30), 0 0 48px var(--gold-10);
  }
}

/* Flicker — effet terminal dégradé */
@keyframes flicker {
  0%, 95%, 100% { opacity: 1; }
  96%  { opacity: 0.85; }
  97%  { opacity: 1; }
  98%  { opacity: 0.9; }
}

/* Curseur clignotant terminal */
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* Boot typing effect */
@keyframes bootReveal {
  from { opacity: 0; transform: translateX(-4px); }
  to   { opacity: 1; transform: translateX(0); }
}
```

### 9.2 Classes utilitaires

```css
/* Entrée page/section */
.anim-fade-up {
  animation: fadeUp var(--t-slow) both;
}

/* Cascade pour listes (appliquer sur chaque item) */
.anim-fade-up:nth-child(1)  { animation-delay: 0ms; }
.anim-fade-up:nth-child(2)  { animation-delay: 40ms; }
.anim-fade-up:nth-child(3)  { animation-delay: 80ms; }
.anim-fade-up:nth-child(4)  { animation-delay: 120ms; }
.anim-fade-up:nth-child(5)  { animation-delay: 160ms; }
.anim-fade-up:nth-child(6)  { animation-delay: 200ms; }

/* Spinner */
.anim-spin {
  animation: spin 0.7s linear infinite;
}

/* Dot online */
.anim-pulse-slow {
  animation: pulse 3s ease-in-out infinite;
}

/* Alert/danger */
.anim-pulse-fast {
  animation: pulseFast 1s ease-in-out infinite;
}

/* Skeleton */
.anim-skeleton {
  background: linear-gradient(
    90deg,
    var(--bg-2) 25%,
    var(--bg-3) 50%,
    var(--bg-2) 75%
  );
  background-size: 200% 100%;
  animation: skeleton 1.5s ease-in-out infinite;
}
```

### 9.3 Durées et easing par contexte

```
Hover/Focus states      : 150ms ease      — imperceptible, réactif
UI transitions          : 220ms ease      — perceptible, fluide
Page entrances          : 350ms cubic-bezier(0.22, 1, 0.36, 1)
Modal / Panel open      : 280ms cubic-bezier(0.16, 1, 0.3, 1)
Press/Active            : 80ms ease       — immédiat
Holo strip              : 5s linear ∞    — ambiance continue
Scanline                : 9s linear ∞    — ultra-subtil
Shimmer card            : 6–8s linear ∞  — quasi-imperceptible
Skeleton loading        : 1.5s ease ∞
Dot pulse               : 3s ease ∞
```

### 9.4 Règles d'animation

```
✅ À FAIRE
  - fadeUp sur chaque écran au montage
  - pulse sur les dots de statut
  - holoFlow sur le strip holographique TOUJOURS
  - scanline sur le shell global
  - shimmer très subtil sur la carte d'identité
  - transition sur tous les éléments interactifs
  - boot sequence avec typing effect

❌ NE PAS FAIRE
  - bounce/spring sur des interfaces militaires
  - rotation continue de logos (kitsch)
  - animations bloquantes (attendre onAnimationEnd)
  - plus de 3 animations actives simultanément visible
  - animations > 500ms sur des interactions directes
  - confettis, particles flottantes, effets "fun"
  - transform scale > 1.02 sur des cards (instable)
```

---

## 10. Effets Spéciaux — Holo, Scanline, Shimmer

### 10.1 Strip holographique — spécification complète

```css
/*
  L'élément le plus distinctif de SC Companion.
  Positionné en bas des cartes d'identité et sections hero.
  Simule la bande de sécurité holographique des documents officiels.
*/
.holo-strip {
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  /* Dégradé multicolore en mouvement */
  background: linear-gradient(
    90deg,
    var(--bg-0)       0%,   /* Fondu depuis background */
    #4a3a10          8%,   /* Or très sombre */
    #8a6c28          18%,  /* Or sombre */
    #c5a84e          28%,  /* Or complet */
    #2a6080          38%,  /* Bleu profond */
    #4a9fd4          45%,  /* Bleu standard */
    #5030a0          55%,  /* Violet */
    #8b6cf6          62%,  /* Violet clair */
    #1a7850          72%,  /* Vert sombre */
    #3dc878          80%,  /* Vert standard */
    #8a6c28          90%,  /* Retour or */
    var(--bg-0)       100%  /* Fondu vers background */
  );
  background-size: 300% 100%;  /* Plus large pour plus de mouvement */
  animation: holoFlow 5s linear infinite;
  opacity: 0.65;
}

/* Texte du strip */
.holo-strip-text {
  font-family: var(--font-mono);
  font-size: 7px;
  font-weight: 600;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
  position: relative;
  z-index: 1;
  white-space: nowrap;
}

/* Overlay pour renforcer le texte */
.holo-strip::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    var(--bg-0), transparent 10%, transparent 90%, var(--bg-0)
  );
  z-index: 0;
}
```

### 10.2 Shimmer carte d'identité

```css
/*
  Simule un reflet lumineux qui parcourt la carte.
  Doit être subtil — à peine perceptible.
  Renforce l'impression de surface holographique premium.
*/
.id-card-shimmer {
  position: relative;
  overflow: hidden;
}
.id-card-shimmer::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    112deg,
    transparent 15%,
    rgba(197,168,78,.04) 35%,
    rgba(255,255,255,.025) 50%,
    rgba(74,159,212,.04) 65%,
    transparent 85%
  );
  background-size: 200% 100%;
  animation: shimmer 8s linear infinite;
  pointer-events: none;
  z-index: 1;
}
```

### 10.3 Glow sur avatars et éléments importants

```css
/* Avatar en ligne avec glow */
.avatar-online {
  box-shadow: 0 0 0 2px var(--green), 0 0 12px rgba(61,200,120,.4);
}

/* Carte d'identité certifiée */
.id-card-certified {
  box-shadow:
    0 0 0 1px rgba(197,168,78,.2),
    0 8px 48px rgba(0,0,0,.8),
    inset 0 0 60px rgba(197,168,78,.02);
}

/* CTA gold hover */
.btn-gold:hover {
  box-shadow:
    0 0 24px rgba(197,168,78,.35),
    0 4px 16px rgba(0,0,0,.4);
}

/* Élément "vérifié" */
.verified-badge {
  box-shadow: 0 0 8px rgba(61,200,120,.5);
  animation: glowPulse 4s ease-in-out infinite;
}
```

---

## 11. Iconographie et Symboles

### 11.1 Symboles texte UEE

| Symbole | Nom | Usage | Code Unicode |
|---------|-----|-------|-------------|
| `✦` | Étoile UEE | Logo app, accents premium | U+2726 |
| `◆` | Losange | Indicateur d'org, séparateurs inline | U+25C6 |
| `●` | Cercle plein | Dots de statut, bullets | U+25CF |
| `○` | Cercle vide | Statut hors-ligne | U+25CB |
| `▶` | Triangle | Indicateurs de section, chevrons | U+25B6 |
| `›` | Chevron fin | Navigation breadcrumb, terminaux | U+203A |
| `»` | Double chevron | Hiérarchie de navigation | U+00BB |
| `█` | Bloc plein | Curseur terminal clignotant | U+2588 |
| `▌` | Demi-bloc | Curseur alternatif | U+258C |
| `#` | Hash | Préfixe channel | U+0023 |
| `⬡` | Hexagone | Logo SC Companion | U+2B21 |
| `⬢` | Hexagone plein | Variante remplie | U+2B22 |
| `—` | Tiret long | Séparateur dans labels, données N/A | U+2014 |
| `·` | Point médian | Séparateur inline léger | U+00B7 |
| `×` | Croix | Indicateurs de quantité (2× Fighter) | U+00D7 |

### 11.2 Emojis autorisés (UI uniquement)

Utilisés **uniquement comme icônes fonctionnelles** dans la navigation et les titres de section. Jamais dans les messages d'erreur, les données critiques, ou le lore.

```
Navigation et sections :
  🪪  Profil / Identité citoyenne
  🛡  Organisation / Défense
  💬  Communications / Comms
  🗺  Opérations / Centre Ops
  🚀  Fleet / Vaisseaux
  ⬡   Dashboard / Accueil
  📢  Annonces
  👥  Membres / Roster
  📋  Logs / Historique

Contexte UEE :
  🔐  Sécurité / Cryptographie
  📡  Connexion / Signal
  ⚡  Statut actif / Urgence
```

### 11.3 La forme hexagonale — usage systématique

L'hexagone est la forme signature de Star Citizen (boucliers, cartes, composants de vaisseaux). SC Companion l'utilise pour :

```
1. Logo de l'application (topbar)
   → Hexagone 30×30 avec ✦ à l'intérieur

2. Avatars utilisateurs
   → clip-path hexagonal avec initiales
   → Couleur dérivée du handle

3. Éléments décoratifs de fond
   → SVG hexagonaux géants, opacity 0.03–0.05
   → Jamais plus opaques (envahissant)

4. Indicateurs de rang
   → Hexagone coloré selon le rôle
```

```css
/* Clip-path hexagonal */
.hex {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

/* Déco SVG de fond */
.hex-deco {
  position: absolute;
  width: 280px;
  height: 323px;  /* ratio hexagone régulier */
  opacity: 0.03;
  pointer-events: none;
}
```

---

## 12. Micro-interactions et Game Feel

### 12.1 Hover sur éléments interactifs

```css
/* ── Cards cliquables ── */
.interactive-card {
  transition: all var(--t-med);
  cursor: pointer;
}
.interactive-card:hover {
  background: var(--bg-3);
  border-color: var(--bdr-3);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);  /* Très subtil soulèvement */
}
.interactive-card:hover .card-title {
  color: var(--txt);  /* Texte s'éclaircit */
}

/* ── Navigation items ── */
.nav-item:hover .nav-icon {
  filter: brightness(1.3);
  transform: scale(1.05);
  transition: transform var(--t-fast), filter var(--t-fast);
}

/* ── Boutons — effet interne (shine) ── */
.btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,.08),
    transparent
  );
  transform: skewX(-15deg);
  transition: left 0.4s ease;
}
.btn:hover::before {
  left: 150%;
}

/* ── Liens et textes cliquables ── */
.text-link {
  color: var(--blue);
  text-decoration: none;
  transition: color var(--t-fast), text-shadow var(--t-fast);
}
.text-link:hover {
  color: var(--blue-light);
  text-shadow: 0 0 8px var(--blue-30);
}
```

### 12.2 Focus visible (accessibilité + style)

```css
/* Focus ring doré pour tous les éléments focusables */
*:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
}

/* Override pour inputs — le border et le glow remplacent l'outline */
.inp:focus-visible {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 1px var(--gold-10), inset 0 1px 4px rgba(0,0,0,.5);
}

/* Override pour boutons */
.btn:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px var(--gold-10);
}
```

### 12.3 Feedback de pression (active state)

```css
/* Tous les éléments cliquables ont un retour visuel immédiat */
.btn:active:not(:disabled),
.nav-item:active,
.card-hover:active {
  transform: scale(0.97);
  transition: transform 80ms ease;
}

/* Input lors de la frappe */
.inp:focus {
  /* Le border gold + glow = retour immédiat que l'input est actif */
}
```

### 12.4 Scroll avec style

```css
/* Scrollbar fine et discrète — toujours présente sur les zones scrollables */
.scrollable {
  overflow-y: auto;
  scrollbar-width: thin;  /* Firefox */
  scrollbar-color: var(--bdr-2) transparent;  /* Firefox */
}
.scrollable::-webkit-scrollbar {
  width: 4px;
}
.scrollable::-webkit-scrollbar-track {
  background: transparent;
}
.scrollable::-webkit-scrollbar-thumb {
  background: var(--bdr-2);
}
.scrollable::-webkit-scrollbar-thumb:hover {
  background: var(--gold-50);  /* Gold au hover sur la scrollbar */
}
```

### 12.5 Selection

```css
/* Sélection de texte avec couleur de marque */
::selection {
  background: rgba(197,168,78,.22);
  color: var(--txt);
}
::-moz-selection {
  background: rgba(197,168,78,.22);
  color: var(--txt);
}
```

---

## 13. États et Feedback Système

### 13.1 Statuts et couleurs associées

```
FLEET / ÉQUIPEMENT
  Disponible     → #3dc878  vert      Prêt à l'emploi, aucune réservation
  En service     → #c5a84e  or        Actuellement utilisé, mobilisé
  En réparation  → #e04055  rouge     Hors service, indisponible
  En transit     → #4a9fd4  bleu      Déplacement en cours
  Réservé        → #e07b2a  orange    Préaffecté à une opération

OPÉRATIONS
  Planifiée      → #c5a84e  or        Future, recrutement possible
  En cours       → #3dc878  vert      Active maintenant
  Succès         → #4a9fd4  bleu      Terminée positivement
  Annulée        → #3d4468  gris      Annulée, archivée
  Échec          → #e04055  rouge     Terminée négativement

UTILISATEURS
  En ligne       → #3dc878  vert      Signal établi
  Absent (AFK)   → #f5c842  jaune     Inactif temporairement
  Ne pas déranger→ #e07b2a  orange    Occupé, ne pas contacter
  Hors ligne     → #3d4468  gris      Déconnecté

VÉRIFICATION
  Vérifié        → #3dc878  vert      Double signature valide
  Pending        → #c5a84e  or        En attente de vérification
  Révoqué        → #e04055  rouge     Certificat invalide
```

### 13.2 Messages d'erreur

```css
/* Boîte d'erreur inline */
.error-box {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--red);
  font-size: 13px;
  padding: 10px 14px;
  background: var(--red-10);
  border: 1px solid rgba(224,64,85,.2);
  border-left: 2px solid var(--red);
  margin-bottom: 16px;
  line-height: 1.5;
}
.error-box::before { content: '⚠'; flex-shrink: 0; }

/* Erreur sur champ */
.field-error {
  font-size: 11px;
  color: var(--red);
  margin-top: 5px;
  line-height: 1.4;
}
.field-error::before { content: '⚠ '; }

/* Toast d'erreur (coin de l'écran) */
.toast-error {
  position: fixed;
  bottom: 24px; right: 24px;
  background: var(--bg-4);
  border: 1px solid rgba(224,64,85,.3);
  border-left: 3px solid var(--red);
  padding: 14px 18px;
  box-shadow: var(--shadow-lg);
  max-width: 360px;
  z-index: var(--z-toast);
  animation: slideInRight var(--t-slow) both;
}
```

### 13.3 États de chargement

```css
/* Spinner inline dans boutons ou composants */
.spinner {
  width: 16px; height: 16px;
  border: 2px solid var(--bdr-2);
  border-top-color: var(--gold);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}
.spinner-sm { width: 12px; height: 12px; border-width: 1.5px; }
.spinner-lg { width: 24px; height: 24px; border-width: 3px; }

/*
  RÈGLE : Un spinner ne s'affiche JAMAIS seul.
  Toujours accompagné d'un texte de statut :
  "Génération des clés RSA-2048…"
  "Connexion au registre UEE…"
  "Validation du contrat…"
*/

/* Skeleton loading pour les cards */
.card-skeleton {
  background: linear-gradient(
    90deg,
    var(--bg-2) 25%,
    var(--bg-3) 50%,
    var(--bg-2) 75%
  );
  background-size: 200% 100%;
  animation: skeleton 1.5s ease-in-out infinite;
}
```

### 13.4 Empty states

```css
/* Zone vide (pas de données) */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 48px 24px;
  color: var(--txt-3);
}
.empty-state-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.7;
}
.empty-state-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--txt);
  margin-bottom: 8px;
}
.empty-state-desc {
  font-size: 13px;
  color: var(--txt-2);
  line-height: 1.6;
  max-width: 320px;
  margin-bottom: 24px;
}
```

---

## 14. Responsive et Densité

### 14.1 Breakpoints

```css
/* SC Companion est pensé desktop-first (public de gamers) */
/* Mobile : accessibilité de base uniquement */

/* Desktop large */
@media (min-width: 1400px) {
  .page-content { padding: 48px 56px; }
}

/* Desktop standard */
@media (max-width: 1200px) {
  .grid-stats-4 { grid-template-columns: repeat(2, 1fr); }
}

/* Tablet */
@media (max-width: 900px) {
  .sidebar { width: var(--sidebar-w-collapsed); }
  .nav-item span { display: none; }
  .grid-cards-2 { grid-template-columns: 1fr; }
  .page-content { padding: 24px; }
}

/* Mobile */
@media (max-width: 600px) {
  .topbar { padding: 0 16px; }
  .page-content { padding: 16px; }
  .grid-cards-auto { grid-template-columns: 1fr; }
  .grid-stats-4 { grid-template-columns: repeat(2, 1fr); }
}
```

### 14.2 Mode haute densité (compact)

```css
/* Pour les utilisateurs qui veulent plus d'information */
.density-compact {
  --card-padding:    14px;
  --sp-field:        12px;  /* gap entre champs */
}
.density-compact .type-body { font-size: 13px; }
.density-compact .message   { padding: 6px 0; }
.density-compact .nav-item  { padding: 9px 20px; }
```

---

## 15. Accessibilité — Contrastes et Focus

### 15.1 Tableau des contrastes

| Élément | Couleur texte | Fond | Ratio | Standard |
|---------|--------------|------|-------|----------|
| Texte principal | `#e2e8ff` | `#08091a` | **13.2:1** | AAA ✅ |
| Texte secondaire | `#8a94bc` | `#08091a` | **5.1:1** | AA ✅ |
| Or sur fond | `#c5a84e` | `#08091a` | **6.8:1** | AA ✅ |
| Vert sur fond | `#3dc878` | `#08091a` | **8.2:1** | AAA ✅ |
| Bleu sur fond | `#4a9fd4` | `#08091a` | **5.4:1** | AA ✅ |
| Rouge sur fond | `#e04055` | `#08091a` | **5.0:1** | AA ✅ |
| Texte muted | `#3d4468` | `#08091a` | **2.4:1** | ❌ DÉCO SEULEMENT |
| Texte inv sur gold | `#05060e` | `#c5a84e` | **8.1:1** | AAA ✅ |

> ⚠️ `--txt-3` (`#3d4468`) **ne doit jamais porter d'information fonctionnelle**. Labels de navigation, valeurs de données, messages d'erreur — tout doit utiliser `--txt-2` minimum.

### 15.2 Tailles minimales cliquables

```
Zone interactive minimale : 34×34px (toucher)
Bouton de navigation      : 44px de hauteur recommandé
Checkbox/Radio            : 18×18px minimum
```

### 15.3 Réduction de mouvement

```css
/* Respecter la préférence utilisateur */
@media (prefers-reduced-motion: reduce) {
  .anim-fade-up,
  .anim-slide-in {
    animation: fadeIn 0.1s ease both !important;
    /* Pas de mouvement, mais apparition préservée */
  }

  .holo-strip,
  .card-holographic::after,
  .scanline-host::after {
    animation: none !important;
  }

  .btn,
  .nav-item,
  .interactive-card {
    transition-duration: 50ms !important;
  }
}
```

---

## 16. Vocabulaire et Tone of Voice UEE

### 16.1 Le registre de l'interface

L'interface parle **comme un système informatique du 30ème siècle**. Pas chaleureux, pas familier — **formel, technique, précis**.

```
✅ Ton CORRECT
  "Authentification en cours..."
  "Génération des clés RSA-2048"
  "Accéder au terminal"
  "Créer un compte citoyen"
  "Registre fleet"
  "Opération certifiée"
  "Anomalie détectée"

❌ Ton INCORRECT
  "Bienvenue ! 🎉"
  "Oups, quelque chose a mal tourné"
  "C'est parti !"
  "Super, votre compte est créé"
  "Hé, vous avez des messages"
```

### 16.2 Lexique des labels UI

| Terme générique | Label UEE |
|-----------------|-----------|
| Compte / Profil | Dossier citoyen |
| Se connecter | Accéder au terminal |
| S'inscrire | Enregistrement citoyen |
| Déconnexion | Terminer la session |
| Identifiant | Handle RSI |
| Mot de passe | Clé d'authentification |
| Chargement | Initialisation système |
| Erreur | Anomalie détectée |
| Succès | Opération certifiée |
| Membres | Roster de l'escadron |
| Message | Transmission sécurisée |
| Canal | Fréquence |
| Fondateur | Commandant |
| Admin | Officier supérieur |
| Mission | Opération |
| Date/Heure | Stanton Time (ST) |
| Profil d'org | Registre d'organisation |
| Rejoindre | Intégrer l'escadron |
| Quitter | Se détacher de l'organisation |
| Supprimer | Révoquer |

### 16.3 Formatage des données

```
Citizen ID     : UEE-XXXX-XXXX
               → Uppercase, 4 chiffres hexadécimaux × 2 groupes

Fingerprint    : ABCD:1234:EF56:7890
               → 4 groupes de 4 chars séparés par ':'
               → Or pour UEE, bleu pour citoyen

Callsign fleet : NOVA-01, NOVA-12
               → Tag org en uppercase + numéro 2 chiffres

Dates in-game  : 2954.04.20 / 21:00 ST
               → Année réelle + 928 (ex: 2024 → 2952)

Signatures     : Base64 tronquée à ~60 chars + "…"
               → Jamais afficher la signature complète (illisible)

Coordonnées    : SRX 4.2.1 / OM-1 / CALV-II
               → Système / Objet / Destination

Noms d'ops     : RAIDER-7, DEEPDIVE-3, VORTEX-1
               → Nom alpha uppercase + numéro séquentiel
```

### 16.4 Messages système de la boot sequence

```
Ligne 1 : "UNITED EMPIRE OF EARTH — SECURE TERMINAL v2.0"
Ligne 2 : "Initializing cryptographic subsystem..."
Ligne 3 : "Generating RSA-2048 authority keypair..."
Ligne 4 : "Establishing secure handshake with UEE registry..."
Ligne 5 : "Loading citizen authentication modules..."
Ligne 6 : "Verifying identity protocols..."
Ligne 7 : "All systems nominal."
Ligne 8 : "SC COMPANION READY."
```

### 16.5 États de connexion — textes

```
En cours     : "Authentification en cours…"
Crypto       : "Génération des clés RSA-2048…"
Signature    : "Certification UEE en cours…"
Rejoindre    : "Intégration au registre de l'escadron…"
Créer org    : "Initialisation du registre d'organisation…"
Sauvegarder  : "Transmission sécurisée en cours…"
Chargement   : "Chargement du registre citoyen…"
```

---

## 17. Anti-patterns — Ce qu'il est INTERDIT de faire

### 17.1 Couleurs et visuels

```
❌ Fond plat noir #000000 ou blanc #ffffff
❌ Dégradé violet/rose "AI générique" (#667eea → #764ba2)
❌ Couleurs pastels, claires, douces
❌ Background sans texture ni grille
❌ L'or partout (dilue son autorité)
❌ Ombres "Material Design" douces (box-shadow 0 4px 6px rgba(0,0,0,.07))
❌ Gradient bleu-violet sur texte
❌ Images sans overlay d'assombrissement
❌ Blanc pur #ffffff pour le texte
❌ Plus de 3 accents couleur différents dans la même vue
```

### 17.2 Typographie

```
❌ Border-radius > 4px sur les inputs/boutons/cards
   (10px autorisé UNIQUEMENT sur les tags)
❌ Eyebrows en minuscules ou sans letter-spacing
❌ Texte trop petit < 11px fonctionnel
❌ Font-weight < 600 sur les titres
❌ Italique dans l'UI (seulement lore/citation)
❌ Mélanger monospace et sans-serif sur la même ligne de données
❌ Uppercase sur le corps de texte
❌ Arial ou Roboto en premier choix (trop générique)
❌ letter-spacing: 0 sur du texte uppercase
❌ Texte blanc pur #ffffff (utiliser #e2e8ff)
```

### 17.3 Composants

```
❌ Border-radius prononcé sur cards (> 4px)
❌ Box-shadow doux Material Design
❌ Boutons sans uppercase
❌ Inputs avec fond blanc ou gris clair
❌ Tags sans border
❌ Cards sans aucune bordure ou accent
❌ Navigation sans état actif visible
❌ Loading sans texte de statut
❌ Formulaires sans labels eyebrow
❌ Sections sans eyebrow ni titre
```

### 17.4 Animations

```
❌ Bounce/spring sur interfaces militaires
❌ Rotation continue de logos
❌ Animations > 500ms sur interactions directes
❌ Plus de 3 animations actives visibles simultanément
❌ Confettis, particules flottantes, effets "fun"
❌ Animations bloquantes (attendre onAnimationEnd)
❌ Cursor spinner sur des actions < 200ms
❌ Transform scale > 1.02 sur des cards
❌ Transitions instantanées (0ms) — toujours au moins 80ms
```

### 17.5 Contenu et ton

```
❌ Messages d'erreur avec emojis
❌ Texte chaleureux ou informel dans l'UI
❌ Années réelles dans les dates UEE
❌ Données techniques en police non-monospace
❌ Labels de navigation sans icône
❌ Sections sans contexte UEE dans les eyebrows
❌ Boutons avec texte en minuscules
❌ "Mot de passe" au lieu de "Clé d'authentification"
```

---

## 18. Checklist de validation

Avant de pousser un composant ou un écran en review :

### Couleurs

```
[ ] Toutes les valeurs utilisent des tokens CSS (aucune valeur hardcodée)
[ ] L'or est utilisé max 2–3 fois par vue (bordure top card + texte CID + bouton CTA)
[ ] Contraste texte principal ≥ AA (5:1 minimum)
[ ] txt-3 (#3d4468) utilisé uniquement pour éléments décoratifs
[ ] Aucune couleur hors palette autorisée
[ ] Aucun fond clair (toujours bg-1 ou plus sombre)
```

### Typographie

```
[ ] Chaque section a un eyebrow uppercase letter-spacing 0.20em
[ ] Aucun texte fonctionnel < 11px
[ ] Titres en font-weight 700 ou 900
[ ] Données techniques (IDs, fingerprints) en font monospace
[ ] Boutons en uppercase lettre-spacing 0.10em
[ ] Tags en uppercase letter-spacing 0.12em
```

### Fond et textures

```
[ ] Page background non vide (grille + éventuellement glow)
[ ] Scanline actif sur le shell global
[ ] Strip holographique présent sur la carte d'identité
[ ] Aucun background-color: white ou #000 plat
```

### Composants

```
[ ] border-radius: 0 sur inputs, boutons, cards (sauf tags = 10px)
[ ] Tous les éléments interactifs ont un hover visible
[ ] Focus-visible sur tous les éléments cliquables
[ ] Loading states avec texte de statut (jamais spinner seul)
[ ] Empty states définis pour toutes les listes
[ ] Scrollbar stylée (thin, color: bdr-2)
```

### Animations

```
[ ] fadeUp sur le contenu au montage de chaque page
[ ] holoFlow actif sur le strip holographique
[ ] pulse sur les dots de statut en ligne
[ ] Aucune animation > 500ms sur interaction directe
[ ] prefers-reduced-motion respecté
```

### Vocabulaire

```
[ ] Dates en format UEE (année +928)
[ ] Labels en vocabulaire UEE (pas de termes génériques)
[ ] Messages de chargement avec contexte UEE
[ ] Données formatées : IDs, fingerprints, callsigns
```

### Accessibilité

```
[ ] Zone cliquable minimum 34×34px
[ ] Contraste texte ≥ AA sur fond de destination
[ ] Focus ring visible (outline 2px gold)
[ ] Textes alternatifs sur images significatives
```

---

*Document vivant — mettre à jour à chaque évolution du design system.*  
*Référence externe : robertsspaceindustries.com*  
*Version : 3.0 | SC Companion | 2954 ST*