import styled from "@emotion/styled";

const TextArea = styled.textarea<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default TextArea;