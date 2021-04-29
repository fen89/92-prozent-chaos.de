module.exports = {
  // purge: [
  //   'components/**/*.vue',
  //   'layouts/**/*.vue',
  //   'pages/**/*.vue',
  //   'plugins/**/*.js',
  // ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      fontSize: {
        ss: '0.666666rem'
      },
      colors: {
        primary: {
          base: '#00C58E',
          light: '#00E0A1',
          dark: '#07A377'
        },
        light: '#2F495E',
        dark: 'orange'
      }
    }
  },
  variants: {},
  plugins: []
}
