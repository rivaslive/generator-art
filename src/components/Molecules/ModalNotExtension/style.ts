import { Button } from 'antd';
import styled from 'styled-components';
import { colors } from '@/styles/theme';

export const TitleStyle = styled.h3`
  text-align: center;
  color: ${colors.warning};
  font-weight: bold;
  font-size: 2rem;
`;

export const IconStyle = styled.img`
  margin: 40px auto 40px;
  display: block;
  text-align: center;
`;

export const TextStyle = styled.p`
  color: ${colors.text};
  font-weight: 600;
  max-width: 300px;
  width: 100%;
  font-size: 1.2rem;
  margin: 20px auto;
  text-align: center;
`;

export const ButtonStyle = styled(Button)`
  &.ant-btn {
    display: block;
    min-width: 150px;
    height: 40px;
    margin: 0 auto 40px;
    color: black;
    font-weight: 600;
    background: ${colors.warning};
    border-color: ${colors.warning};
  }
`;
