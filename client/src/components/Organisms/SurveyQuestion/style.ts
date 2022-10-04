import styled from 'styled-components';
import WrapperWithBorder from '@/components/Atoms/WrapperWithBorder';
import { mediaQueries } from '@/styles/theme';

export const WrapperStyle = styled(WrapperWithBorder)`
  padding: 20px 20px 0;
  position: relative;

  ${mediaQueries.tablet} {
    padding: 20px 40px 0;
  }
`;

export const ContentStyle = styled.div`
  padding-bottom: 100px;
  width: 100%;
`;

export const ContentFooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;

  ${mediaQueries.tablet} {
    padding: 15px 40px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;
