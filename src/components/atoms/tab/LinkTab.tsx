/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import linkStyle from "styles/linkStyle";

interface LinkTabProps {
  href: string;
  margin?: string;
  children: React.ReactNode;
}

const LinkTab = ({ href, children, margin}: LinkTabProps) => {
  return  (
    <a
    href={href}
    target="_self"
    css={css`
      margin: ${margin};
      ${linkStyle}
    `}
  >
    {children}
  </a>
  );
};

export default LinkTab;
