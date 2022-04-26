import styled from "@emotion/styled";
import { BASE, GRAY, PRIMARY } from "styles/colors";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?:string;
  height?:string;
  placeholder?: string;
}

const StyledInput = styled.input<{ width: string; height:string; placeholder: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-bottom: 1px solid ${PRIMARY[40]} !important;
  outline:none;
  border:none;
  background-color: ${BASE[3]};
  *{
    background-color: ${BASE[3]};
  }
  :focus{
    border-bottom: 1px solid ${PRIMARY[100]} !important;
    border:none;
    ::placeholder{
    color: ${GRAY[1]};
    }
  }
  ::placeholder{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${GRAY[5]};
  }
`;

const Input = ({
  width = "500px",
  height = "40px",
  placeholder = "", 
  ...rest 
}: InputProps) => {
  return (
    <StyledInput 
      width={width} 
      height={height} 
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;