import styled from 'styled-components';
import Title from '@/components/Atoms/Title';
import { mediaQueries } from '@/styles/theme';

export const TitleStyle = styled(Title)`
  &.ant-typography {
    font-size: 2.5rem;
    line-height: 1.23;

    ${mediaQueries.tablet} {
      font-size: 3rem;
    }
  }
`;

export const WrapperStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;

  button.ant-btn {
    min-width: auto;
  }

  .only-desk {
    display: none;
  }

  ${mediaQueries.tablet} {
    .only-desk {
      display: inline-block;
    }
  }
`;

export const ActionStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
