import 'styled-components';
import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

export const theme = {
  name: 'Base Theme',
  fonts: {},
  colors: {},
  mixins: {
    toCenter: (): FlattenSimpleInterpolation =>
      css`
        display: flex;
        justify-content: center;
        align-items: center;
      `,
  },
  media: {
    sp: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (max-width: 768px) {
        ${css(first, ...interpolations)}
      }
    `,
  },
} as const;

// type AppTheme = typeof theme;

// declare module 'styled-components' {
//   interface DefaultTheme extends AppTheme {}
// }
