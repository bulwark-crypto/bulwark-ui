const common = {
  black: '#252525',
  blue: '#294dea',
  gray: '#959595',
  green: '#9eff90',
  lightGray: '#f7f7f7',
  purple: '#bc92ff',
  red: '#e34a4a',
  white: '#ffffff',
  yellow: '#fffb79',

  disabled: '#cccccc',
  get primary () { return this.blue },
  secondary: '#7c7c7c',
  tertiary: '#e9edfc',

  get alert () { return this.red },
  get info () { return this.blue },
  get success () { return this.green }
}

export const light = Object.assign({}, common, {
  bgColor: '#f7f7f7',
  fgColor: common.black
})

export const dark = Object.assign({}, common, {
  bgColor: common.black,
  fgColor: common.white
})
