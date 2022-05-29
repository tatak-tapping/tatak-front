import IconButton from "components/atoms/button/IconButton";
import { CloseIcon, FullScreenIcon, PencilIcon, SettingIcon, TypeIcon } from "components/atoms/icon/Icon";
import Logo from "components/atoms/logo/Logo";
import LoginButton from "components/molecules/button/LoginButton";
import MusicPlayer from "components/molecules/button/MusicPlayer";
import UserProfile from "components/molecules/profile/UserProfile";
import useModal from "hooks/userModal";
import { isOpenModalAtom, tokenAtom, typoModalAtom } from "modules/atom";
import { Box, Flex } from "rebass";
import { useRecoilState, useRecoilValue } from "recoil";
import { useCallback, useEffect, useState } from "react";
import TypeUploadModalContent from "../modals/typo/TypeUploadModalContent";
import TypeSettingModalContent from "../modals/typo/TypeSettingModalContent";
import TypoTypeBubbleContent from "../bubbles/TypoTypeBubbleContent";
import { FullScreenHandle, FullScreenProps, useFullScreenHandle } from "react-full-screen";

interface HeaderProps {
  handleFullScreen?: FullScreenHandle
}

const Header = ({handleFullScreen}:HeaderProps) => {
  const useToken = useRecoilValue(tokenAtom);
  const [modal, SetModal] = useRecoilState(typoModalAtom);
  const [typoContent, setTypoContent] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useRecoilState(isOpenModalAtom);

  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const handleCloseBubble = () => setIsBubbleVisible(isBubbleVisible);

  const handlerPencil = () => {
    SetModal("pencil")
    setIsOpenModal(true);
    handleOpenModal();
  }

  const handlerSetting = () => {
    SetModal("setting")
    setIsOpenModal(true);
    handleOpenModal();
  }
  
  const { handleOpenModal, handleCloseModal, renderModal } = useModal({
    width:  '700px'
  });
  
  return  (
    <>
    {renderModal(
      modal === "pencil" ? 
        <TypeUploadModalContent onClickCloseModal={handleCloseModal}/> 
      : 
        <TypeSettingModalContent onClickCloseModal={handleCloseModal}/> ,
      <IconButton width="32px" height="32px" border="none" onClick={handleCloseModal}>
        <CloseIcon />
      </IconButton>
    )}
    <Flex as='header' height={64} padding="0 24px" alignItems="center">
      <Logo />
      <Flex justifyContent="center" alignItems="center" marginLeft="auto">
        <Box>
          <MusicPlayer />
        </Box>
        <Box>
          <IconButton onClick={handlerSetting} margin="0 4px 0 0">
            <SettingIcon />
          </IconButton>
          <IconButton onClick={()=>setIsBubbleVisible(!isBubbleVisible)} margin="0 4px 0 0">
            <TypeIcon />
          </IconButton>
          <IconButton onClick={handlerPencil} margin="0 4px 0 0">
            <PencilIcon />
          </IconButton>
          <IconButton onClick={handleFullScreen.enter}>
            <FullScreenIcon />
          </IconButton>
        </Box>
        <Box>
          {
            useToken ? (
              <UserProfile />
            ):(
              <LoginButton />
            )
          }
        </Box>
      </Flex>
    </Flex>
      <TypoTypeBubbleContent
        isVisible={isBubbleVisible} 
        onClose={handleCloseBubble} 
      />
  </>
  )
}

export default Header;
