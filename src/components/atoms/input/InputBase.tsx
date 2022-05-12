/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Children, forwardRef } from "react";
import { Box, Text } from "rebass";
import { BASE, ERROR, GRAY, PRIMARY } from "styles/colors";

interface InputBaseProps {
  error?:boolean;
  className?: string
  comment?: string
  children?: React.ReactNode
}

const InputBase = ({
  className,
  children,
  comment,
  error,
  ...rest
}: InputBaseProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <Box>
      <div className={className} ref={ref} {...rest}>
        {children}
      </div>
      <Box height="14px" mt="8px">
        {comment && (
          <Text as="p" fontSize="12px" lineHeight="14px" color={error && ERROR}>
            {comment}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default forwardRef<HTMLDivElement, InputBaseProps>(InputBase)