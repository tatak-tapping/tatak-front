import { css } from '@emotion/react';
import IconButton from 'components/atoms/button/IconButton';
import { CloseIcon } from 'components/atoms/icon/Icon';
import ProfileImage from 'components/atoms/profile/ProfileImage';
import UserProfileBubbleContent from 'components/organisms/bubbles/UserProfileBubbleContent';
import ConfirmPasswordModalContent from 'components/organisms/modals/user/ConfirmPasswordModalContent';
import ModifyUserModalContent from 'components/organisms/modals/user/ModifyUserModalContent';
import useModal from 'hooks/userModal';
import { userAtom } from 'modules/atom';
import { useEffect, useState } from 'react';
import { Flex } from 'rebass';
import { useRecoilState } from 'recoil';
import { JoinType } from 'utils/types';

const UserProfile = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);

  useEffect(() =>{
    if(user?.joinType === JoinType.KAKAO) setIsPasswordConfirm(true);
  }, []);

  useEffect(() => {

  },[isPasswordConfirm])

  const handleToggleBubble = () => {
    setIsBubbleVisible(!isBubbleVisible);
  };

  const handleCloseBubble = () => {
    setIsBubbleVisible(!isBubbleVisible);
  };


  const { handleOpenModal, handleCloseModal, renderModal } = useModal({
    width: '428px'
  });

  return (
   <>
    {renderModal(
      isPasswordConfirm ? 
      <ModifyUserModalContent onClickCloseModal={handleCloseModal}  isSocial={isPasswordConfirm}/>:
      <ConfirmPasswordModalContent onClickModifyButton={() => setIsPasswordConfirm(true)} onClickCloseModal={handleCloseModal}/>
      ,
      <IconButton width="32px" height="32px" border="none" onClick={handleCloseModal}>
        <CloseIcon />
      </IconButton>
    )}
    <Flex flexDirection="column" ml="16px">
      <ProfileImage src={user?.profileImageUrl ? user.profileImageUrl : '/images/profile_default.svg'} onClick={handleToggleBubble}/>
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