import styled from "@emotion/styled";
import { BASE, PRIMARY} from "styles/colors";

const TextButton = styled.button<{
  width: string;
  height: string;
  fontSize: string;
  fontColor?: string;
  backgroundColor?: string;
  margin?: string;
  border? :string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height}; 
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor || BASE[1]};
  color:${(props) => props.fontColor || PRIMARY[80]};
  border-radius: 4px;
  border: 1px solid ${PRIMARY[40]};
  padding: 8px 12px;
  font-weight: 600;
  text-align: center;
  line-height: 17px;
  :hover{
    background-color: ${PRIMARY[20]};
    color:${PRIMARY[100]};
  }
  :active{
    background-color: ${PRIMARY[100]};
    color:${BASE[1]};
  }
`;

export default TextButton;