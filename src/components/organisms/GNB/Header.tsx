import Logo from "components/atoms/logo/Logo";
import LoginButton from "components/molecules/button/LoginButton";
import UserProfile from "components/molecules/profile/UserProfile";
import HeaderMenuTabs from "components/molecules/tabs/HeaderMenuTabs";
import useModal from "hooks/userModal";
import { Flex } from "rebass";

const Header = () => {
  return  (
    <Flex as='header' height={64} padding="0 24px" alignItems="flex-end">
      <Logo />
      <HeaderMenuTabs />
      <Flex justifyContent="center" alignItems="center" marginLeft="auto">
        <UserProfile />
        <LoginButton />
      </Flex>
    </Flex>
  )
}

export default Header;
