import styled from 'styled-components';
import { ColorType } from '@/styles/theme';

export const StyleTag = styled.div<{ $bgColor: ColorType }>`
  padding: 3px 1rem;
  border-radius: 6px;
  background: ${({ theme, $bgColor }) => theme.colors[$bgColor]};
`;
