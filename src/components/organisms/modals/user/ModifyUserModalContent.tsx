/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import TextButton from "components/atoms/button/TextButton";
import ProfileImage from 'components/atoms/profile/ProfileImage';
import Label from "components/atoms/label/Label";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isAuthLoginAtom, tokenAtom, userAtom } from "modules/atom";
import { postCommonLogin, putUser } from "api/auth";
import { useForm, useWatch, FieldValues, FormProvider } from "react-hook-form";
import CheckBox from "components/atoms/checkbox/Checkbox";
import { getLocalStorage, getSessionStorage, setLocalStorage, setSessionStorage } from "utils/storage";
import instance, { DEAFULT_URL } from "api/instance";
import Input from "components/atoms/input/Input";
import { CameraIcon, EyeOffIcon, EyeOnIcon, ReturnIcon } from "components/atoms/icon/Icon";
import styled from "@emotion/styled";
import UserModifyBubbleContent from "components/organisms/bubbles/UserModifyBubbleContent";
import axios from "axios";
import { getUserStorage, setUserStorage } from "utils/storageUser";
import { DialogTypes } from "components/atoms/dialog/Dialog";
import { useDialog } from "context/Dialog";

interface  ModifyUserModalContentProps {
  onClickCloseModal? : () => void;
  isSocial: boolean;
}

interface IModifyFormInputs extends FieldValues{
  nickname:string;
  password:string;
  passwordConfirm:string;
  profileImage:string;
}

const ModifyUserModalContent = ({onClickCloseModal, isSocial}:ModifyUserModalContentProps) => {
  const {showDialog, closeDialog} = useDialog();
  const [user, setUser] = useRecoilState(userAtom);

  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isPwdConfirmVisible, setIsPwdConfirmVisible] = useState(false);
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    setUserStorage(user);
  },[user]);

  const handleToggleBubble = () => {
    setIsBubbleVisible(!isBubbleVisible);
  };

  const handleCloseBubble = () => {
    setIsBubbleVisible(!isBubbleVisible);
  }

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
    formState: {isDirty},
    setValue,
    handleSubmit
  } = methods;

  const onSubmit = async (params:IModifyFormInputs) => {
    if(selectedFile){
      profileSave();
    }
    try{
      const { data } = await putUser(params);
      setUser(data);
      console.log("user", user, data);
      onClickCloseModal();
      showDialog({
        type : DialogTypes.success,
        message : (
          <>
            <Text color={GRAY[2]}>???????????? ????????? ??????????????????.</Text>
            <Button onClick={closeDialog} width="76px" height="43px" fontSize="16px" backgroundColor={PRIMARY[80]} margin="20px">
              ??????
            </Button>
          </>
        )
      });
    }
    catch(err){
      console.log(err);
      showDialog({
        type : DialogTypes.success,
        message : (
          <>
            <Text color={GRAY[2]}>???????????? ????????? ??????????????????.</Text>
            <Button onClick={closeDialog} width="76px" height="43px" fontSize="16px" backgroundColor={PRIMARY[80]} margin="20px">
              ??????
            </Button>
          </>
        )
      });
    }
  };

  const profileSave = async () => {
    const formData = new FormData();
      formData.append("profileImage", selectedFile);
      try {
        await axios.put(`${DEAFULT_URL}/users/profile-image`, formData, {
          headers: {
            "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
            "Authorization" : `Bearer ${user.accessToken}`
          }
        });
      } catch(err){
        console.log(err);
        showDialog({
          type : DialogTypes.success,
          message : (
            <>
              <Text color={GRAY[2]}>???????????? ????????? ??????????????????.(????????? ??????)</Text>
              <Button onClick={closeDialog} width="76px" height="43px" fontSize="16px" backgroundColor={PRIMARY[80]} margin="20px">
                ??????
              </Button>
            </>
          )
        });
      }
  }

  const handleReturnNickname = () => {
    const date = new Date();
    setValue("nickname", `?????????${date.getSeconds()}${date.getMilliseconds()}`);
  }

  const onSelectFile = (e:any) => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined); return;
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
          ???????????? ??????
        </Text>
        <Text mt="10px" fontSize="14px" color={GRAY[5]}>
          ??? ????????? ????????? ??? ?????????.
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
        <Flex alignContent="center">
          <input id="file-upload-user" type='file' onChange={onSelectFile} style={{ display: "none" }}/>
          <WarpperProfile>
            <ProfileImage src={selectedFile ? preview : user?.profileImageUrl ? user?.profileImageUrl : '/images/profile_default.svg'} height="80px" width="80px"/>
          </WarpperProfile>
          <WrapperIcon onClick={handleToggleBubble}>
            <CameraIcon />
          </WrapperIcon>
        </Flex>
        <UserModifyBubbleContent 
            isVisible={isBubbleVisible} 
            onClose={handleCloseBubble} 
          />
        <Box mt="20px">
            <Label>?????????</Label>
            <Input
              name="nickname"
              rules={{
                required:true, 
                minLength:{
                  value:2,
                  message:'?????? 2???, ?????? 10????????? ????????????.'
                },
                maxLength:{
                  value:10, 
                  message:'?????? 2???, ?????? 10????????? ????????????.'
                }
              }}
              control={control}
              type="text"
              counter={nickNameWatch?.length + "/10"}
              placeholder="???????????? ??????????????????."
              comment="?????? 2???, ?????? 10????????? ????????????."
              icon={
                <span onClick={() => handleReturnNickname()}>
                  <ReturnIcon />
                </span>
              }
             />
          </Box>
          {!isSocial && (
          <>
          <Box mt={20}>
            <Label>????????????</Label>
            <Input
              name="password"
              type={isPwdVisible ? "text" : "password"}
              rules={{
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
          <Box mt={20}>
            <Label>???????????? ??????</Label>
            <Input
              name="passwordConfirm"
              rules={{
                minLength:{
                  value:6,
                  message:'?????? 6????????? ??????????????????.'
                },
                validate: (value) => {
                  if (value !== passwordWatch) return "??????????????? ???????????? ?????????.";
                }
              }}
              control={control}
              type={isPwdConfirmVisible ? "text" : "password"}
              placeholder="?????? ??? ??? ??????????????? ??????????????????."
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
          </>
          )}
          
          <Flex mt={28}>
            <TextButton width="170px" height="43px" fontSize="16px" fontColor={PRIMARY[100]} backgroundColor={BASE[3]} onClick={onClickCloseModal}>
              ??????
            </TextButton>
            <TextButton
              margin="0 0 0 8px" width="170px" height="43px" fontSize="16px" fontColor={BASE[3]} backgroundColor={PRIMARY[80]} onClick={handleSubmit(onSubmit)}>
              ????????????
            </TextButton>
          </Flex>  
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
  position: relative;
  z-index: 999;
  top:55px;
  left: -145px;
  svg{
    background-color:  ${PRIMARY[80]} !important;
    margin: 5px;
  }
`;

const WarpperProfile = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
  background-color: ${BASE[3]};
`;