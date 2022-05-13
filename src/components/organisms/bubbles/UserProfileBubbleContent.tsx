/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Bubble from "components/atoms/bubble/Bubble";
import UserMenuButton from "components/molecules/profile/UserMenuButton";
import UserProfileEdit from "components/molecules/profile/UserProfilEdit";
import { useEffect, useRef } from "react";
import { Box, Flex, Link, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";


const Wrapper = styled.div`
  position: relative;
`;

interface UserProfileBubbleProp  {
  isVisible: boolean;
  onClose: VoidFunction;
}

const UserProfileBubbleContent =({ isVisible, onClose }: UserProfileBubbleProp) => {
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

  return(
    <Wrapper ref={wrapperRef}>
      <Bubble width="200px" height="320px" right="16px" padding="0 16px" isVisible={isVisible}>
        <UserProfileEdit />
        <UserMenuButton />
        <Flex>
          <Text>Feedback</Text>
          <Text>Terms</Text>
          <Text>Privacy</Text>
        </Flex>
      </Bubble>
    </Wrapper>
  );
};
export default UserProfileBubbleContent;