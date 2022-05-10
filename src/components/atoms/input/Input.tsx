/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useRef } from "react";
import { BASE, ERROR, GRAY, PRIMARY } from "styles/colors";
import InputBase, { InputCommontType } from "./InputBase";
import { useFormContext } from "react-hook-form";

type InputProps = {
  name:string
  comment?:string
  onChange?:Function;
  icon?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

const StyledInput = styled.input` 
  width: 320px;
  height: 40px;
  border: none;
  outline: none;
  background-color: ${BASE[3]};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0px;
  color:${GRAY[1]};
  line-height: 150%;
  &::placeholder {
    color: ${GRAY[6]};
    opacity: 0.5;
  };
`;


const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${GRAY[6]};
  &input:focus{
    color:${GRAY[1]};
  }
`;

function Input({comment, name, onChange, icon, ...rest }: InputProps) {
  const ref = useRef<HTMLInputElement>(null);
  const {register, formState, watch} = useFormContext();
  return (
    <InputBase
      comment={comment}>
      <Wrapper>
         <StyledInput
          {...register(name)}
          name={name}
          {...rest}/> 
        {icon}
      </Wrapper>
    </InputBase>
  );
};

export default Input;