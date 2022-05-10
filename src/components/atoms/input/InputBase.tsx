/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Children, forwardRef } from "react";
import { Box, Text } from "rebass";
import { BASE, ERROR, GRAY, PRIMARY } from "styles/colors";

export enum InputCommontType{
  info,
  error,
  success
}

interface InputBaseProps {
  className?: string
  comment?: string
  commnetType? :InputCommontType
  children?: React.ReactNode
}

const InputBase = ({
  className,
  children,
  commnetType,
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
      {comment && (
        <Text as="p" 
        fontSize="12px" 
        lineHeight="14px" 
        color={commnetType == InputCommontType.error ? `${ERROR}` : `${GRAY[6]}`}
        mt="8px">
          {comment}
        </Text>
      )}
    </Box>
  );
};

export default forwardRef<HTMLDivElement, InputBaseProps>(InputBase)