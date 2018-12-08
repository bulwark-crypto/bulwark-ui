import theme from 'styled-theming'

// Border
export const borderRadius = '5px'

// Colors
export const black = '#252525'
export const blue = '#294dea'
export const gray = '#959595'
export const green = '#9eff90'
export const lightGray = '#f7f7f7'
export const purple = '#bc92ff'
export const red = '#e34a4a'
export const white = '#ffffff'
export const yellow = '#fffb79'

// Color Codes
export const disabled = theme('mode', {
  light: '#cccccc'
})
export const primary = theme('mode', {
  light: blue
})
export const secondary = theme('mode', {
  light: '#7c7c7c'
})
export const tertiary = theme('mode', {
  light: '#e9edfc'
})

export const alert = theme('mode', {
  light: red
})

export const info = theme('mode', {
  light: blue
})

export const success = theme('mode', {
  light: green
})

// Card
export const cardPadding = '32px'

// Drawer
export const drawerWidth = '290px'

// Font
export const fontPrimary = "'Roboto', sans-serif"
export const fontSecondary = "'Poppins', sans-serif"

// Grid
export const gridGutter = '10px'

// Input

// Modal
export const modalPadding = '32px'

// Panel
export const panelPadding = '32px'
