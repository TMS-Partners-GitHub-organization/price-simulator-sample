/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans JP'", 'sans-serif'],
        serif: ["'Noto Serif JP'", 'sans-serif'],
        maru: ["'Zen Maru Gothic'", 'sans-serif']
      },
      colors: {
        'nc-1': '#111',
        'nc-2': '#222',
        'nc-3': '#333',
        'nc-4': '#444',
        'nc-5': '#555',
        'nc-6': '#666',
        'nc-7': '#777',
        'nc-8': '#888',
        'nc-9': '#999',
        'nc-a': '#aaa',
        'nc-b': '#bbb',
        'nc-c': '#ccc',
        'nc-d': '#ddd',
        'nc-e': '#eee',
        'line-green': '#00B900',
        'blueen': '#274F83',
        'main': '#2A518A',
        'light-blue': '#D1EFFF',
        'line-blue': '#29518A',
        'sub': '#FF6041',
        'light-red': '#FFBFB1',
        'light-red2': '#FFD9D1',
        'right-red': '#FFD9D2',
        'redd': '#121212'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
