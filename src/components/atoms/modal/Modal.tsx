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
  padding?: string;
  onOpened?: VoidFunction;
  onClosed?: VoidFunction;
  closeButton?: React.ReactNode;
  children: React.ReactNode;
}

const StyledModal = styled.div<{
  width: string;
  padding: string;
  margin?: string;
}>`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: auto;
  box-shadow: 0px 0px 10px 0px #00000033;
  background-color: ${BASE[3]};
  * {
    background-color: ${BASE[3]};
  }
`;

const Modal = ({
  isVisible,
  width,
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
        <div
          css={css`
            ${modalBackStyle}
          `}
        >
          <StyledModal width={width} padding={padding}>
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
