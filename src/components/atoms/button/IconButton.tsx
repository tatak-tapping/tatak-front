import styled from "@emotion/styled";
import React, { Children } from "react";
import { BASE, PRIMARY } from "styles/colors";

interface IconButtonProp {
  width?: string;
  height?: string;
  border?: string;
  margin?: string;
  children: React.ReactNode;
  onClick: VoidFunction;
}

const StyledButton = styled.button<{ width: string; height: string; border: string; margin:string; }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  background-color: ${BASE[2]};
  border-radius: 6px;
  padding:4px;
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
  margin = '0px',
  onClick,
  children
}:IconButtonProp) => {
  return (
    <StyledButton margin={margin} width={width} height={height} border={border} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default IconButton;