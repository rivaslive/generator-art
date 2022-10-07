export const colors = {
  primary: '#4285F4',
  accent: '#9c27b0',
  error: '#f44336',
  warning: '#F5A524',
  info: '#2196f3',
  success: '#4caf50',
  black: '#000',
  white: '#fff',
  primaryOpacity: '#bddaf5',
  secondaryOpacity: '#f9d199',
  errorOpacity: '#41130f',
  infoOpacity: '#0d273b',
  accentOpacity: '#5b2464',
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
  borderRadius: '12px',
};

export const themeVars = {
  colors,
  zIndex,
  vars,
};

export const mediaQueries = {
  smallMobile: '@media (min-width: 560px)',
  mobile: '@media (min-width: 768px)',
  tablet: '@media (min-width: 768px)',
  desktop: '@media (min-width: 1200px)',
};
