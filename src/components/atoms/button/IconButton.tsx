import styled from "@emotion/styled";
import React, { Children } from "react";

interface IconButtonProp {
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const IconButton = ({
  width = '32px',
  height = '32px',
  children
}:IconButtonProp) => {
  return (
    <button>
      {children}
    </button>
  );
};

export default IconButton;