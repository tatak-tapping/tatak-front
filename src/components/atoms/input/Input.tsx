/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useRef } from "react";
import { BASE, ERROR, GRAY, PRIMARY } from "styles/colors";
import InputBase from "./InputBase";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { IFormInputs } from "components/organisms/modals/SignUpModalContent";
import { useController, UseControllerProps } from "react-hook-form";

type InputProps = {
  props:UseControllerProps<IFormInputs>;
  type:string;
  placeholder?:string;
  counter?:string;
  comment?:string;
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

const Wrapper = styled.div<{error?:boolean}>`
  display: flex;
  border-bottom: ${props => props.error ? `1px solid ${ERROR}` : `1px solid ${GRAY[6]}` };
  &input:focus{
    color:${GRAY[1]};
  }
`;

function Input(props:UseControllerProps<IFormInputs>) {
  const {field, fieldState} = useController(props);
  
  return (
    <InputBase 
      comment={fieldState.error ? fieldState.error.message : props.comment} 
      error={fieldState.error && true}
      counter={props.counter}
      >
      <Wrapper error={fieldState.error && true}>
         <StyledInput
            {...field}
            type={props.type}
            placeholder={props.placeholder}
          />
        {props.icon}
      </Wrapper>
    </InputBase>
  );
};

export default Input;