// Brand palette is fixed. Neutrals (cream, ink) are tints/shades only, never new hues.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: {
      rose: '#E27396', amaranth: '#EA9AB2', mimi: '#FEDBE5',
      asparagus: '#6D9F71', spring: '#337357',
      cream: '#FFF8F5', ink: '#1F3D31',
    },
    fontFamily: { display: ['Fraunces', 'Georgia', 'serif'], sans: ['"DM Sans"', 'system-ui', 'sans-serif'] },
    borderRadius: { card: '1.25rem', hero: '2rem' },
    boxShadow: { card: '0 1px 2px rgba(51,115,87,.06), 0 8px 24px -12px rgba(51,115,87,.18)',
                 lift: '0 2px 4px rgba(51,115,87,.08), 0 16px 32px -12px rgba(51,115,87,.28)' },
  } },
}
