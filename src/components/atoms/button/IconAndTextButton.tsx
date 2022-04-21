import styled from "@emotion/styled";

const IconAndTextButton = styled.button<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default IconAndTextButton;