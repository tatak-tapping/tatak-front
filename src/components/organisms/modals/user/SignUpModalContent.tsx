/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { postUser } from "api/auth";
import TextButton from "components/atoms/button/TextButton";
import { EyeOffIcon, EyeOnIcon, ReturnIcon } from "components/atoms/icon/Icon";
import Input from "components/atoms/input/Input";
import Label from "components/atoms/label/Label";
import { useDialog } from "context/Dialog";
import { useEffect, useState } from "react";
import { Box, Button, Flex , Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import { useForm, useWatch, FormProvider, FieldValues } from "react-hook-form";
import { DialogTypes } from "components/atoms/dialog/Dialog";
import { setSessionStorage } from "utils/storage";
import { useSetRecoilState } from "recoil";
import { tokenAtom, userAtom } from "modules/atom";
import instance from "api/instance";
import { LOGIN_TYPE, setTokenStorage } from "utils/storageUser";

interface SignModalContentProps {
  onClickLoginButton? : () => void;
  onClickCloseModal? :  () => void;
}

export interface IFormInputs extends FieldValues{
  email:string;
  nickname:string;
  password:string;
  passwordConfirm:string;
}

const SignUpModalContent = ({ onClickLoginButton, onClickCloseModal } : SignModalContentProps) => {

  const {showDialog, closeDialog} = useDialog();
  const [isPwdConfirmVisible, setIsPwdConfirmVisible] = useState(false);
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const setUserToken = useSetRecoilState(tokenAtom);
  const setUser = useSetRecoilState(userAtom);
  
  const onSubmit = async (data:IFormInputs) => {    
    const params = data;
    try {
      const { data } = await postUser(params);
      instance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      setTokenStorage(LOGIN_TYPE.SESSION, data);
      setUserToken(data.accessToken);
      setUser(data);
      
      onClickCloseModal();

      showDialog({
        type : DialogTypes.success,
        message : (
          <>
            <Text fontSize="24px" fontWeight="600" color={GRAY[2]}>
              회원가입 완료
            </Text>
            <Text mt="12px" fontSize="14px" color={GRAY[5]}>
              {data.nickname}님, 타닥에 오신 걸 환영해요!
            </Text>
            <Button onClick={closeDialog} width="76px" height="43px" fontSize="16px" backgroundColor={PRIMARY[80]} margin="20px">
              확인
            </Button>
          </>
        )
      });

    } catch (error) {
      showDialog({
        type : DialogTypes.error,
        message : (
          <>
            <Text>
              {error.status === 409 ? "이미 가입한 이력이 있는 이메일이에요." : "회원가입에 실패했습니다."}
            </Text>
            <Button onClick={closeDialog} width="76px" height="43px" fontSize="16px" backgroundColor={PRIMARY[80]} margin="20px">
              확인
            </Button>
          </>
        )
      });
    }
  }

  const methods = useForm<IFormInputs>({
    defaultValues:{
      email : "",
      nickname : "",
      password : "",
      passwordConfirm : ""
    },
    mode:"onChange"
  });

  const {
    control,
    setError,
    formState: {isSubmitting, isDirty, isValid, errors},
    setValue,
    watch,
    handleSubmit
  } = methods;

  const handleReturnNickname = () => {
    const date = new Date();
    setValue("nickname", `타닥이${date.getSeconds()}${date.getMilliseconds()}`);
  }

  const nickNameWatch = useWatch({control, name: "nickname"});
  const passwordWatch = useWatch({control, name: "password"});
  
  return(
    <Flex flexDirection="column" ml={20} mr={20}>
      <Box>
        <Text fontSize="24px" color={GRAY[2]} lineHeight="150%" fontWeight="600">
          회원가입
        </Text>
        <hr css={css`width: 100%; border : none; border-top: 1px solid ${GRAY[2]};`}/>
      </Box>
      <FormProvider {...methods} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mt={20}>
            <Label>E-mail</Label>
            <Input
              name="email"
              rules={{
                required:true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "정확한 이메일을 입력해주세요."
                }
              }}
              control={control}
              type="text"
              placeholder="이메일을 입력해주세요."
              />
          </Box>
          <Box mt={20}>
            <Label>닉네임</Label>
            <Input
              name="nickname"
              rules={{
                required:true, 
                minLength:{
                  value:2,
                  message:'최소 2자, 최대 10자까지 가능해요.'
                },
                maxLength:{
                  value:10, 
                  message:'최소 2자, 최대 10자까지 가능해요.'
                }
              }}
              control={control}
              type="text"
              counter={nickNameWatch.length + "/10"}
              placeholder="닉네임을 입력해주세요."
              comment="최소 2자, 최대 10자까지 가능해요."
              icon={
                <span onClick={() => handleReturnNickname()}>
                  <ReturnIcon />
                </span>
              }
             />
          </Box>
          <Box mt={20}>
            <Label>비밀번호</Label>
            <Input
              name="password"
              type={isPwdVisible ? "text" : "password"}
              rules={{
                required:true, 
                minLength:{
                  value:6,
                  message:'최소 6자리로 입력해주세요.'
                }}
              }
              control={control}
              placeholder="비밀번호를 입력해주세요."
              icon={isPwdVisible ?
                (<span onClick={() => setIsPwdVisible(!isPwdVisible)}>
                    <EyeOnIcon/>
                  </span>)
                :
                (<span onClick={() => setIsPwdVisible(!isPwdVisible)}>
                    <EyeOffIcon/>
                  </span>)
              } 
            />
          </Box>
          <Box mt={20}>
            <Label>비밀번호 확인</Label>
            <Input
              name="passwordConfirm"
              rules={{
                required:true, 
                minLength:{
                  value:6,
                  message:'최소 6자리로 입력해주세요.'
                },
                validate: (value) => {
                  if (value !== passwordWatch) return "비밀번호가 일치하지 않아요.";
                }
              }}
              control={control}
              type={isPwdConfirmVisible ? "text" : "password"}
              placeholder="다시 한 번 비밀번호를 입력해주세요."
              icon={isPwdConfirmVisible ?
                (<span onClick={() => setIsPwdConfirmVisible(!isPwdConfirmVisible)}>
                    <EyeOnIcon/>
                  </span>)
                :
                (<span onClick={() => setIsPwdConfirmVisible(!isPwdConfirmVisible)}>
                    <EyeOffIcon/>
                  </span>)
              }/>
          </Box>
          <Box mt={28}>
            <TextButton
              width="348px"
              height="43px"
              fontSize="16px"
              fontColor={BASE[3]}
              backgroundColor={PRIMARY[80]}
              onClick={handleSubmit(onSubmit)}
              disabled={!isDirty || !isValid}>
                회원가입
            </TextButton>
          </Box>
        </form>
      </FormProvider>
      <Box mt={28}sx={{borderTop : `1px solid ${GRAY[2]}`, paddingTop: `16px`, textAlign: `center`}}>
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