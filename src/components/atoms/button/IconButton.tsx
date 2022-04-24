import styled from "@emotion/styled";
import React, { Children } from "react";

interface IconButtonProp {
  width?: string;
  height?: string;
  children: React.ReactNode;
  onClick: VoidFunction;
}

const StyledButton = styled.button<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border:none;
  outline: none;
  img {
    width: 100%;
    height: 100%;
  }
`;

const IconButton = ({
  width = '32px',
  height = '32px',
  onClick,
  children
}:IconButtonProp) => {
  return (
    <StyledButton width={width} height={height} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default IconButton;