import styled, { css } from 'styled-components';

export const GroupStyle = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0 auto 40px;
  max-width: 350px;
`;

const cssSelected = css`
  background-color: ${({ theme }) => theme.colors.info};
`;

export const OptionStyle = styled.li<{ $isSelected: boolean }>`
  padding: 7px 20px;
  border-radius: 12px;
  margin: 10px 0;
  cursor: pointer;
  transition: background-color 300ms;
  background-color: ${({ theme }) => theme.colors.shadowInput};
  ${({ $isSelected }) => $isSelected && cssSelected}
`;
