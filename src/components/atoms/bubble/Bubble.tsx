import styled from '@emotion/styled';
import { BASE } from 'styles/colors';

const Bubble = styled.div<{
  isVisible: boolean;
  width: string;
  height: string;
  padding?: string;
  margin?: string;
  right?: string;
  top?: string;
}>`
  visibility: ${(props) => !props.isVisible && 'hidden'};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  position: absolute;
  box-shadow: 0px 0px 2px 0px #00000040;
  background-color: ${BASE[3]};
  * {
    background-color: ${BASE[3]};
  }
  ${(props) =>
    props.isVisible &&
    `
    visibility: visible;
    transform: translate3d(0,10px,0);
    transition: all .2s ease-in-out;
  `}
`;

export default Bubble;
