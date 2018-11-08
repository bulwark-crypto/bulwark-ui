const common = {
  // Border
  borderRadius: '5px',

  // Colors
  black: '#252525',
  blue: '#294dea',
  gray: '#959595',
  green: '#9eff90',
  lightGray: '#f7f7f7',
  purple: '#bc92ff',
  red: '#e34a4a',
  white: '#ffffff',
  yellow: '#fffb79',

  // Color Codes
  disabled: '#cccccc',
  get primary () { return this.blue },
  secondary: '#7c7c7c',
  tertiary: '#e9edfc',

  get alert () { return this.red },
  get info () { return this.blue },
  get success () { return this.green },

  // Card
  cardPadding: '32px',

  // Drawer
  drawerWidth: '290px',

  // Font
  fontPrimary: "'Roboto', sans-serif",
  fontSecondary: "'Poppins', sans-serif",

  // Grid
  gridGutter: '10px',

  // Input

  // Modal
  modalPadding: '32px',

  // Panel
  panelPadding: '32px'
}

export const light = Object.assign({}, common, {
  bgColor: '#f7f7f7',
  fgColor: common.black
})

export const dark = Object.assign({}, common, {
  bgColor: common.black,
  fgColor: common.white
})
