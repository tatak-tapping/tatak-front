/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "components/atoms/input/Input";
import Label from "components/atoms/label/Label";
import LinkTab from "components/atoms/tab/LinkTab";
import AccountButton from "components/molecules/button/AccountButton";
import KakaoAccountButton from "components/molecules/button/KakaoAccountButton";
import { useState } from "react";
import { Box, Flex, Link } from "rebass";
import { GRAY } from "styles/colors";

const LoginModalContent = () => {
  const CLIENT_ID = "131af498a2f54aac0b0d5db709a9e518";
  const REDIRECT_URI =  "http://localhost:8080/users/login/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  return(
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
        <AccountButton />
        <Box mt={20} mb={20}>
          또는
        </Box>
        <Link href={KAKAO_AUTH_URL}>
          <KakaoAccountButton />
        </Link>
      </Box>
      <Box mt={16}>
        아직 타닥의 회원이 아니신가요?
      </Box>
      <Box>
      <LinkTab href="">
          회원가입
        </LinkTab>
      </Box>
    </Flex>
  );
};
export default LoginModalContent;