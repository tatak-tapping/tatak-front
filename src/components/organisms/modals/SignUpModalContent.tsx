/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {postCommonLogin, postUser } from "api/auth";
import TextButton from "components/atoms/button/TextButton";
import { EyeOffIcon, EyeOnIcon, ReturnIcon } from "components/atoms/icon/Icon";
import Input from "components/atoms/input/Input";
import { InputCommontType } from "components/atoms/input/InputBase";
import Label from "components/atoms/label/Label";
import KakaoAccountButton from "components/molecules/button/KakaoAccountButton";
import { useDialog } from "context/Dialog";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import { Box, Button, Flex, Link, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import { IUser } from "utils/types";
import { useForm, FormProvider } from "react-hook-form";
import { DialogTypes } from "components/atoms/dialog/Dialog";
import { setSessionStorage } from "utils/storage";
import { useSetRecoilState } from "recoil";
import { tokenAtom, userAtom } from "modules/atom";
import instance from "api/instance";
import { useNavigate } from "react-router-dom";

interface SignModalContentProps {
  onClickLoginButton : () => void;
}

interface IFormInputs {
  email:string;
  nickname:string;
  password:string;
  passwordConfirm:string;
}

const SignUpModalContent = ({ onClickLoginButton } : SignModalContentProps) => {

  const {showDialog, closeDialog} = useDialog();
  const navigate = useNavigate();
  const [isPwdConfirmVisible, setIsPwdConfirmVisible] = useState(false);
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const setUserToken = useSetRecoilState(tokenAtom);
  const setUser = useSetRecoilState(userAtom);

  const handleReturnNickname = () => {
    const date = new Date();
    //setNickname(`타닥이${date.getSeconds()}${date.getMilliseconds()}`);
  }

  const onSubmit = async(data:IFormInputs) => {
    console.log(data);
    const params = data;
    try {
      const { data } = await postUser(params);
      setSessionStorage("access_token_tatak", data.accessToken);
      setSessionStorage("tatak_user", data);
      instance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      setUserToken(data.accessToken);
      setUser(data);

      navigate('/');
      
    } catch (err) {
      console.log(err);
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
  }

  const methods = useForm<IFormInputs>();
  const {
    register,
    watch,
    setError,
    formState: { errors },
    handleSubmit
  } = methods;

  return(
    <Flex flexDirection="column" ml={20} mr={20}>
      <Box>
        <Text fontSize="24px" color={GRAY[2]} lineHeight="150%" fontWeight="600">
          회원가입
        </Text>
        <hr css={css`
          width: 100%;
          border : none;
          border-top: 1px solid ${GRAY[2]};
        `}/>
      </Box>
      <FormProvider {...methods} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mt={20}>
            <Label>E-mail</Label>
            <Input 
              {...register("email")}
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요."/>
          </Box>
          <Box mt={20}>
            <Label>닉네임</Label>
            <Input 
              {...register("nickname")}
              type="text"
              placeholder="닉네임을 입력해주세요."
              comment="최소 2자, 최대 10자까지 가능해요."
              name="nickname"
              icon={
                <span onClick={() => handleReturnNickname()}>
                  <ReturnIcon />
                </span>
              }/>
          </Box>
          <Box mt={20}>
            <Label>비밀번호</Label>
            <Input
              {...register("password")}
              name="password"
              type={isPwdVisible ? "text" : "password"}
              comment={errors.password && '최소 6자리로 입력해주세요.'}
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
            <Label>비밀번호 확인</Label>
            <Input 
              name="passwordConfirm"
              type={isPwdConfirmVisible ? "text" : "password"} 
              comment={errors?.passwordConfirm?.message}
              placeholder="다시 한 번 비밀번호를 입력해주세요."
              icon={isPwdConfirmVisible ?
                (<span onClick={() => setIsPwdConfirmVisible(!isPwdConfirmVisible)}>
                    <EyeOnIcon/>
                  </span>)
                :
                (<span onClick={() => setIsPwdConfirmVisible(!isPwdConfirmVisible)}>
                    <EyeOffIcon/>
                  </span>)
              } />
          </Box>
              <TextButton
                width="348px"
                height="43px"
                fontSize="16px"
                fontColor={BASE[3]}
                backgroundColor={PRIMARY[80]}
                disabled={!isComplete}
              >
                
              </TextButton>
          <Box mt={28}>
            <input type="submit" />
          </Box>
        </form>
      </FormProvider>
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