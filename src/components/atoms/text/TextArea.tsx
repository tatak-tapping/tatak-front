import styled from "@emotion/styled";
import { BASE, GRAY } from "styles/colors";

const TextArea = styled.textarea<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 20px;
  background-color: ${BASE[3]};
  border: 1px solid ${GRAY[7]};
  font-size: 16px;
  line-height: 160%;
  color: ${GRAY[6]};
  resize: none;
  outline:none;
`;

export default TextArea;