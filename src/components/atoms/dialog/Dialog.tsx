/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Image } from 'rebass';
import { BASE, GRAY } from 'styles/colors';
import { dialogBackStyle, modalBackStyle } from 'styles/modal';

export enum DialogTypes {
  info,
  error,
  success
}

export interface DialogProps {
  isVisible?: boolean;
  message?: ReactNode;
  type? : DialogTypes;
}

const StyledDialog = styled.div`
  width: 428px;
  height: 239px;
  right:0%;
  top: 0%;
  left: 0%;
  bottom: 0%;
  margin: auto;  
  position: fixed;
  text-align: center;
  z-index : 9999;
  box-shadow: 0px 0px 10px 0px #00000033;
  padding: 40px 20px;
  line-height: 150%;
  color:${GRAY[2]};
  background-color: ${BASE[3]};
  div{
    background-color: ${BASE[3]};
  }
  img{
    background-color: ${BASE[3]};
  }
`;

const StyledIcon = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 0 12px 0;
`;

const Dialog = ({ isVisible = false, type, message }: DialogProps) => {
  return (
   <>
     {isVisible && (
      <div css={css`${dialogBackStyle}`} >
        <StyledDialog>
          {type === DialogTypes.error && (<StyledIcon src='/images/dialog_error.svg'/>)}
          {type === DialogTypes.info && (<StyledIcon src='/images/dialog_done.svg'/>)}
          {type === DialogTypes.success && (<StyledIcon src='/images/dialog_success.svg'/>)}
          {message}
        </StyledDialog>
      </div>
    )}
   </>
  );
};

export default Dialog;