/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Flex, Image } from 'rebass';
import { BASE, GRAY } from 'styles/colors';
import { dialogBackStyle, modalBackStyle } from 'styles/modal';

export enum DialogTypes {
  info,
  error,
  success,
}

export interface DialogProps {
  isVisible?: boolean;
  message?: ReactNode;
  type?: DialogTypes;
  width?: string;
}

const StyledDialog = styled.div<{ width: string }>`
  width: 428px;
  padding: 40px 0 20px 0;
  margin: auto;
  box-shadow: 0px 0px 10px 0px #00000033;
  color: ${GRAY[2]};
  background-color: ${BASE[3]};
  div {
    background-color: ${BASE[3]};
  }
  img {
    background-color: ${BASE[3]};
  }
`;

const StyledIcon = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 0 12px 0;
`;

const Dialog = ({ isVisible = false, type, message, width }: DialogProps) => {
  return (
    <>
      {isVisible && (
        <div
          css={css`
            ${dialogBackStyle}
          `}
        >
          <StyledDialog width={width}>
            <Flex justifyContent="center" alignItems="center" flexDirection="column">
              {type === DialogTypes.error && <StyledIcon src="/images/dialog_error.svg" />}
              {type === DialogTypes.info && <StyledIcon src="/images/dialog_done.svg" />}
              {type === DialogTypes.success && <StyledIcon src="/images/dialog_success.svg" />}
              {message}
            </Flex>
          </StyledDialog>
        </div>
      )}
    </>
  );
};

export default Dialog;
