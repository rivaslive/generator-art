import styled from 'styled-components';

export const FileStyle = styled.div`
  border-radius: 12px;
  width: 250px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.bgCard};
`;

export const FilePreviewStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 150px;
  background: transparent;
  text-align: center;

  img {
    display: block;
    margin: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const FileContentStyle = styled.div`
  padding: 10px;
  background: rgba(67, 120, 159, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
