module.exports = {
  mode: 'jit',
  /* 把 purge:[] 改成下面這樣 */
  purge: [
    './public/**/*.{html}',
    './src/**/*.{vue,js,ts,html}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}
