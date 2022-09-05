import styled from 'styled-components';
import { getStyleResponsive, SizeType } from './Config';

export const StyleContainer = styled.div<{ $size: SizeType }>`
  display: block;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  ${({ $size }) => getStyleResponsive($size)}
`;
