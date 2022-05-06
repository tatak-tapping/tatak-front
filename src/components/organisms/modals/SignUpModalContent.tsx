/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {postCommonLogin } from "api/auth";
import TextButton from "components/atoms/button/TextButton";
import { EyeOffIcon, EyeOnIcon } from "components/atoms/icon/Icon";
import Input from "components/atoms/input/Input";
import Label from "components/atoms/label/Label";
import KakaoAccountButton from "components/molecules/button/KakaoAccountButton";
import { useDialog } from "context/Dialog";
import { useCallback, useState } from "react";
import { Box, Flex, Link, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";

interface SignModalContentProps {
  onClickLoginButton : () => void;
}

const SignUpModalContent = ({ onClickLoginButton } : SignModalContentProps) => {

  const {showDialog, closeDialog} = useDialog();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const handleEmailChange = (e:any) => {
    const {target : {value}} = e;
    setEmail(value);
  };

  const handleNicknameChange = (e:any) => {
    const {target : {value}} = e;
    setNickname(value);
  }

  const handlePwdChange = (e:any) => {
    const {target : {value}} = e;
    setPassword(value);
  }

  const handleSubmit = () =>{

  }

  return(
    <Flex flexDirection="column" ml={20} mr={20}>
    <Text fontSize="24px" color={GRAY[2]} lineHeight="150%" fontWeight="600">
     회원가입
    </Text>
    <hr css={css`
      width: 100%;
      border : none;
      border-top: 1px solid ${GRAY[2]};
    `}/>
    <Box mt={20}>
      <Label>Email</Label>
      <Input 
        type="email"
        onChange={handleEmailChange}
        placeholder="이메일을 입력해주세요."/>
    </Box>
    <Box mt={20}>
      <Label>Email</Label>
      <Input 
        type="text"
        onChange={handleNicknameChange}
        placeholder="닉네임을 입력해주세요."/>
    </Box>
    <Box mt={20}>
      <Label>Password</Label>
      <Input 
        type={isPwdVisible ? "text" : "password"} 
        onChange={handlePwdChange}
        placeholder="비밀번호를 입력해주세요."
        icon={isPwdVisible ?
          (<span onClick={() => setIsPwdVisible(!isPwdVisible)}>
              <EyeOnIcon/>
            </span>)
          :
          (<span onClick={() => setIsPwdVisible(!isPwdVisible)}>
              <EyeOffIcon/>
            </span>)
        } />
    </Box>
    <Box mt={20}>
      <Label>Password</Label>
      <Input 
        type={isPwdVisible ? "text" : "password"} 
        onChange={handlePwdChange}
        placeholder="비밀번호를 입력해주세요."
        icon={isPwdVisible ?
          (<span onClick={() => setIsPwdVisible(!isPwdVisible)}>
              <EyeOnIcon/>
            </span>)
          :
          (<span onClick={() => setIsPwdVisible(!isPwdVisible)}>
              <EyeOffIcon/>
            </span>)
        } />
    </Box>
    <Box mt={28}>
      <TextButton
        width="348px"
        height="43px"
        fontSize="16px"
        fontColor={BASE[3]}
        backgroundColor={PRIMARY[80]}
        onClick={handleSubmit}
      >
        회원가입
      </TextButton>
    </Box>
    <Box mt={28}sx={{
      borderTop : `1px solid ${GRAY[2]}`,
      paddingTop: `16px`,
      textAlign: `center`
    }}>
      <Text fontSize="12px" color={GRAY[5]}>
        이미 가입한 계정이 있으신가요?
      </Text>
      <Text onClick={() => onClickLoginButton()} fontSize="14px" color={PRIMARY[60]} fontWeight="600">
        로그인
      </Text>
    </Box>
  </Flex>
  );
};
export default SignUpModalContent;