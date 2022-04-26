/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PRIMARY } from "./colors";

const linkStyle = css`
  text-decoration: none;
  color: ${PRIMARY[20]};
  :hover,
  :focus,
  :active {
    text-decoration: none;
    color : ${PRIMARY[100]};
  }
`;

export default linkStyle;