/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { postCommonLogin } from "api/auth";
import { useAlert } from "context/Alert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import { setLocalStorageItem } from "utils/localStorage";
import TextButton from "components/atoms/button/TextButton";
import Input from "components/atoms/input/Input";
import Label from "components/atoms/label/Label";
import KakaoAccountButton from "components/molecules/button/KakaoAccountButton";


interface LoginModalContentProps {
  onClickSignUpButton : () => void;
}

const LoginModalContent = ({ onClickSignUpButton }: LoginModalContentProps) => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e:any) => {
    const {target : {value}} = e;
    setEmail(value);
  };

  const handlePwdChange = (e:any) => {
    const {target : {value}} = e;
    setPassword(value);
  }

  const handleSubmit = async () => {
    if(email.length <= 0 || password.length <= 0){
      alert("다시시도해");
      return;
    }
    const { data } = await postCommonLogin({
      email : email,
      password : password
    });
    setLocalStorageItem('access_token_tatak', `${data.token}`);
    setLocalStorageItem('user', data);
    navigate('/');
  };

  return(
  <>    
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
          onChange={handlePwdChange}
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
      <KakaoAccountButton />
      <Box mt={16}>
        아직 타닥의 회원이 아니신가요?
      </Box>
      <Box>
      <Button onClick={() => onClickSignUpButton()}>
        회원가입
      </Button>
      </Box>
    </Flex>
  </>

  );
};
export default LoginModalContent;