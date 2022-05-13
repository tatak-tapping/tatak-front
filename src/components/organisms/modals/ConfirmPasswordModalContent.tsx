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
import { postCommonLogin, putUser } from "api/auth";
import { useForm, useWatch, FieldValues, FormProvider } from "react-hook-form";
import CheckBox from "components/atoms/checkbox/Checkbox";
import { setLocalStorage, setSessionStorage } from "utils/storage";
import instance from "api/instance";
import Input from "components/atoms/input/Input";
import { EyeOffIcon, EyeOnIcon, ReturnIcon } from "components/atoms/icon/Icon";

interface  ConfirmPasswordModalContentProps {
  onClickModifyButton? : () => void;
}

interface IModifyFormInputs extends FieldValues{
  nickname:string;
  password:string;
  passwordConfirm:string;
}

const ConfirmModalContent = ({onClickModifyButton}:ConfirmPasswordModalContentProps) => {

  const onSubmit =  (params:IModifyFormInputs) => {
    try{
      //const { data } = await putUser(params);
      //modal 넘기긱
      onClickModifyButton();
    }catch(err){
      console.log(err);
    }
  };

  const methods = useForm<IModifyFormInputs>({
    defaultValues:{
      password : ""
    },
    mode:"onChange"
  });

  const {
    control,
    formState: {isDirty, isValid},
    handleSubmit
  } = methods;

  return(
  <>    
    <Flex flexDirection="column" ml="20px" mr="20px">
    <FormProvider {...methods} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt="20px">
          <Text fontSize="24px" color={GRAY[2]} fontWeight="600">
            회원정보 수정
          </Text>
          <Text mt="10px" fontSize="14px" color={GRAY[5]}>
            비밀번호를 입력해주세요.
          </Text>
          <hr css={css`
            width: 100%;
            margin-top: 10px;
            border : none;
            border-top: 1px solid ${GRAY[2]};
          `}/>
        </Box>
          <Box mt={20}>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              rules={{
                required:true, 
                minLength:{
                  value:6,
                  message:'최소 6자리로 입력해주세요.'
                }}
              }
              control={control}
              placeholder="비밀번호를 입력해주세요."
            />
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
                회원정보 수정
            </TextButton>
          </Box>
        </form>
      </FormProvider>
    </Flex>
  </>
  );
};
export default ConfirmModalContent;