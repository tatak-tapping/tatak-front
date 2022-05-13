import { css } from '@emotion/react';
import IconButton from 'components/atoms/button/IconButton';
import { CloseIcon } from 'components/atoms/icon/Icon';
import ProfileImage from 'components/atoms/profile/ProfileImage';
import UserProfileBubbleContent from 'components/organisms/bubbles/UserProfileBubbleContent';
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
  return (
   <>
    <Flex flexDirection="column" ml="16px">
      <ProfileImage 
        //src={profileImageUrl ? profileImageUrl : '/images/profile_default.svg'}
        src =  '/images/profile_default.svg'
        onClick={handleToggleBubble}/>
      <UserProfileBubbleContent 
        isVisible={isBubbleVisible} 
        onClose={handleCloseBubble} 
      />
    </Flex>
   </>
  );
};

export default UserProfile;