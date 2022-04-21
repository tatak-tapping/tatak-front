import TextButton from "components/atoms/button/TextButton";
import { Flex } from 'rebass';

const LoginButton = () => {
  return (
    <Flex justifyContent="center" alignItems="center" marginLeft="auto">
      <Flex flexDirection="column">
        <TextButton 
          width='61px' 
          height="33px" 
          fontSize="14px"
        >
          로그인
        </TextButton>
      </Flex>
    </Flex>
  )
}

export default LoginButton;