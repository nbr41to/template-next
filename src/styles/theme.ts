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
    box: (): FlattenSimpleInterpolation =>
      css`
        margin: 12px;
        padding: 16px 20px;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border: 1px solid #444;
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
