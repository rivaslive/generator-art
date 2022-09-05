import { Button } from 'antd';
import styled from 'styled-components';
import { colors } from '@/styles/theme';
import Image from '@/components/Atoms/Image';
import { WarningOutlined } from '@ant-design/icons';

export const TitleStyle = styled.h3`
  color: ${colors.text};
  margin: 30px auto;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

export const IconStyle = styled(WarningOutlined)`
  font-size: 3rem;
  display: block;
  text-align: center;
  margin: 40px auto 0;
`;

// export const IconStyle = styled.img`
//   margin: 40px auto 0;
//   display: block;
//   text-align: center;
// `;

export const TextStyle = styled.p`
  color: ${colors.text};
  font-weight: 600;
  max-width: 300px;
  width: 100%;
  font-size: 1.2rem;
  margin: 40px auto 20px;
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
