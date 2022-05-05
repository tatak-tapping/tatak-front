/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Children, forwardRef } from "react";
import { Box, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";

interface InputBaseProps {
  className?: string
  error? :boolean
  comment?: string
  children?: React.ReactNode
}
const InputBase = ({
  className,
  children,
  error,
  comment,
  ...rest
}: InputBaseProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <Box>
      <div
        className={className}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
      {comment && (<Text as="p">{comment}</Text>)}
    </Box>
  );
};

export default forwardRef<HTMLDivElement, InputBaseProps>(InputBase)