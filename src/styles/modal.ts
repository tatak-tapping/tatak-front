/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const modalBackStyle = css`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 111;
`;

export const dialogBackStyle = css`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;