import { css } from 'styled-components';

export type SizeType = 'small' | 'middle' | 'large';

type Configs = {
  breakpoints: number[];
  containerWidths: number[];
};

const breakpoints = [576, 768, 992, 1200, 1400];

const configuration: {
  [key in SizeType]: Configs;
} = {
  small: {
    breakpoints,
    containerWidths: [540, 750, 960, 960, 960],
  },
  middle: {
    breakpoints,
    containerWidths: [540, 750, 960, 1150, 1250],
  },
  large: {
    breakpoints,
    containerWidths: [540, 750, 960, 1150, 1250],
  },
};

export const getStyleResponsive = (size: SizeType) => {
  let output = css``;
  configuration[size].breakpoints.forEach((breakpoint, index) => {
    const containerWidth = configuration[size].containerWidths[index];
    output = css`
      ${output};

      @media (min-width: ${breakpoint}px) {
        max-width: ${containerWidth}px;
      }
    `;
  });

  return output;
};
