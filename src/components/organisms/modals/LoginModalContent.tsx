/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import TextButton from "components/atoms/button/TextButton";
import Label from "components/atoms/label/Label";
import KakaoAccountButton from "components/molecules/button/KakaoAccountButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isAuthLoginAtom, tokenAtom, userAtom } from "modules/atom";
import { postCommonLogin } from "api/auth";
import { useDialog } from "context/Dialog";
import { DialogTypes } from "components/atoms/dialog/Dialog";
import Input from "components/atoms/input/Input";
import { EyeOffIcon, EyeOnIcon } from "components/atoms/icon/Icon";
import CheckBox from "components/atoms/checkbox/Checkbox";
import { useEffect } from "react";
import { setLocalStorage, setSessionStorage } from "utils/storage";
import instance from "api/instance";


interface LoginModalContentProps {
  onClickSignUpButton : () => void;
}

const LoginModalContent = ({ onClickSignUpButton }: LoginModalContentProps) => {
  const navigate = useNavigate();
  const {showDialog, closeDialog} = useDialog();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const setUserToken = useSetRecoilState(tokenAtom);
  const setUser = useSetRecoilState(userAtom);
  const [ isAuthLogin , setIsAuthLogin ] = useRecoilState(isAuthLoginAtom);

  const handleEmailChange = (e:any) => {
    const {target : {value}} = e;
    setEmail(value);
  };

  const handlePwdChange = (e:any) => {
    const {target : {value}} = e;
    setPassword(value);
  }
  
  const handleCheckBox = () => setIsAuthLogin(!isAuthLogin);

  const handleSubmit = async () => {
    try{
      console.log(email, password);
      const { data } = await postCommonLogin({
        email : email,
        password : password
      });

     if(isAuthLogin){
        console.log(isAuthLogin, "local");
        setLocalStorage("access_token_tatak", data.accessToken);
        setLocalStorage("tatak_user", data);
      } else{
        console.log(isAuthLogin, "session");
        setSessionStorage("access_token_tatak", data.accessToken);
        setSessionStorage("tatak_user", data);
      }

      instance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      setUserToken(data.accessToken);
      setUser(data);

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
      <Text fontSize="24px" color={GRAY[2]} lineHeight="150%" fontWeight="600">
        로그인
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
      <Flex mt={20}>
        <CheckBox name="자동 로그인" checked={isAuthLogin} onClick={handleCheckBox}/>
        <Flex justifyContent="center" alignItems="center" marginLeft="auto">
          <Text onClick={() => alert('준비중')} fontSize="14px" color={PRIMARY[40]} fontWeight="600">
            회원정보 찾기
          </Text>
        </Flex>
      </Flex>
      <Box mt={28}>
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
      <Flex mt={20} mb={20}>
          <hr css={css`
            width: 158px;
            border : none;
            border-top: 1px solid ${GRAY[7]};
          `}/>
          <Text fontSize="12px" color={GRAY[5]}>
            또는
          </Text>
          <hr css={css`
            width: 158px;
            border : none;
            border-top: 1px solid ${GRAY[7]};
          `}/>
      </Flex>
      <KakaoAccountButton />
      <Box mt={28}sx={{
        borderTop : `1px solid ${GRAY[2]}`,
        paddingTop: `16px`,
        textAlign: `center`
      }}>
        <Text fontSize="12px" color={GRAY[5]}>
          아직 타닥의 회원이 아니신가요?
        </Text>
        <Text onClick={() => onClickSignUpButton()} fontSize="14px" color={PRIMARY[60]} fontWeight="600">
          회원가입
        </Text>
      </Box>
    </Flex>
  </>
  );
};
export default LoginModalContent;