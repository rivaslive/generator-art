import styled from 'styled-components';
import { mediaQueries } from '@/styles/theme';

export const CardWrapperStyle = styled.div`
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

export const StyleContent = styled.div`
  text-align: center;

  p {
    width: 100%;
    max-width: 250px;
  }
`;

export const CardIconStyle = styled.div`
  width: 96px;
  height: 96px;
  margin: auto;
  display: grid;
  place-items: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.info};
  border-radius: ${({ theme }) => theme.vars.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.info};
  background: ${({ theme }) => theme.colors.infoOpacity};
`;
