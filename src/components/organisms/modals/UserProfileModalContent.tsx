/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Flex, Link } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";

interface UserMenuBtnProps {
  isLast : boolean,
  onClick: VoidFunction,
  children: React.ReactNode;
}

const StyledMenu = styled.button<{isLast : boolean}>`
  width: 100px;
  height: 41px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  padding: 12px 24px;
  color: ${PRIMARY[40]};
  cursor: pointer;
  border : none;
  border-bottom : ${(props) => props.isLast ? 'none':
  `${GRAY[7]} 1px solid !important`
  };
  :hover{
    color:${PRIMARY[100]};
  }
  :active{
    color:${PRIMARY[100]};
  }
`;

const UserMenuBtn = ({
  isLast,
  onClick,
  children
} : UserMenuBtnProps) => {
  return (
    <StyledMenu isLast={isLast} onClick={onClick}>
      {children}
    </StyledMenu>
  )
}

const UserProfileModalContent = () => {
  const handleMyInfo = () => {};
  return(
    <Flex flexDirection="column">
      <UserMenuBtn 
        isLast={false}
        onClick={handleMyInfo}>
          내 정보
      </UserMenuBtn>
      <UserMenuBtn 
        isLast={false}
        onClick={handleMyInfo}>
          스크랩
      </UserMenuBtn>
      <UserMenuBtn 
        isLast={false}
        onClick={handleMyInfo}>
          내 이미지
      </UserMenuBtn>
      <UserMenuBtn 
        isLast={false}
        onClick={handleMyInfo}>
          문의하기
      </UserMenuBtn>
      <UserMenuBtn 
        isLast={true}
        onClick={handleMyInfo}>
          로그아웃
      </UserMenuBtn>
    </Flex>
  );
};
export default UserProfileModalContent;