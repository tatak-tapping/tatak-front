import styled from '@emotion/styled';
import { GRAY } from 'styles/colors';

const Label = styled.label<{
  fontSize?: string;
  fontColor?: string;
  margin?: string;
}>`
  font-size: ${(props) => props.fontSize || '14px'};
  color: ${(props) => props.fontColor || GRAY[2]};
  margin: ${(props) => props.fontSize};
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`;

export default Label;
