/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Bubble from 'components/atoms/bubble/Bubble';
import UserMenuButton from 'components/molecules/profile/UserMenuButton';
import UserProfileEdit from 'components/molecules/profile/UserProfilEdit';
import { useEffect, useRef, useState } from 'react';
import { Box, Flex, Link, Text } from 'rebass';
import { BASE, GRAY, PRIMARY } from 'styles/colors';

import IconButton from 'components/atoms/button/IconButton';
import { CloseIcon } from 'components/atoms/icon/Icon';
import useModal from 'hooks/userModal';
import TatakTerm from 'components/organisms/modals/term/TatakTerm';

const Wrapper = styled.div`
  position: relative;
  z-index: 999;
`;

interface UserProfileBubbleProp {
  isVisible: boolean;
  onClose: VoidFunction;
  onOpenModal: VoidFunction;
}

const UserProfileBubbleContent = ({ isVisible, onClose, onOpenModal }: UserProfileBubbleProp) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isVisible]);

  const [modal, setModal] = useState(null);
  const { renderModal, handleOpenModal, handleCloseModal } = useModal({});

  useEffect(() => {
    handleOpenModal();
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Bubble
        width="200px"
        height="320px"
        right="16px"
        padding="0 16px"
        top=""
        isVisible={isVisible}
      >
        <UserProfileEdit onOpenModal={onOpenModal} />
        <UserMenuButton />
        <StyleFooter>
          <Text as="span" width={1 / 3} mr="8px">
            Feedback
          </Text>
          <Text
            as="span"
            width={1 / 3}
            mr="8px"
            onClick={() => {
              setModal('tatakterm');
              handleOpenModal();
            }}
          >
            Terms
          </Text>
          <Text as="span" width={1 / 3}>
            Privacy
          </Text>
        </StyleFooter>
      </Bubble>
      {modal &&
        renderModal(
          modal === 'tatakterm' && <TatakTerm />,
          <IconButton width="32px" height="32px" border="none" onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        )}
    </Wrapper>
  );
};
export default UserProfileBubbleContent;

const StyleFooter = styled.div`
  width: 100%;
  flex-direction: inherit;
  margin-top: 24px;
  font-size: 10px;
  line-height: 12px;
  color: ${GRAY[6]};
`;
