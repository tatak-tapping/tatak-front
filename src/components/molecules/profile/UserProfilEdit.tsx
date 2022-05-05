import styled from '@emotion/styled';
import { PencilIcon } from 'components/atoms/icon/Icon';
import ProfileImage from 'components/atoms/profile/ProfileImage';
import UserProfileBubbleContent from 'components/organisms/bubbles/UserProfileBubbleContent';
import useModal from 'hooks/userModal';
import { userAtom } from 'modules/atom';
import { useState } from 'react';
import { Box, Flex } from 'rebass';
import { useRecoilValue } from 'recoil';
import { GRAY } from 'styles/colors';

const Wrapper = styled.div`
  margin-top: 32px;
  height: 50px;
  border-bottom: solid 1px ${GRAY[7]};
`;

const UserProfileEdit = () => {
  const user = useRecoilValue(userAtom);

  //if(!user) return;
  return (
   <Wrapper>
     <Flex>
      {/* <Box width={1/3}>
        <ProfileImage src={user.profileImageUrl ? user.profileImageUrl : '/images/profile_default.svg'}/>
      </Box>
      <Box width={1/3} textAlign="center" justifyContent="center">
        {user.nickname}
      </Box>
      <Box width={1/3}>
        <PencilIcon/>
      </Box> */}
     </Flex>
   </Wrapper>
  );
};

export default UserProfileEdit;