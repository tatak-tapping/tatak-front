/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import TextButton from "components/atoms/button/TextButton";
import Label from "components/atoms/label/Label";
import KakaoAccountButton from "components/molecules/button/KakaoAccountButton";
import { useSetRecoilState } from "recoil";
import { tokenAtom } from "modules/atom";
import { postCommonLogin } from "api/auth";
import { useDialog } from "context/Dialog";
import { DialogTypes } from "components/atoms/dialog/Dialog";
import Input from "components/atoms/input/Input";
import { EyeOffIcon, EyeOnIcon } from "components/atoms/icon/Icon";


interface LoginModalContentProps {
  onClickSignUpButton : () => void;
}

const LoginModalContent = ({ onClickSignUpButton }: LoginModalContentProps) => {
  const navigate = useNavigate();
  const {showDialog, closeDialog} = useDialog();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const setUseToken = useSetRecoilState(tokenAtom);

  const handleEmailChange = (e:any) => {
    const {target : {value}} = e;
    setEmail(value);
  };

  const handlePwdChange = (e:any) => {
    const {target : {value}} = e;
    setPassword(value);
  }

  const handlePwdToggle = () => {
    setIsPwdVisible(!isPwdVisible);
  }

  const handleSubmit = async () => {
    try{
      const { data } = await postCommonLogin({
        email : email,
        password : password
      });
      setUseToken(data.accessToken);
      navigate('/');

    }catch(err){
      showDialog({
        type : DialogTypes.error,
        message : (
          <>
            <Text>
              회원정보가 일치하지 않아요. 
            </Text>
            <Button
              onClick={closeDialog} 
              width="76px" 
              height="43px"
              fontSize="16px"
              
              backgroundColor={PRIMARY[80]}
              margin="20px">
              확인
            </Button>
          </>
        )
      });
    }
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
          type="email"
          onChange={handleEmailChange}
          placeholder="이메일을 입력해주세요."/>
      </Box>
      <Box mt={20}>
        <Label>Password</Label>
        <Input 
          type="password"
          onClick={handlePwdToggle}
          onChange={handlePwdChange}
          placeholder="비밀번호를 입력해주세요."
          icon={
            isPwdVisible ? <EyeOnIcon /> :<EyeOffIcon />
          } />
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