# NEXUS PORTAL — Design Guidelines
> Référentiel visuel & UX complet pour l'intégration de Nexus Portal dans l'univers Star Citizen / RSI

---

## Table des matières

1. [Philosophie & Identité Visuelle](#1-philosophie--identité-visuelle)
2. [Palette de Couleurs](#2-palette-de-couleurs)
3. [Typographie](#3-typographie)
4. [Iconographie & Logo](#4-iconographie--logo)
5. [Mise en Page & Grille](#5-mise-en-page--grille)
6. [Composants UI — Web](#6-composants-ui--web)
7. [Composants UI — In-Game (mobiGlas / Terminaux)](#7-composants-ui--in-game-mobiglas--terminaux)
8. [Effets Visuels & Animations](#8-effets-visuels--animations)
9. [Imagerie & Médias](#9-imagerie--médias)
10. [Ton, Voix & Microcopy](#10-ton-voix--microcopy)
11. [Accessibilité](#11-accessibilité)
12. [Règles à Ne Jamais Enfreindre](#12-règles-à-ne-jamais-enfreindre)

---

## 1. Philosophie & Identité Visuelle

### Concept central

Nexus Portal doit être perçu comme un **vrai outil interne de la corporation RSI**, pas comme une interface de jeu externe. L'utilisateur doit avoir l'impression d'utiliser un terminal Nexus Horizon authentique, dans la continuité directe du site `robertsspaceindustries.com`.

### Principes directeurs

| Principe | Description |
|----------|-------------|
| **Diegetic First** | L'interface existe dans l'univers. Chaque élément doit justifier sa présence logiquement dans le lore (Corp RSI, Nexus Horizon, 2950+). |
| **Dark & Premium** | Fond sombre, contrastes maîtrisés, accents dorés/cyan. Évocation d'un terminal de vaisseau capital ou d'une station spatiale haut de gamme. |
| **Informational Density** | Beaucoup d'information sans surcharge. RSI utilise des espaces bien définis, des grilles serrées mais respirantes. |
| **Techno-Corporate** | Mélange entre UI militaire (lignes précises, angles, codes couleur) et branding corporate (élégance, or, serif sur les titres de section). |
| **Cohérence stricte** | Chaque page, chaque modal, chaque état d'un bouton suit le même système. Zéro improvisation visuelle. |

### Références primaires

- Site officiel RSI (`robertsspaceindustries.com`) — Version 2023-2025
- Interface mobiGlas in-game (Star Citizen 3.x+)
- Terminaux in-game (stations, prisons, hôpitaux)
- Fankit officiel RSI

---

## 2. Palette de Couleurs

### Couleurs primaires

```css
/* === BACKGROUNDS === */
--color-bg-void:        #08090a;   /* Fond absolu, espace profond */
--color-bg-primary:     #0d1117;   /* Fond de page principal */
--color-bg-secondary:   #111820;   /* Cards, panels, sidebar */
--color-bg-elevated:    #1a2232;   /* Modals, dropdowns, tooltips */
--color-bg-surface:     #1f2d3d;   /* Inputs actifs, hover de panels */

/* === ACCENTS DORÉS (signature RSI) === */
--color-gold-primary:   #c9a84c;   /* Or principal, CTAs, titres de section */
--color-gold-bright:    #e8c56d;   /* Or hover, focus, highlights */
--color-gold-muted:     #8a6f35;   /* Or secondaire, borders subtiles */
--color-gold-dark:      #4d3d1a;   /* Fond de badges gold, séparateurs */

/* === ACCENTS CYAN/BLEU (mobiGlas, tech) === */
--color-cyan-primary:   #35b6ec;   /* Liens, icônes tech, data active */
--color-cyan-bright:    #5fd3ff;   /* Hover sur éléments cyan, glows */
--color-cyan-dark:      #1c4d6e;   /* Fond de tags tech, bg info */
--color-blue-nav:       #1e3a5f;   /* Navigation hover states */

/* === TEXTE === */
--color-text-primary:   #e8eaed;   /* Corps de texte principal */
--color-text-secondary: #9ba8b4;   /* Texte secondaire, metadata */
--color-text-muted:     #5a6a7a;   /* Placeholders, disabled, captions */
--color-text-heading:   #c9a84c;   /* Titres majeurs en or */
--color-text-inverse:   #0d1117;   /* Texte sur fonds clairs (rare) */

/* === STATUTS === */
--color-status-online:  #4caf82;   /* En ligne, succès, validé */
--color-status-warning: #f5a623;   /* Attention, en attente */
--color-status-error:   #e05252;   /* Erreur, danger, interdit */
--color-status-info:    #35b6ec;   /* Information, neutre */
--color-status-offline: #4a5568;   /* Hors ligne, inactif */

/* === BORDERS & DIVIDERS === */
--color-border-subtle:  #1e2d3d;   /* Séparateurs très discrets */
--color-border-default: #2a3d52;   /* Borders standards */
--color-border-strong:  #3d5a73;   /* Borders actives, focus rings */
--color-border-gold:    #c9a84c;   /* Borders accent (utilisé avec parcimonie) */
```

### Dégradés de marque

```css
/* Dégradé hero — utilisé sur les banners et splash screens */
--gradient-hero: linear-gradient(
  180deg,
  #08090a 0%,
  #0d1117 40%,
  #0a1520 100%
);

/* Dégradé gold — accents, boutons CTA principaux */
--gradient-gold: linear-gradient(
  135deg,
  #c9a84c 0%,
  #e8c56d 50%,
  #a07830 100%
);

/* Dégradé vignette — overlay sur les images hero */
--gradient-vignette: linear-gradient(
  to bottom,
  transparent 0%,
  rgba(8, 9, 10, 0.7) 60%,
  #08090a 100%
);

/* Dégradé sidebar */
--gradient-sidebar: linear-gradient(
  90deg,
  #0d1117 0%,
  #111820 100%
);
```

### Utilisation des couleurs — règles strictes

- **Or** : réservé aux titres principaux, CTAs primaires, décorations structurantes. Maximum 15% de surface visible.
- **Cyan** : réservé aux données "live", liens actifs, éléments interactifs secondaires. Ne jamais mélanger avec l'or sur le même composant actif.
- **Blanc pur `#ffffff`** : **INTERDIT**. Utiliser `--color-text-primary` (`#e8eaed`) au maximum.
- **Fond blanc** : **INTERDIT**. Nexus Portal est exclusivement dark.
- **Couleurs statut** : utilisation strictement sémantique, jamais décorative.

---

## 3. Typographie

### Stack typographique

```css
/* Titres & Branding — Identité RSI */
--font-display:   'Orbitron', 'Eurostile', sans-serif;

/* Corps de texte — Lisibilité */
--font-body:      'Exo 2', 'Titillium Web', sans-serif;

/* Interface & Labels — Compacité */
--font-ui:        'Share Tech Mono', 'Courier New', monospace;

/* Code & Données techniques */
--font-mono:      'Share Tech Mono', 'IBM Plex Mono', monospace;
```

**Import Google Fonts recommandé :**
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Exo+2:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
```

### Échelle typographique

| Token | Taille | Famille | Poids | Usage |
|-------|--------|---------|-------|-------|
| `--text-hero` | 56px / 3.5rem | Orbitron | 700 | Titres hero, splash |
| `--text-h1` | 36px / 2.25rem | Orbitron | 700 | Titres de page |
| `--text-h2` | 28px / 1.75rem | Orbitron | 500 | Sections majeures |
| `--text-h3` | 22px / 1.375rem | Exo 2 | 600 | Sous-sections |
| `--text-h4` | 18px / 1.125rem | Exo 2 | 600 | Cards, panels |
| `--text-body-lg` | 16px / 1rem | Exo 2 | 400 | Corps standard |
| `--text-body` | 14px / 0.875rem | Exo 2 | 400 | Corps compact |
| `--text-small` | 12px / 0.75rem | Exo 2 | 400 | Captions, metadata |
| `--text-label` | 11px / 0.6875rem | Share Tech Mono | 400 | Labels UI, badges |
| `--text-code` | 13px / 0.8125rem | Share Tech Mono | 400 | Code, données |

### Règles typographiques

- **Orbitron** : exclusivement pour les titres et le branding. Jamais en dessous de 16px. **UPPERCASE uniquement** pour `--text-h1` et supérieur.
- **Letter-spacing** : `0.08em` sur Orbitron uppercase, `0.04em` sur labels Share Tech Mono.
- **Line-height** : `1.6` pour le corps de texte, `1.2` pour les titres.
- **Orbitron en corps de texte** : INTERDIT. Illisible et non-canonique RSI.
- **Italique** : uniquement pour les citations lore ou le flavor text in-universe.

```css
/* Styles de base */
h1, .heading-major {
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-heading);
}

.body-text {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-primary);
}

.label-tech {
  font-family: var(--font-mono);
  font-size: var(--text-label);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}
```

---

## 4. Iconographie & Logo

### Logo Nexus Portal

Le logo doit suivre l'esthétique corporate RSI :
- **Forme** : géométrique, symétrique, évoquant une connexion réseau ou un nexus stellaire.
- **Couleurs** : or `#c9a84c` sur fond sombre, ou blanc `#e8eaed` version monochrome.
- **Zone de protection** : espace équivalent à 1× la hauteur du logo de chaque côté.
- **Taille minimale** : 24px de hauteur en UI, 120px en branding.
- **À ne jamais faire** : déformer, ajouter des ombres portées, changer la couleur, utiliser sur fond clair.

### Système d'icônes

- **Source principale** : icônes linéaires, stroke de 1.5px, style géométrique.
- **Bibliothèque recommandée** : Phosphor Icons (thin/light) ou icônes custom SVG style RSI.
- **Taille standard** : 16px, 20px, 24px (grille de 4px).
- **Couleur par défaut** : `var(--color-text-secondary)`.
- **Couleur active/hover** : `var(--color-gold-primary)` ou `var(--color-cyan-primary)` selon contexte.
- **Pas d'icônes remplies (filled)** : le style RSI est exclusivement outline/linéaire.

### Éléments décoratifs structurants

RSI utilise des **micro-ornements géométriques** caractéristiques :

```css
/* Coin décoratif RSI — angle en "bracket" */
.rsi-corner::before,
.rsi-corner::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: var(--color-gold-primary);
  border-style: solid;
}
.rsi-corner::before {
  top: 0; left: 0;
  border-width: 1px 0 0 1px;
}
.rsi-corner::after {
  bottom: 0; right: 0;
  border-width: 0 1px 1px 0;
}

/* Séparateur avec ornement central */
.rsi-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-gold-muted);
}
.rsi-divider::before,
.rsi-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-gold-muted));
}
.rsi-divider::after {
  background: linear-gradient(90deg, var(--color-gold-muted), transparent);
}
```

---

## 5. Mise en Page & Grille

### Grille principale

```css
/* Conteneur principal */
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Grille 12 colonnes */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

/* Breakpoints */
--bp-mobile:   480px;
--bp-tablet:   768px;
--bp-desktop:  1024px;
--bp-wide:     1280px;
--bp-max:      1440px;
```

### Structure de page standard (Web)

```
┌─────────────────────────────────────────────────────┐
│  TOPBAR (40px) — status, compte, connexion           │
├─────────────────────────────────────────────────────┤
│  NAVBAR PRINCIPALE (64px) — logo, navigation, search │
├─────────────────────────────────────────────────────┤
│  HERO / BANNER (variable, min 360px)                 │
├───────────────┬─────────────────────────────────────┤
│  SIDEBAR      │  CONTENU PRINCIPAL                   │
│  (280px fixe) │  (flexible)                          │
│               │                                      │
│               │                                      │
├───────────────┴─────────────────────────────────────┤
│  FOOTER (variable)                                   │
└─────────────────────────────────────────────────────┘
```

### Espacements (système en multiples de 4px)

```css
--space-1:   4px;
--space-2:   8px;
--space-3:   12px;
--space-4:   16px;
--space-5:   20px;
--space-6:   24px;
--space-8:   32px;
--space-10:  40px;
--space-12:  48px;
--space-16:  64px;
--space-20:  80px;
--space-24:  96px;
```

### Rayons de bordure

```css
--radius-none:  0px;     /* Éléments brutaux, terminaux */
--radius-sm:    2px;     /* Badges, tags, petits éléments */
--radius-md:    4px;     /* Boutons, inputs, cards compactes */
--radius-lg:    8px;     /* Panels, modals */
--radius-xl:    12px;    /* Cards larges, hero components */
```

> **Note RSI** : Le site RSI privilégie les angles droits ou quasi-droits (0-4px). Les grands rayons (`> 8px`) sont rares et réservés aux éléments non-techniques.

---

## 6. Composants UI — Web

### Boutons

```css
/* CTA Principal — Doré */
.btn-primary {
  background: var(--gradient-gold);
  color: var(--color-text-inverse);
  font-family: var(--font-ui);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 12px 28px;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}
.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Bouton secondaire — Outline doré */
.btn-secondary {
  background: transparent;
  color: var(--color-gold-primary);
  border: 1px solid var(--color-gold-primary);
  font-family: var(--font-ui);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 11px 28px;
  border-radius: var(--radius-md);
  transition: background 0.2s, color 0.2s;
}
.btn-secondary:hover {
  background: var(--color-gold-dark);
  color: var(--color-gold-bright);
}

/* Bouton ghost — Tech/Cyan */
.btn-ghost {
  background: transparent;
  color: var(--color-cyan-primary);
  border: 1px solid var(--color-cyan-dark);
  font-family: var(--font-ui);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 8px 20px;
  border-radius: var(--radius-sm);
}
.btn-ghost:hover {
  border-color: var(--color-cyan-primary);
  background: rgba(53, 182, 236, 0.08);
}
```

### Cards & Panels

```css
.card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  position: relative;
  overflow: hidden;
}

/* Accent lateral — Signature RSI */
.card--accent-gold::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px;
  height: 100%;
  background: var(--gradient-gold);
}

/* Card hover state */
.card:hover {
  border-color: var(--color-border-strong);
  background: var(--color-bg-elevated);
  box-shadow: 0 4px 24px rgba(201, 168, 76, 0.08);
}
```

### Navigation principale

```css
.navbar {
  height: 64px;
  background: rgba(13, 17, 23, 0.95);
  border-bottom: 1px solid var(--color-border-subtle);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  padding: 0 var(--space-10);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar__link {
  font-family: var(--font-ui);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: 8px 16px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--color-gold-primary);
  border-bottom-color: var(--color-gold-primary);
}
```

### Inputs & Formulaires

```css
.input {
  background: var(--color-bg-void);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-size: 14px;
  padding: 10px 14px;
  width: 100%;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input::placeholder {
  color: var(--color-text-muted);
  font-style: italic;
}

.input:focus {
  outline: none;
  border-color: var(--color-gold-muted);
  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);
}

/* Label style RSI */
.label {
  font-family: var(--font-ui);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
  display: block;
}
```

### Tableaux de données

```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body);
  font-size: 14px;
}

.data-table thead tr {
  border-bottom: 2px solid var(--color-gold-dark);
}

.data-table th {
  font-family: var(--font-ui);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-gold-muted);
  padding: 10px 16px;
  text-align: left;
  font-weight: 400;
}

.data-table td {
  padding: 12px 16px;
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-border-subtle);
}

.data-table tbody tr:hover {
  background: rgba(201, 168, 76, 0.04);
}
```

### Badges & Tags

```css
/* Badge statut */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-ui);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
}

.badge--online  { background: rgba(76, 175, 130, 0.15); color: #4caf82; border: 1px solid rgba(76, 175, 130, 0.3); }
.badge--warning { background: rgba(245, 166, 35, 0.15); color: #f5a623; border: 1px solid rgba(245, 166, 35, 0.3); }
.badge--error   { background: rgba(224, 82, 82, 0.15);  color: #e05252; border: 1px solid rgba(224, 82, 82, 0.3); }
.badge--info    { background: rgba(53, 182, 236, 0.15); color: #35b6ec; border: 1px solid rgba(53, 182, 236, 0.3); }
```

---

## 7. Composants UI — In-Game (mobiGlas / Terminaux)

L'interface in-game de Nexus Portal doit imiter les terminaux Nexus Horizon et le mobiGlas de Star Citizen.

### Principes mobiGlas

- **Fond semi-transparent** : `rgba(10, 18, 30, 0.88)` avec `backdrop-filter: blur(16px)`.
- **Couleur dominante** : Bleu-cyan `#35b6ec` pour les éléments principaux.
- **Accent secondaire** : Or `#c9a84c` pour les éléments d'identité RSI.
- **Formes géométriques** : Lignes droites, angles à 45°, hexagones, pas de rondeur excessive.
- **Pixel-perfect** : Pas d'anti-aliasing artistique excessif. Les bordures sont à 1px précis.
- **Lueur (glow)** : Effets de glow subtils sur les éléments actifs (halo cyan ou or).

### Terminaux in-universe

```css
/* Style terminal Nexus Horizon */
.terminal {
  background: rgba(8, 14, 22, 0.92);
  border: 1px solid var(--color-cyan-dark);
  font-family: var(--font-mono);
  color: var(--color-cyan-primary);
  padding: var(--space-6);
  position: relative;
}

/* Scanlines — effet moniteur CRT subtil */
.terminal::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
  pointer-events: none;
}

/* Header de terminal */
.terminal__header {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-cyan-dark);
  border-bottom: 1px solid var(--color-cyan-dark);
  padding-bottom: var(--space-2);
  margin-bottom: var(--space-4);
}

/* Cursor clignotant */
.terminal__cursor::after {
  content: '█';
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
```

### Jauge & Indicateurs de données

```css
/* Barre de progression style HUD */
.hud-bar {
  height: 4px;
  background: var(--color-border-subtle);
  border-radius: 0;
  overflow: hidden;
  position: relative;
}

.hud-bar__fill {
  height: 100%;
  background: var(--gradient-gold);
  transition: width 0.4s ease;
  position: relative;
}

/* Glow sur la barre active */
.hud-bar__fill::after {
  content: '';
  position: absolute;
  right: 0; top: -2px;
  width: 4px; height: 8px;
  background: var(--color-gold-bright);
  box-shadow: 0 0 8px 2px var(--color-gold-bright);
}
```

### Hologrammes & Overlays

```css
/* Overlay holographique — pour features premium/lore */
.holo-overlay {
  position: relative;
}

.holo-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(53, 182, 236, 0.04) 0%,
    transparent 50%,
    rgba(201, 168, 76, 0.03) 100%
  );
  pointer-events: none;
}
```

---

## 8. Effets Visuels & Animations

### Timings & Easing

```css
/* Transitions standards */
--duration-fast:    100ms;
--duration-normal:  200ms;
--duration-slow:    400ms;
--duration-reveal:  600ms;

/* Easing */
--ease-standard:    cubic-bezier(0.4, 0, 0.2, 1);
--ease-in:          cubic-bezier(0.4, 0, 1, 1);
--ease-out:         cubic-bezier(0, 0, 0.2, 1);
--ease-snappy:      cubic-bezier(0.2, 0, 0, 1);
```

### Animations caractéristiques RSI

```css
/* Apparition de contenu — scan de haut en bas */
@keyframes rsi-reveal {
  from {
    opacity: 0;
    clip-path: inset(0 0 100% 0);
  }
  to {
    opacity: 1;
    clip-path: inset(0 0 0% 0);
  }
}

/* Glitch subtil — erreurs / alertes */
@keyframes rsi-glitch {
  0%  { transform: translate(0); }
  20% { transform: translate(-2px, 1px); }
  40% { transform: translate(2px, -1px); }
  60% { transform: translate(-1px, 2px); }
  80% { transform: translate(1px, -2px); }
  100%{ transform: translate(0); }
}

/* Pulse — éléments live/actifs */
@keyframes rsi-pulse {
  0%, 100% { box-shadow: 0 0 4px var(--color-cyan-primary); }
  50%       { box-shadow: 0 0 12px var(--color-cyan-bright), 0 0 24px rgba(53, 182, 236, 0.3); }
}

/* Loading — spinner RSI */
@keyframes rsi-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.rsi-loader {
  width: 32px; height: 32px;
  border: 2px solid var(--color-border-default);
  border-top-color: var(--color-gold-primary);
  border-radius: 50%;
  animation: rsi-spin 0.8s var(--ease-standard) infinite;
}
```

### Ombres & Lueurs

```css
/* Ombres contextuelles */
--shadow-card:    0 2px 12px rgba(0, 0, 0, 0.4);
--shadow-modal:   0 8px 48px rgba(0, 0, 0, 0.7);
--shadow-tooltip: 0 4px 16px rgba(0, 0, 0, 0.6);

/* Lueurs de marque */
--glow-gold:   0 0 16px rgba(201, 168, 76, 0.3), 0 0 4px rgba(201, 168, 76, 0.6);
--glow-cyan:   0 0 16px rgba(53, 182, 236, 0.3), 0 0 4px rgba(53, 182, 236, 0.6);
--glow-error:  0 0 12px rgba(224, 82, 82, 0.4);
```

### Règles d'animation

- **Pas d'animations superflues** : chaque animation doit avoir un sens informatif (chargement, transition d'état, feedback).
- **Respecter `prefers-reduced-motion`** : toutes les animations doivent avoir un fallback instantané.
- **Durée max de transition UI** : 400ms. Au-delà, c'est de l'animation narrative (cinématique, intro).
- **Les glitch effects** : uniquement sur les états d'erreur ou les éléments "damaged" in-universe. Jamais comme décoration.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Imagerie & Médias

### Types d'images autorisés

| Type | Usage | Format | Taille max |
|------|-------|--------|-----------|
| **Hero/Banner** | Fonds de sections, splash | WebP/AVIF | 2560×960px |
| **Ship renders** | Présentations, cartes vaisseaux | WebP | 1280×720px |
| **Portraits** | Personnages, avatars utilisateur | WebP | 400×400px |
| **Thumbnails** | Cards, listes | WebP | 640×360px |
| **Logos/Icônes** | Corps de texte, navigation | SVG | — |

### Traitement des images

- **Tone mapping** : les images doivent être sombres, avec des tons froids (désaturation légère). Elles ne doivent jamais sembler "lumineuses" ou "joyeuses".
- **Overlay systématique** : toute image hero reçoit le `--gradient-vignette` en overlay pour préserver la lisibilité du texte.
- **Pas de photos réelles** (personnes, lieux terrestres) : exclusivement des rendus 3D, illustrations, ou captures in-game.
- **Ratio d'aspect** : 16:9 pour les heroes, 4:3 pour les thumbnails, 1:1 pour les avatars.

### Vidéo

- **Format** : WebM (VP9) prioritaire, MP4 (H.264) fallback.
- **Autoplay** : autorisé uniquement si `muted`, `loop`, `playsinline`.
- **Contrôles** : style custom RSI uniquement. Pas de contrôles navigateur natifs.
- **Chargement** : `loading="lazy"` sur toutes les images non-critiques.

---

## 10. Ton, Voix & Microcopy

### Voix éditoriale

Nexus Portal parle comme **une corporation de pointe du 30ème siècle** — pas comme une startup Silicon Valley. Les textes sont :

- **Formels sans être rigides** : précis, techniques, avec une touche d'ambition corporate.
- **In-universe** : les dates sont en format Nexus Horizon (`2951-03-14`), les unités en aUEC, les lieux sont des systèmes stellaires.
- **Économes** : RSI n'utilise pas de mots inutiles. Chaque label est court et précis.

### Formulations caractéristiques

| Contexte | ❌ Éviter | ✅ Préférer |
|----------|-----------|-------------|
| CTA achat | "Acheter maintenant" | "Acquérir" / "Pledge" |
| Connexion | "Se connecter" | "Accéder au portail" / "AUTH_INIT" |
| Erreur | "Une erreur s'est produite" | "CONNEXION INTERROMPUE — Code E-4421" |
| Chargement | "Chargement..." | "SYNCHRONISATION EN COURS" |
| Succès | "Succès !" | "OPÉRATION VALIDÉE" |
| Navigation | "Retour" | "← RETOUR AU TABLEAU DE BORD" |
| Vide | "Aucun résultat" | "AUCUNE DONNÉE DÉTECTÉE DANS CE SECTEUR" |

### Numéros de version & Références techniques

- Toujours styliser les IDs comme des codes techniques : `NXP-7742`, `AUTH_TOKEN_44B2`, `BUILD_3.21.0`.
- Les erreurs ont des codes : `ERR_4421`, `STATUS_OFFLINE`, `SYNC_FAILED`.
- Les dates utilisent le format ISO : `2951-11-30T08:42:00Z` pour les données techniques, `30 NOV 2951` pour l'affichage humain.

---

## 11. Accessibilité

### Contrastes minimaux

| Combinaison | Ratio | Conforme |
|-------------|-------|---------|
| `#e8eaed` sur `#0d1117` | ~14:1 | ✅ AAA |
| `#c9a84c` sur `#0d1117` | ~7.2:1 | ✅ AA |
| `#9ba8b4` sur `#0d1117` | ~5.8:1 | ✅ AA |
| `#5a6a7a` sur `#0d1117` | ~2.9:1 | ⚠️ UI only |
| `#35b6ec` sur `#0d1117` | ~6.1:1 | ✅ AA |

> Le ratio AA minimum pour le texte de corps est 4.5:1. Pour les éléments UI uniquement (icônes, bordures), 3:1 est acceptable.

### Focus & Navigation clavier

```css
/* Focus ring RSI */
:focus-visible {
  outline: 2px solid var(--color-gold-primary);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}

/* Jamais supprimer le focus outline sans alternative */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Sémantique HTML

- Utiliser les éléments HTML sémantiques corrects : `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`.
- Tous les éléments interactifs sont focusables (tabindex approprié).
- Les images décoratives ont `alt=""`. Les images informatives ont un `alt` descriptif.
- Les états dynamiques utilisent `aria-live`, `aria-expanded`, `aria-selected`.

---

## 12. Règles à Ne Jamais Enfreindre

Ces règles sont non-négociables pour maintenir la cohérence avec l'identité RSI.

### Design

1. **JAMAIS de fond blanc ou clair** — Nexus Portal est exclusivement dark.
2. **JAMAIS d'Orbitron en corps de texte** — illisible, non-canonique.
3. **JAMAIS de coins très arrondis** (`border-radius > 12px`) — sauf cas exceptionnel documenté.
4. **JAMAIS de couleurs vives/saturées non définies** dans la palette (pas de rouge vif `#ff0000`, pas de vert lime, etc.).
5. **JAMAIS de dégradé arc-en-ciel** ou multi-couleurs non définis.
6. **JAMAIS de fond blanc sur les images** — les images sans fond utilisent un fond transparent sur dark.
7. **L'or s'utilise avec parcimonie** — surcharger l'or dilue l'identité premium.

### Typographie

8. **JAMAIS de moins de 11px** pour du texte visible.
9. **JAMAIS de texte centré sur de longs paragraphes** — centrage uniquement pour les éléments courts (titres, CTAs, badges).
10. **JAMAIS de mélange Arial/Helvetica** dans l'UI principale — respecter la stack définie.

### UX & Interactivité

11. **JAMAIS de modale sans fond d'overlay** (`rgba(0,0,0,0.7)` minimum).
12. **JAMAIS de transition > 400ms** pour des interactions UI courantes.
13. **JAMAIS d'animation en boucle infinie** sur du contenu informatif (uniquement sur les loaders et les indicateurs live).
14. **JAMAIS d'état hover sans feedback visuel** — chaque élément interactif a un état hover défini.

### Ton & Contenu

15. **JAMAIS d'emojis** dans l'interface principale — le design RSI est sérieux et in-universe.
16. **JAMAIS de langage familier** dans les labels et les messages système.
17. **JAMAIS de références hors-univers** (logos, marques, références culturelles réelles) dans les textes in-universe.

---

## Annexe — Variables CSS complètes

```css
:root {
  /* Couleurs */
  --color-bg-void:        #08090a;
  --color-bg-primary:     #0d1117;
  --color-bg-secondary:   #111820;
  --color-bg-elevated:    #1a2232;
  --color-bg-surface:     #1f2d3d;
  --color-gold-primary:   #c9a84c;
  --color-gold-bright:    #e8c56d;
  --color-gold-muted:     #8a6f35;
  --color-gold-dark:      #4d3d1a;
  --color-cyan-primary:   #35b6ec;
  --color-cyan-bright:    #5fd3ff;
  --color-cyan-dark:      #1c4d6e;
  --color-blue-nav:       #1e3a5f;
  --color-text-primary:   #e8eaed;
  --color-text-secondary: #9ba8b4;
  --color-text-muted:     #5a6a7a;
  --color-text-heading:   #c9a84c;
  --color-text-inverse:   #0d1117;
  --color-status-online:  #4caf82;
  --color-status-warning: #f5a623;
  --color-status-error:   #e05252;
  --color-status-info:    #35b6ec;
  --color-status-offline: #4a5568;
  --color-border-subtle:  #1e2d3d;
  --color-border-default: #2a3d52;
  --color-border-strong:  #3d5a73;
  --color-border-gold:    #c9a84c;

  /* Typographie */
  --font-display:  'Orbitron', 'Eurostile', sans-serif;
  --font-body:     'Exo 2', 'Titillium Web', sans-serif;
  --font-ui:       'Share Tech Mono', 'Courier New', monospace;
  --font-mono:     'Share Tech Mono', 'IBM Plex Mono', monospace;

  /* Tailles de texte */
  --text-hero:     3.5rem;
  --text-h1:       2.25rem;
  --text-h2:       1.75rem;
  --text-h3:       1.375rem;
  --text-h4:       1.125rem;
  --text-body-lg:  1rem;
  --text-body:     0.875rem;
  --text-small:    0.75rem;
  --text-label:    0.6875rem;
  --text-code:     0.8125rem;

  /* Espacements */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Rayons */
  --radius-none: 0px;
  --radius-sm:   2px;
  --radius-md:   4px;
  --radius-lg:   8px;
  --radius-xl:   12px;

  /* Animations */
  --duration-fast:   100ms;
  --duration-normal: 200ms;
  --duration-slow:   400ms;
  --ease-standard:   cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out:        cubic-bezier(0, 0, 0.2, 1);

  /* Ombres */
  --shadow-card:   0 2px 12px rgba(0, 0, 0, 0.4);
  --shadow-modal:  0 8px 48px rgba(0, 0, 0, 0.7);
  --glow-gold:     0 0 16px rgba(201, 168, 76, 0.3);
  --glow-cyan:     0 0 16px rgba(53, 182, 236, 0.3);
}
```

---

*Document maintenu par l'équipe Nexus Portal — À synchroniser avec toute évolution du design RSI officiel.*

*Dernière mise à jour : 2026-02-24*
