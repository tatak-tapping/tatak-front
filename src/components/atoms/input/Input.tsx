import styled from "@emotion/styled";

const Input = styled.input<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Input;