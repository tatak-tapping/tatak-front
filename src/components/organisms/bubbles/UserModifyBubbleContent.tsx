/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Bubble from "components/atoms/bubble/Bubble";
import { CameraIcon } from "components/atoms/icon/Icon";
import UserMenuButton from "components/molecules/profile/UserMenuButton";
import UserProfileEdit from "components/molecules/profile/UserProfilEdit";
import { useEffect, useRef } from "react";
import { Box, Flex, Link, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";

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
          <StyledButton onClick={handleClickUpload}>
            이미지 업로드 
          </StyledButton>
          <StyledButton onClick={handleClickClear}>
            프로필 이미지 삭제
          </StyledButton>
        </Flex>
      </Bubble>
    </Wrapper>
  );
};
export default UserModifyBubbleContent;


const Wrapper = styled.div`
  position: relative;
`;


const StyledButton = styled.div`
  cursor: pointer;
  height: 30px;
  border-radius: 6px;
  color: ${GRAY[5]};
  font-size:14px;
  margin: 4px;
  padding-left: 8px;
  line-height: 30px;
  :hover{
    background-color: ${BASE[2]};
    color: ${PRIMARY[100]}
  }
`;