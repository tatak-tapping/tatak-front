/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Children, forwardRef } from "react";
import { Box, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";

interface InputBaseProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  disabled?: boolean
  comment?: string
  icon?:React.ReactNode
}


const StyledInput = (disabled: boolean) => css`
  display: flex;
  outline: none;
  min-height: 40px;
  max-height: 62px;
  width: 348px; 
  /* ${disabled &&
  css`
    opacity: 0.4;
    cursor: not-allowed;
  `}; */
`

const InputBase = ({
  className,
  style,
  children,
  disabled = false,
  comment = "dd",
  ...rest
}: InputBaseProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <Box>
      <div
        className={className}
        ref={ref}
        css={StyledInput(disabled)}
        style={style}
        {...rest}
        >
        {children}
      </div>
      {comment && (
        <Text as="p" style={{ color: 'red' }}>
          {comment}
        </Text>
      )}
    </Box>
  );
};

export default InputBase;