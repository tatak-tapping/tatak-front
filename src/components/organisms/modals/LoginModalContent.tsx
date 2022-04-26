/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IUser, postCommonLogin } from "api/auth";
import IconButton from "components/atoms/button/IconButton";
import TextButton from "components/atoms/button/TextButton";
import { CloseIcon } from "components/atoms/icon/Icon";
import Input from "components/atoms/input/Input";
import Label from "components/atoms/label/Label";
import KakaoAccountButton from "components/molecules/button/KakaoAccountButton";
import useModal from "hooks/userModal";
import { useCallback, useState } from "react";
import { Box, Flex, Link } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import SignUpModalContent from "./SignUpModalContent";

const LoginModalContent = () => {
  const CLIENT_ID = "131af498a2f54aac0b0d5db709a9e518";
  const REDIRECT_URI =  "http://localhost:8080/users/login/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  const { handleOpenModal, handleCloseModal, renderModal } = useModal({
    width: '428px',
    height: '627px'
  });


  const handleSignUp = () => handleOpenModal();
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = (e:any) => {

  };

  const handleSubmit = async() => {
    console.log("ininint");
    const response = await postCommonLogin({
      email : email,
      password : password
    });
    
  };


  return(
  <>
    {renderModal(
      <SignUpModalContent />,
      <IconButton width="32px" height="32px" border="none" onClick={handleCloseModal}>
        <CloseIcon />
      </IconButton>
    )}
    
    <Flex flexDirection="column" ml={20} mr={20}>
      <h2>로그인</h2>
      <hr css={
        css`
          border: 1px solid ${GRAY[2]};
          width: "348px";
        `
      } />
      <Box mt={20}>
        <Label>Email</Label>
        <Input 
          width="348px"
          placeholder="텍스트를 입력해 주세요."
          onChange={handleEmailChange}
        />
      </Box>
      <Box mt={20}>
        <Label>Password</Label>
        <Input 
          width="348px"
          placeholder="텍스트를 입력해 주세요."
        />
      </Box>
      <Box mt={30}>
        <TextButton
          width="348px"
          height="43px"
          fontSize="16px"
          fontColor={BASE[3]}
          backgroundColor={PRIMARY[80]}
          onClick={handleSubmit}
          >
          로그인
        </TextButton>
      </Box>
      <Box mt={20} mb={20}>
          또는
      </Box>
      <Link href={KAKAO_AUTH_URL}>
        <KakaoAccountButton />
      </Link>
      <Box mt={16}>
        아직 타닥의 회원이 아니신가요?
      </Box>
      <Box>
        <Link>
          회원가입
        </Link>
      </Box>
    </Flex>
  </>

  );
};
export default LoginModalContent;