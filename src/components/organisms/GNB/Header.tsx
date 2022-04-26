import IconButton from "components/atoms/button/IconButton";
import { FullScreenIcon, PencilIcon, SettingIcon, TypeIcon } from "components/atoms/icon/Icon";
import Logo from "components/atoms/logo/Logo";
import LoginButton from "components/molecules/button/LoginButton";
import UserProfile from "components/molecules/profile/UserProfile";
import HeaderMenuTabs from "components/molecules/tabs/HeaderMenuTabs";
import { Box, Flex } from "rebass";

const Header = () => {
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
          <UserProfile />
          <LoginButton />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header;
