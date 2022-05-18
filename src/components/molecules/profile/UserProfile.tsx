import { css } from '@emotion/react';
import IconButton from 'components/atoms/button/IconButton';
import { CloseIcon } from 'components/atoms/icon/Icon';
import ProfileImage from 'components/atoms/profile/ProfileImage';
import UserProfileBubbleContent from 'components/organisms/bubbles/UserProfileBubbleContent';
import ConfirmModalContent from 'components/organisms/modals/user/ConfirmPasswordModalContent';
import ModifyUserModalContent from 'components/organisms/modals/user/ModifyUserModalContent';
import useModal from 'hooks/userModal';
import { useState } from 'react';
import { Flex } from 'rebass';

const UserProfile = () => {
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const handleToggleBubble = () => {
    setIsBubbleVisible(!isBubbleVisible);
  };

  const handleCloseBubble = () => {
    setIsBubbleVisible(isBubbleVisible);
  };

  const [isModify, setIsModify] = useState(null);

  const { handleOpenModal, handleCloseModal, renderModal } = useModal({
    width: '428px'
  });

  const handleOpenAnotherModal = () => {
    setIsModify(!isModify);
  };

  return (
   <>
    {renderModal(
     <ModifyUserModalContent onClickCloseModal={handleCloseModal}/>,
      <IconButton width="32px" height="32px" border="none" onClick={handleCloseModal}>
        <CloseIcon />
      </IconButton>
    )}
    <Flex flexDirection="column" ml="16px">
      <ProfileImage 
        //src={profileImageUrl ? profileImageUrl : '/images/profile_default.svg'}
        src =  '/images/profile_default.svg'
        onClick={handleToggleBubble}/>
      <UserProfileBubbleContent 
        isVisible={isBubbleVisible} 
        onOpenModal={handleOpenModal}
        onClose={handleCloseBubble} 
      />
    </Flex>
   </>
  );
};

export default UserProfile;