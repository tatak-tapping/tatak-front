/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Box } from 'rebass';
import { BASE } from 'styles/colors';
import { modalBackStyle } from 'styles/modal';

interface ModalProps {
  isVisible: boolean;
  width?: string;
  height?: string;
  padding?: string;
  onOpened?: VoidFunction;
  onClosed?: VoidFunction;
  closeButton?: React.ReactNode;
  children: React.ReactNode;
}

const StyledModal = styled.div<{ width: string; height:string; padding: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  box-shadow: 0px 0px 10px 0px #00000033;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  margin: auto;
  background-color: ${BASE[3]};
  *{
    background-color: ${BASE[3]};
  }
`;

const Modal = ({
  isVisible,
  width = '950px',
  height = '100px',
  padding = '20px',
  onOpened,
  onClosed,
  closeButton,
  children,
}: ModalProps) => {
  const [defaultScrollStyle, setDefaultScrollStyle] = useState({
    x: '',
    y: '',
  });

  const disableScroll = () => {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflowX = defaultScrollStyle.x;
    document.body.style.overflowY = defaultScrollStyle.y;
  };

  useEffect(() => {
    setDefaultScrollStyle({
      x: document.body.style.overflowX,
      y: document.body.style.overflowY,
    });

    return () => enableScroll();
  }, []);

  useEffect(() => {
    if (isVisible) {
      onOpened?.();
      disableScroll();
      return;
    }
    onClosed?.();
    enableScroll();
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <div css={css`${modalBackStyle}`}>
          <StyledModal width={width} height={height} padding={padding}>
            <Box display="flex" justifyContent="flex-end">
              {closeButton}
            </Box>
            {children}
          </StyledModal>
        </div>
      )}
    </>
  );
};

export default Modal;