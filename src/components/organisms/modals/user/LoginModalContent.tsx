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
import { isAuthLoginAtom, isOpenModalAtom, tokenAtom, userAtom } from "modules/atom";
import { postCommonLogin } from "api/auth";
import { useDialog } from "context/Dialog";
import { DialogTypes } from "components/atoms/dialog/Dialog";
import { useForm, FieldValues, FormProvider } from "react-hook-form";
import CheckBox from "components/atoms/checkbox/Checkbox";
import { setLocalStorage, setSessionStorage } from "utils/storage";
import instance from "api/instance";
import Input from "components/atoms/input/Input";
import { EyeOffIcon, EyeOnIcon } from "components/atoms/icon/Icon";
import { LOGIN_TYPE, setTokenStorage } from "utils/storageUser";


interface LoginModalContentProps {
  onClickFindUserButton? : () => void;
  onClickSignUpButton? : () => void;
  onClickCloseModal? : () => void;
  onOpenModal? :() => void;
}

interface ILoginFormInputs extends FieldValues {
  email:string;
  password:string;
}

const LoginModalContent = ({ onOpenModal, onClickFindUserButton, onClickSignUpButton, onClickCloseModal }: LoginModalContentProps) => {
  const {showDialog, closeDialog} = useDialog();
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const setUserToken = useSetRecoilState(tokenAtom);
  const [isOpenModal, setIsOpenModal] = useRecoilState(isOpenModalAtom);
  const setUser = useSetRecoilState(userAtom);
  const [ isAuthLogin , setIsAuthLogin ] = useRecoilState(isAuthLoginAtom);

  const handleFindAndOpen = () => {
    onOpenModal();
    onClickFindUserButton();
  }
  
  const onSubmit = async (params:ILoginFormInputs) => {
    try{
      const { data } = await postCommonLogin(params);
      instance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
      setTokenStorage(isAuthLogin ? LOGIN_TYPE.LOCAL : LOGIN_TYPE.SESSION, data);
      setUserToken(data.accessToken);
      setUser(data);
      onClickCloseModal();

    }catch(err){
      onClickCloseModal();
      showDialog({
        type : DialogTypes.error,
        message : (
          <>
            <Text>??????????????? ???????????? ?????????. </Text>
            <Flex>
            <Button 
            onClick={closeDialog} 
            width="76px" height="43px" fontSize="16px" backgroundColor={PRIMARY[80]} margin="20px">
              ??????
            </Button>
            <Button 
              onClick={handleFindAndOpen} padding="12px 24px" fontSize="16px" backgroundColor={PRIMARY[80]} margin="20px">
              ???????????? ??????
            </Button>
            </Flex>
          </>
        )
      });
    }
  };


  const methods = useForm<ILoginFormInputs>({
    defaultValues:{
      email : "",
      password : ""
    },
    mode:"onChange"
  });

  const {
    control,
    formState: {isSubmitting, isDirty, isValid, errors},
    handleSubmit
  } = methods;

  return(
  <>    
    <Flex flexDirection="column" ml="20px" mr="20px">
    <FormProvider {...methods} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt="20px">
          <Text fontSize="24px" color={GRAY[2]} lineHeight="150%" fontWeight="600">
            ?????????
          </Text>
          <hr css={css`
            width: 100%;
            margin-top: 10px;
            border : none;
            border-top: 1px solid ${GRAY[2]};
          `}/>
        </Box>
        <Box mt="20px">
          <Label>E-mail</Label>
          <Input
              name="email"
              rules={{
                required:true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "????????? ???????????? ??????????????????."
                }
              }}
              control={control}
              type="text"
              placeholder="???????????? ??????????????????."
            />
        </Box>
        <Box mt="20px">
          <Label>Password</Label>
          <Input
              name="password"
              type={isPwdVisible ? "text" : "password"}
              rules={{
                required:true, 
                minLength:{
                  value:6,
                  message:'?????? 6????????? ??????????????????.'
                }}
              }
              control={control}
              placeholder="??????????????? ??????????????????."
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
        <Flex mt="20px">
          <CheckBox name="?????? ?????????" checked={isAuthLogin} onClick={() => setIsAuthLogin(!isAuthLogin)}/>
          <Flex justifyContent="center" alignItems="center" marginLeft="auto">
            <Text onClick={() => onClickFindUserButton()} fontSize="14px" color={PRIMARY[40]} fontWeight="600">
              ???????????? ??????
            </Text>
          </Flex>
        </Flex>
        <Box mt="28px">
          <TextButton
            width="348px"
            height="43px"
            fontSize="16px"
            fontColor={BASE[3]}
            backgroundColor={PRIMARY[80]}
            onClick={handleSubmit(onSubmit)}
          >
            ?????????
          </TextButton>
        </Box>
        </form>
      </FormProvider>
        <Flex mt="20px" mb="20px">
            <hr css={css`
              width: 158px;
              border : none;
              border-top: 1px solid ${GRAY[7]};
            `}/>
            <Text fontSize="12px" color={GRAY[5]}>
              ??????
            </Text>
            <hr css={css`
              width: 158px;
              border : none;
              border-top: 1px solid ${GRAY[7]};
            `}/>
        </Flex>
        <KakaoAccountButton />
        <Box mt="28px" sx={{
          borderTop : `1px solid ${GRAY[2]}`,
          paddingTop: `16px`,
          textAlign: `center`
        }}>
          <Text fontSize="12px" color={GRAY[5]}>
            ?????? ????????? ????????? ????????????????
          </Text>
          <Text onClick={() => onClickSignUpButton()} fontSize="14px" color={PRIMARY[60]} fontWeight="600">
            ????????????
          </Text>
        </Box>
    </Flex>
  </>
  );
};
export default LoginModalContent;