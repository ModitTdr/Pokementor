module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-normal', 'bg-fire', 'bg-water', 'bg-grass', 'bg-electric',
    'bg-ice', 'bg-fighting', 'bg-poison', 'bg-ground', 'bg-flying',
    'bg-psychic', 'bg-bug', 'bg-rock', 'bg-ghost', 'bg-dragon',
    'bg-dark', 'bg-steel', 'bg-fairy'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
