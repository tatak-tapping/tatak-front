/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Children, forwardRef } from 'react';
import { Box, Flex, Text } from 'rebass';
import { BASE, ERROR, GRAY, PRIMARY } from 'styles/colors';

interface InputBaseProps {
  error?: boolean;
  className?: string;
  counter?: string;
  comment?: string;
  children?: React.ReactNode;
}

const InputBase = (
  { className, children, comment, error, counter, ...rest }: InputBaseProps,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <Box>
      <div className={className} ref={ref} {...rest}>
        {children}
      </div>
      <Flex height="14px" mt="8px" alignItems="center">
        {comment && (
          <Text as="p" fontSize="12px" lineHeight="14px" color={error && ERROR}>
            {comment}
          </Text>
        )}
        {counter && (
          <Text
            as="p"
            justifyContent="center"
            alignItems="center"
            marginLeft="auto"
            fontSize="12px"
            lineHeight="14px"
            color={error && ERROR}
          >
            {counter}
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default forwardRef<HTMLDivElement, InputBaseProps>(InputBase);
