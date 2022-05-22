/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ChangeEventHandler, forwardRef, useRef } from "react";
import { BASE, ERROR, GRAY, PRIMARY } from "styles/colors";
import InputBase from "./InputBase";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { useController, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

interface InputProps<
TFieldValues extends FieldValues = FieldValues,
TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName>{
   type?:string;
   comment?:string;
   counter?:string;
   icon?:React.ReactElement;
   placeholder?:string;
   width?:string;
}

const StyledInput = styled.input<{width:string}>` 
  width: ${props => props.width};
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

function Input<
TFieldValues extends FieldValues = FieldValues,
TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props:InputProps<TFieldValues, TName>) {
  const name = props.name;
  const control = props.control;
  const {field, fieldState} = useController({
    name,
    control,
    rules: props.rules
  });

  return (
    <InputBase 
        comment={fieldState.error ? fieldState.error.message : props.comment} 
        error={fieldState.error && true}
        counter={props.counter}
        >
        <div ref={useRef()}></div>
        <Wrapper error={fieldState.error && true}>
           <StyledInput
              {...field}
              width={props.width ?? "320px"}
              type={props.type}
              placeholder={props.placeholder}
            />
          {props.icon}
        </Wrapper>
      </InputBase>
  );
};

export default Input;