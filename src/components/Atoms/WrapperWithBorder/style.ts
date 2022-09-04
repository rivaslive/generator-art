import styled from 'styled-components';
import { mediaQueries } from '@/styles/theme';

export const WrapperStyle = styled.div`
  padding: 25px;
  margin-top: 30px;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.vars.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.shadowInput};
  background: ${({ theme }) => theme.colors.lightSemiTransparent};
  min-height: calc(100vh - 250px);

  ${mediaQueries.tablet} {
    min-height: calc(100vh - 300px);
  }
`;
