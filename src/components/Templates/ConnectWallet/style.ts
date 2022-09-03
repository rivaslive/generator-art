import styled from 'styled-components';
import Title from '@/components/Atoms/Title';
import { mediaQueries } from '@/styles/theme';

export const TitleStyle = styled(Title)`
  &.ant-typography {
    font-size: 2.5rem;
    line-height: 1.23;
    margin-top: 20px;

    ${mediaQueries.tablet} {
      font-size: 3rem;
    }
  }
`;
