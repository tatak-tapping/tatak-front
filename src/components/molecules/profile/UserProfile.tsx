import ProfileImage from 'components/atoms/profile/ProfileImage';
import AccountMenu from 'components/organisms/GNB/AccountMenu';
import useAccessStatus from 'hooks/useAccessStatus';
import { useState } from 'react';
import { Flex } from 'rebass';
import { getLocalStorageItem } from 'utils/localStorage';

const UserProfile = () => {
  const { isAccess } = useAccessStatus();
  const [isUserMenuVisible, setUserMenuVisible] = useState(false);

  const handleToggleMenu = () => setUserMenuVisible(true);
  const handleCloseMenu = () => setUserMenuVisible(false);

  if (!isAccess) return null;
  const { avatarUrl } = getLocalStorageItem('user');
  return (
    <Flex flexDirection="column">
        <button type="button" onClick={handleToggleMenu}>
          <ProfileImage src={avatarUrl ?? undefined} />
        </button>
        <AccountMenu isVisible={isUserMenuVisible} onClose={handleCloseMenu} />
      </Flex>
  );
};

export default UserProfile;