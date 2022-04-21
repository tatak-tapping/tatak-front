import Logo from "components/atoms/logo/Logo";
import LoginButton from "components/molecules/button/LoginButton";
import UserProfile from "components/molecules/profile/UserProfile";
import { Flex } from "rebass";

const Header = () => {
  
  return  (
    <Flex padding="10px 240px 10px 160px" alignItems="flex-end">
      <Logo />
      <UserProfile />
      <LoginButton />
    </Flex>
  )
}

export default Header;
