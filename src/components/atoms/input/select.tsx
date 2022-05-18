/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ChangeEventHandler, forwardRef, useRef } from "react";
import { BASE, ERROR, GRAY, PRIMARY } from "styles/colors";
import InputBase from "./InputBase";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { useController, FieldPath, FieldValues, UseControllerProps } from "react-hook-form";

type Option = {
  label: React.ReactNode | string;
  value: string | number | string[];
};

interface SelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName>{
   icon?:React.ReactElement;
   options?: Option[];
   comment?:string;
}

const StyledSelect = styled.select` 
  width: 242px;
  height: 40px;
  outline: none;
  border: solid 1px ${PRIMARY[40]};
  background-color: ${BASE[3]};
  /* display: flex;
  flex-direction: row; */
  color:${GRAY[2]};
`;

const StyledOption = styled.option`

`;

const StyledDefaultOption = styled.option`

`;

const Wrapper = styled.div<{error?:boolean}>`
  /* display: flex; */
  width: 242px;
  height: 40px;
  border-bottom: ${props => props.error ? `1px solid ${ERROR}` : `1px solid ${GRAY[6]}` };
  &input:focus{
    color:${GRAY[2]};
  }
`;

function Select<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props:SelectProps<TFieldValues, TName>) {
  const name = props.name;
  const control = props.control;
  const {field, fieldState} = useController({
    name,
    control,
    rules: props?.rules
  });

  return (
    <Wrapper error={fieldState.error && true}>
      <StyledSelect  name={name} ref={field.ref} onChange={field.onChange} onBlur={field.onBlur} {...field}>
        <StyledDefaultOption value=''>{props.comment}</StyledDefaultOption>
        {props.options && props.options.map(({ label, value }) => (
          <StyledOption value={value}>{label}</StyledOption>
        ))}
      </StyledSelect>
      {props.icon}
    </Wrapper>
  );
};

export default Select;