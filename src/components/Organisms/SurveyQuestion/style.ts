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

export const ContentStyle = styled.div``;

export const ContentFooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${mediaQueries.tablet} {
    padding: 5px 40px;
  }
`;
