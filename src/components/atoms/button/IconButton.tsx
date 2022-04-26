import styled from "@emotion/styled";
import React, { Children } from "react";
import { BASE, PRIMARY } from "styles/colors";

interface IconButtonProp {
  width?: string;
  height?: string;
  border?: string;
  children: React.ReactNode;
  onClick: VoidFunction;
}

const StyledButton = styled.button<{ width: string; height: string; border: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${BASE[2]};
  border-radius: 4px;
  border: ${(props) => props.border};
  padding:3px;
  * {
    fill: ${PRIMARY[80]};
    background-color: ${BASE[2]};
    width: 24px;
    height: 24px;
  }
  :hover{
    background-color: ${PRIMARY[80]};
    color:${PRIMARY[100]};
    * {
      fill: ${BASE[1]};
      background-color: ${PRIMARY[80]};
    }
  }
  :active{
    background-color: ${PRIMARY[100]};
    color:${BASE[1]};
    * {
      fill: ${BASE[1]};
      background-color:${PRIMARY[100]};
    }
  }
`;

const IconButton = ({
  width = '32px',
  height = '32px',
  border = `1px solid ${PRIMARY[100]}`,
  onClick,
  children
}:IconButtonProp) => {
  return (
    <StyledButton width={width} height={height} border={border} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default IconButton;