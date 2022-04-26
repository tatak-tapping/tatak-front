import styled from "@emotion/styled";

const Text = styled.span<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Text;