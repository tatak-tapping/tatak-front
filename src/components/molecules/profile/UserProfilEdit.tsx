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
  color:${GRAY[4]};
  border-bottom: solid 1px ${GRAY[7]};
`;

interface UserProfileEditProps{
  onOpenModal:VoidFunction;
}

const UserProfileEdit = ({onOpenModal}:UserProfileEditProps) => {
  const user = useRecoilValue(userAtom);

  return (
  <Wrapper>
   <Flex>
      <Box mr="8px">
        <ProfileImage src={user?.profileImageUrl ? user.profileImageUrl : '/images/profile_default.svg'}/>
      </Box>
      <Box textAlign="center" justifyContent="center" mr="4px" lineHeight="29px">
        {user?.nickname}
      </Box>
      <Box onClick={onOpenModal}>
        <PencilIcon />
      </Box>
   </Flex>
  </Wrapper>
  );
};

export default UserProfileEdit;