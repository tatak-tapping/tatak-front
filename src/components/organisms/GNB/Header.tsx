import IconButton from "components/atoms/button/IconButton";
import { FullScreenIcon, PencilIcon, SettingIcon, TypeIcon } from "components/atoms/icon/Icon";
import Logo from "components/atoms/logo/Logo";
import LoginButton from "components/molecules/button/LoginButton";
import MusicPlayer from "components/molecules/button/MusicPlayer";
import UserProfile from "components/molecules/profile/UserProfile";
import { tokenAtom } from "modules/atom";
import { Box, Flex } from "rebass";
import { useRecoilValue } from "recoil";

const Header = () => {
  const useToken = useRecoilValue(tokenAtom);

  const handlerFullScreen = () => {

  };

  const handlerPencil = () => {

  }

  const handlerType = () => {

  }

  const handlerSetting = () => {

  }

  return  (
    <Flex as='header' height={64} padding="0 24px" alignItems="center">
      <Logo />
      <Flex justifyContent="center" alignItems="center" marginLeft="auto">
        <Box>
          <MusicPlayer />
        </Box>
        <Box>
          <IconButton onClick={handlerFullScreen}>
            <FullScreenIcon />
          </IconButton>
          <IconButton onClick={handlerPencil}>
            <PencilIcon />
          </IconButton>
          <IconButton onClick={handlerType}>
            <TypeIcon />
          </IconButton>
          <IconButton onClick={handlerSetting}>
            <SettingIcon />
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
  )
}

export default Header;
