import IconButton from "components/atoms/button/IconButton";
import { CloseIcon, FullScreenIcon, PencilIcon, SettingIcon, TypeIcon } from "components/atoms/icon/Icon";
import Logo from "components/atoms/logo/Logo";
import LoginButton from "components/molecules/button/LoginButton";
import MusicPlayer from "components/molecules/button/MusicPlayer";
import UserProfile from "components/molecules/profile/UserProfile";
import useModal from "hooks/userModal";
import { tokenAtom } from "modules/atom";
import { Box, Flex } from "rebass";
import { useRecoilValue } from "recoil";
import TypeTypeModalContent from "../modals/TypeTypeModalContent";

const Header = () => {
  const useToken = useRecoilValue(tokenAtom);

  const handlerFullScreen = () => {

  };

  const handlerPencil = () => {

  }

  const handlerType = () => {

  }

  const handlerSetting = () => {
    handleOpenModal();
  }
  
  const { handleOpenModal, handleCloseModal, renderModal } = useModal({
    width: '480px',
    height: '657px'
  });

  return  (
    <>
    {renderModal(
      <TypeTypeModalContent />,
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
          <IconButton onClick={handlerType} margin="0 4px 0 0">
            <TypeIcon />
          </IconButton>
          <IconButton onClick={handlerPencil} margin="0 4px 0 0">
            <PencilIcon />
          </IconButton>
          <IconButton onClick={handlerFullScreen}>
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
    </>
  )
}

export default Header;
