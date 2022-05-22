/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import TextButton from "components/atoms/button/TextButton";
import ProfileImage from 'components/atoms/profile/ProfileImage';
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
import { CameraIcon, EyeOffIcon, EyeOnIcon, ReturnIcon } from "components/atoms/icon/Icon";
import styled from "@emotion/styled";
import UserModifyBubbleContent from "components/organisms/bubbles/UserModifyBubbleContent";

interface  ModifyUserModalContentProps {
  onClickCloseModal? : () => void;
}

interface IModifyFormInputs extends FieldValues{
  nickname:string;
  password:string;
  passwordConfirm:string;
  profileImage:string;
}

const ModifyUserModalContent = ({onClickCloseModal}:ModifyUserModalContentProps) => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isPwdConfirmVisible, setIsPwdConfirmVisible] = useState(false);
  const [user, setUser] = useRecoilState(userAtom);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string>();


  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const handleToggleBubble = () => {
    setIsBubbleVisible(!isBubbleVisible);
  };

  const handleCloseBubble = () => {
    setIsBubbleVisible(isBubbleVisible);
  }

  const onSubmit = async (params:IModifyFormInputs) => {
    try{
      const { data } = await putUser(params);
      setUser(data);
      onClickCloseModal();
    }catch(err){
      console.log(err);
    }
  };

  const methods = useForm<IModifyFormInputs>({
    defaultValues:{
      nickname : user.nickname,
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

  const onSelectFile = (e:any) => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }

    setSelectedFile(e.target.files[0])
}

  const nickNameWatch = useWatch({control, name: "nickname"});
  const passwordWatch = useWatch({control, name: "password"});
  
  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

  return(
  <>    
    <Flex flexDirection="column" ml="20px" mr="20px">
      <Box mt="20px">
        <Text fontSize="24px" color={GRAY[2]} fontWeight="600">
          회원정보 수정
        </Text>
        <Text mt="10px" fontSize="14px" color={GRAY[5]}>
          내 정보를 수정할 수 있어요.
        </Text>
        <hr css={css`
          width: 100%;
          margin-top: 10px;
          border : none;
          border-top: 1px solid ${GRAY[2]};
        `}/>
      </Box>
      <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <input name="" type='file' onChange={onSelectFile}/>
          <WarpperProfile>
            <ProfileImage src={selectedFile && preview} height="80px" width="80px"/>
          </WarpperProfile>
          <Box onClick={handleToggleBubble}>
            <CameraIcon />
          </Box>
          <UserModifyBubbleContent 
            isVisible={isBubbleVisible} 
            onClose={handleCloseBubble} 
          />
        </Box>
        <Box mt="20px">
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
                수정하기
            </TextButton>
          </Box>
        </form>
      </FormProvider>
    </Flex>
  </>
  );
};
export default ModifyUserModalContent;

const WrapperIcon = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${PRIMARY[80]};
  border-radius: 50%;
  position: absolute;
  z-index: 999;
`;

const WarpperProfile = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* border: 2px solid ${PRIMARY[100]}; */
  background-color: ${BASE[3]};
`;