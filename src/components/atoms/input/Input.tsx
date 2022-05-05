/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef } from "react";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import InputBase from "./InputBase";

interface InputProps  {
  disabled?: boolean
  comment?: string
  icon?: React.ReactNode
};

const wrapper = (error?: boolean) => css`
  display: flex;
  cursor: text;
`

const style = css`
  border: none;
  outline: none;
  color: inherit;
  background: none;
  font-size: inherit;
  &::placeholder {
    color: black;
    opacity: 0.5;
  }
  &:disabled {
    cursor: not-allowed;
    color: inherit;
  }
`
const Input = ({ comment, icon, disabled = false, ...rest }: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <InputBase
      css={wrapper(!!comment)}
      disabled={disabled}
      comment={comment}
      icon={icon}
    >
      <input
        css={style}
        ref={ref}
        disabled={disabled}
        {...rest}
      />
    </InputBase>
  );
};

export default Input;