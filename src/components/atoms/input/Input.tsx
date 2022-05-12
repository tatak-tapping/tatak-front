/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ChangeEventHandler, forwardRef, useRef } from "react";
import { BASE, ERROR, GRAY, PRIMARY } from "styles/colors";
import InputBase from "./InputBase";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { IFormInputs } from "components/organisms/modals/SignUpModalContent";
import { useController, Controller, UseControllerProps } from "react-hook-form";

interface InputProps extends UseControllerProps<IFormInputs>{
   type?:string;
   comment?:string;
   counter?:string;
   icon?:React.ReactElement;
   placeholder?:string;
}

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

function Input(props:InputProps, ref: React.Ref<HTMLDivElement>) {
  const name = props.name;
  const control = props.control;
  const {field, fieldState} = useController({
    name,
    control,
    rules: props.rules,
    defaultValue: "",
  });

  return (
    <InputBase 
        comment={fieldState.error ? fieldState.error.message : props.comment} 
        error={fieldState.error && true}
        counter={props.counter}
        >
        <div ref={ref}></div>
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

export default forwardRef<HTMLDivElement, InputProps>(Input);