import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-void':      '#08090a',
        'bg-primary':   '#0d1117',
        'bg-secondary': '#111820',
        'bg-elevated':  '#1a2232',
        'bg-surface':   '#1f2d3d',
        // Gold accents
        'gold-primary': '#c9a84c',
        'gold-bright':  '#e8c56d',
        'gold-muted':   '#8a6f35',
        'gold-dark':    '#4d3d1a',
        // Cyan/Blue accents
        'cyan-primary': '#35b6ec',
        'cyan-bright':  '#5fd3ff',
        'cyan-dark':    '#1c4d6e',
        'blue-nav':     '#1e3a5f',
        // Text
        'text-primary':   '#e8eaed',
        'text-secondary': '#9ba8b4',
        'text-muted':     '#5a6a7a',
        'text-heading':   '#c9a84c',
        'text-inverse':   '#0d1117',
        // Status
        'status-online':  '#4caf82',
        'status-warning': '#f5a623',
        'status-error':   '#e05252',
        'status-info':    '#35b6ec',
        'status-offline': '#4a5568',
        // Borders
        'border-subtle':  '#1e2d3d',
        'border-default': '#2a3d52',
        'border-strong':  '#3d5a73',
        'border-gold':    '#c9a84c',
      },
      fontFamily: {
        display: ['Orbitron', 'Eurostile', 'sans-serif'],
        body:    ['Exo 2', 'Titillium Web', 'sans-serif'],
        ui:      ['Share Tech Mono', 'Courier New', 'monospace'],
        mono:    ['Share Tech Mono', 'IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'hero':     ['3.5rem',   { lineHeight: '1.1', letterSpacing: '0.08em' }],
        'h1':       ['2.25rem',  { lineHeight: '1.2', letterSpacing: '0.08em' }],
        'h2':       ['1.75rem',  { lineHeight: '1.2', letterSpacing: '0.06em' }],
        'h3':       ['1.375rem', { lineHeight: '1.3' }],
        'h4':       ['1.125rem', { lineHeight: '1.4' }],
        'body-lg':  ['1rem',     { lineHeight: '1.6' }],
        'body':     ['0.875rem', { lineHeight: '1.6' }],
        'small':    ['0.75rem',  { lineHeight: '1.5' }],
        'label':    ['0.6875rem',{ lineHeight: '1.4', letterSpacing: '0.08em' }],
        'code':     ['0.8125rem',{ lineHeight: '1.6' }],
      },
      borderRadius: {
        'none': '0px',
        'sm':   '2px',
        'md':   '4px',
        'lg':   '8px',
        'xl':   '12px',
      },
      spacing: {
        '1':  '4px',
        '2':  '8px',
        '3':  '12px',
        '4':  '16px',
        '5':  '20px',
        '6':  '24px',
        '8':  '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      boxShadow: {
        'card':     '0 2px 12px rgba(0, 0, 0, 0.4)',
        'modal':    '0 8px 48px rgba(0, 0, 0, 0.7)',
        'tooltip':  '0 4px 16px rgba(0, 0, 0, 0.6)',
        'glow-gold':'0 0 16px rgba(201, 168, 76, 0.3), 0 0 4px rgba(201, 168, 76, 0.6)',
        'glow-cyan':'0 0 16px rgba(53, 182, 236, 0.3), 0 0 4px rgba(53, 182, 236, 0.6)',
      },
      backgroundImage: {
        'gradient-hero':    'linear-gradient(180deg, #08090a 0%, #0d1117 40%, #0a1520 100%)',
        'gradient-gold':    'linear-gradient(135deg, #c9a84c 0%, #e8c56d 50%, #a07830 100%)',
        'gradient-vignette':'linear-gradient(to bottom, transparent 0%, rgba(8, 9, 10, 0.7) 60%, #08090a 100%)',
        'gradient-sidebar': 'linear-gradient(90deg, #0d1117 0%, #111820 100%)',
      },
      keyframes: {
        'rsi-reveal': {
          from: {
            opacity: '0',
            clipPath: 'inset(0 0 100% 0)',
          },
          to: {
            opacity: '1',
            clipPath: 'inset(0 0 0% 0)',
          },
        },
        'rsi-pulse': {
          '0%, 100%': { boxShadow: '0 0 4px #35b6ec' },
          '50%':       { boxShadow: '0 0 12px #5fd3ff, 0 0 24px rgba(53, 182, 236, 0.3)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        'rsi-glitch': {
          '0%':   { transform: 'translate(0)' },
          '20%':  { transform: 'translate(-2px, 1px)' },
          '40%':  { transform: 'translate(2px, -1px)' },
          '60%':  { transform: 'translate(-1px, 2px)' },
          '80%':  { transform: 'translate(1px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'rsi-spin': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'rsi-reveal': 'rsi-reveal 0.6s cubic-bezier(0, 0, 0.2, 1) forwards',
        'rsi-pulse':  'rsi-pulse 2s ease-in-out infinite',
        'blink':      'blink 1s step-end infinite',
        'rsi-glitch': 'rsi-glitch 0.3s ease-in-out',
        'rsi-spin':   'rsi-spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
