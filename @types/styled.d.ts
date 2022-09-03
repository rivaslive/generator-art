import 'styled-components';
import { themeVars } from 'styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof themeVars.colors;
    zIndex: typeof themeVars.zIndex;
    vars: typeof themeVars.vars;
  }
}
