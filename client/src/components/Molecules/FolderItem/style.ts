import styled from 'styled-components';

export const FolderStyle = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 10px;
  min-width: 250px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.bgCard};
`;

export const FolderIconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background: rgba(67, 120, 159, 0.2);

  .anticon {
    font-size: 20px;
    color: #67B7F1;
  }
`;
