/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Bubble from "components/atoms/bubble/Bubble";
import MenuButton from "components/atoms/button/MenuButton";
import { CameraIcon } from "components/atoms/icon/Icon";
import UserMenuButton from "components/molecules/profile/UserMenuButton";
import UserProfileEdit from "components/molecules/profile/UserProfilEdit";
import { useEffect, useRef } from "react";
import { Box, Flex, Link, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";


const Wrapper = styled.div`
  position: relative;
`;

interface UserModifyBubbleProp  {
  isVisible: boolean;
  onClose: VoidFunction;
}

const UserModifyBubbleContent =({ isVisible, onClose }: UserModifyBubbleProp) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleClickClear = () => {
    (document as any).getElementById("file-upload-user").reset();
  };

  const handleClickUpload = () => {
    (document as any).getElementById("file-upload-user").click();
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
      <Bubble width="128px" height="82px" right="16px" padding="4px 4px" isVisible={isVisible}>
        <Flex flexDirection="column">
          <MenuButton onClick={handleClickUpload}>
            이미지 업로드 
          </MenuButton>
          <MenuButton onClick={handleClickClear}>
            프로필 이미지 삭제
          </MenuButton>
        </Flex>
      </Bubble>
    </Wrapper>
  );
};
export default UserModifyBubbleContent;