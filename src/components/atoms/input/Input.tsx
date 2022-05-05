/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef } from "react";
import { Box } from "rebass";
import { BASE, ERROR, GRAY, PRIMARY } from "styles/colors";
import InputBase from "./InputBase";

type InputProps = {
  error?: boolean
  comment?: string
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


const Wrapper = styled.div<{error: boolean}>`
  display: flex;
  border-bottom: ${(props) => props.error ? `1px solid ${ERROR}` : `1px solid ${GRAY[6]}`};
  &input:focus{
    color:${GRAY[1]};
  }
`;

const Input = ({ comment, icon, error = false, ...rest }: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <InputBase
      comment={comment}
      error={error}>
      <Wrapper error={error}>
        <StyledInput
          ref={ref}
          {...rest}/>
        {icon}
      </Wrapper>
    </InputBase>
  );
};

export default Input;