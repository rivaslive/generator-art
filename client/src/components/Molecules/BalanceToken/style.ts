import styled from 'styled-components';

export const BalanceStyle = styled.div`
  margin: 20px 0;
  padding: 10px 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.lightSemiTransparent};
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
`;
