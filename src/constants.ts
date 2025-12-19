// Design tokens and constants
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
} as const;

export const COLORS = {
  primary: '#25408f',
  secondary: '#c26f1f',
  background: '#f5f5f5',
  text: '#000',
  backgroundFigure: '#e9ecf4',
} as const;

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
} as const;

export const FONTS = {
  body: '"Literata", serif',
  heading: '"Ubuntu", sans-serif',
} as const;

// Media query helpers
export const mediaQueries = {
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `(max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
  above: (breakpoint: number) => `(min-width: ${breakpoint + 1}px)`,
  below: (breakpoint: number) => `(max-width: ${breakpoint}px)`,
} as const;

// CSS custom properties generator (for use in global styles)
export const cssVars = {
  '--primary-color': COLORS.primary,
  '--secondary-color': COLORS.secondary,
  '--background-color': COLORS.background,
  '--text-color': COLORS.text,
  '--background-color-figure': COLORS.backgroundFigure,
  '--breakpoint-mobile': `${BREAKPOINTS.mobile}px`,
  '--breakpoint-tablet': `${BREAKPOINTS.tablet}px`,
  '--breakpoint-desktop': `${BREAKPOINTS.desktop}px`,
} as const;