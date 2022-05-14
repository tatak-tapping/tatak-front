import styled from '@emotion/styled';
import IconButton from 'components/atoms/button/IconButton';
import { CloseIcon, PencilIcon } from 'components/atoms/icon/Icon';
import ProfileImage from 'components/atoms/profile/ProfileImage';
import UserProfileBubbleContent from 'components/organisms/bubbles/UserProfileBubbleContent';
import ConfirmModalContent from 'components/organisms/modals/user/ConfirmPasswordModalContent';
import useModal from 'hooks/userModal';
import { userAtom } from 'modules/atom';
import { useState } from 'react';
import { Box, Flex } from 'rebass';
import { useRecoilValue } from 'recoil';
import { GRAY } from 'styles/colors';

const Wrapper = styled.div`
  margin-top: 32px;
  height: 50px;
  padding-bottom: 16px;
  border-bottom: solid 1px ${GRAY[7]};
`;

interface UserProfileEditProps{
  onOpenModal:VoidFunction;
}

const UserProfileEdit = ({onOpenModal}:UserProfileEditProps) => {
  const user = useRecoilValue(userAtom);

  return (
  <>
   <Wrapper>
      <Box as="span">
        <ProfileImage src={user?.profileImageUrl ? user.profileImageUrl : '/images/profile_default.svg'}/>
      </Box>
      <Box as="span" textAlign="center" justifyContent="center" mr="8px">
        {user?.nickname}
      </Box>
      <Box as="span" mr="4px" onClick={onOpenModal}>
        <PencilIcon />
      </Box>
   </Wrapper>
  </>
  );
};

export default UserProfileEdit;