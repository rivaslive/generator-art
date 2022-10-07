import styled from 'styled-components';
import { mediaQueries } from '@/styles/theme';

export const WrapperStyle = styled.div`
  padding: 20px;
  margin: 20px auto 0;
  border-radius: 20px;
  width: 550px;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.lightSemiTransparent};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};

  ${mediaQueries.tablet} {
    padding: 40px;
    margin: 100px auto 0;
  }
`;
