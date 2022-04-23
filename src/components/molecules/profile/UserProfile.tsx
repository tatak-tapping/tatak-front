import ProfileImage from 'components/atoms/profile/ProfileImage';
import AccountMenu from 'components/organisms/GNB/AccountMenu';
import { useState } from 'react';
import { Flex } from 'rebass';

const UserProfile = () => {

  const handleToggleMenu = () => {

  };

  const handleCloseMenu = () => {

  }

  const avatarUrl = "";
  const isAccountMenuVisible = true;

  return (
    <Flex justifyContent="center" alignItems="center" marginLeft="auto">
      <Flex flexDirection="column">
        <button type="button" onClick={handleToggleMenu}>
          <ProfileImage src={avatarUrl ?? undefined} />
        </button>
        <AccountMenu isVisible={isAccountMenuVisible} onClose={handleCloseMenu} />
      </Flex>
    </Flex>
  );
};

export default UserProfile;