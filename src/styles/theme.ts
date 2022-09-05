export const colors = {
  primary: '#127dff',
  accent: '#9c27b0',
  error: '#f44336',
  warning: '#F5A524',
  info: '#2196f3',
  success: '#4caf50',
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  semiTransparent: 'rgba(0, 0, 0, 0.1)',
  lightSemiTransparent: 'rgba(100, 100, 100, 0.1)',
  icon: '#BBBBBB',
  background: '#000000',
  text: '#ffffff',
  bgCard: 'rgba(100, 100, 200, 0.3)',
  nav: 'rgba(0, 0, 0, .5)',
  input: '#161616',
  disabled: 'rgba(255, 255, 255, 0.08)',
  disabledText: 'rgba(255, 255, 255, 0.3)',
  borderColor: '#313538',
  shadowInput: 'rgb(77, 77, 77)',
  infoOpacity: '#0d273b',
  errorOpacity: '#300313',
};

export type ColorType = keyof typeof colors;

const zIndex = {
  min: -1,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  max: 10,
  nav: 20,
  modal: 30,
};

const vars = {
  borderRadius: '12px'
};

export const themeVars = {
  colors,
  zIndex,
  vars,
};

export const mediaQueries = {
  tablet: '@media (min-width: 768px)',
  desktop: '@media (min-width: 1200px)',
};
