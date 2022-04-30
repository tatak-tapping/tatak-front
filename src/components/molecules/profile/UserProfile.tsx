import { css } from '@emotion/react';
import IconButton from 'components/atoms/button/IconButton';
import { CloseIcon } from 'components/atoms/icon/Icon';
import ProfileImage from 'components/atoms/profile/ProfileImage';
import UserProfileModalContent from 'components/organisms/modals/UserProfileModalContent';
import useModal from 'hooks/userModal';
import { useState } from 'react';
import { Flex } from 'rebass';
import { getLocalStorageItem } from 'utils/localStorage';

const UserProfile = () => {
  const { profileImageUrl } = getLocalStorageItem('user');
  const { handleOpenModal, handleCloseModal, renderModal } = useModal({
    width: '136px',
    height: '221px',
    top: '60px',
    right:'24px',
    padding:"8px 18px",
  });

  const handleOnClick = () => handleOpenModal();
  return (
   <>
    {renderModal(
      <UserProfileModalContent />
    )}
    <Flex flexDirection="column">
      <ProfileImage 
        src={profileImageUrl ? profileImageUrl : '/images/profile_default.svg'}
        onClick={handleOnClick}/>
    </Flex>
   </>
  );
};

export default UserProfile;