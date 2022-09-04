import styled from 'styled-components';

export const QuizPresentationStyle = styled.div`
  padding: 20px;
  margin: 0 auto;
  border-radius: 20px;
  width: fit-content;
  background: ${({ theme }) => theme.colors.lightSemiTransparent};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};

  ${mediaQueries.tablet} {
    padding: 40px;
  }
`;

import { mediaQueries } from '@/styles/theme';
