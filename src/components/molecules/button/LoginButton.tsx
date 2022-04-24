import IconButton from "components/atoms/button/IconButton";
import TextButton from "components/atoms/button/TextButton";
import { CloseIcon } from "components/atoms/icon/Icon";
import LoginModalContent from "components/organisms/modals/LoginModalContent";
import useModal from "hooks/userModal";
import { Flex } from 'rebass';

const LoginButton = () => {
  const { handleOpenModal, handleCloseModal, renderModal } = useModal({
    width: '428px',
    height: '627px'
  });

  const handleLogin = () => handleOpenModal();

  return (
   <>
    {renderModal(
      <LoginModalContent />,
      <IconButton width="32px" height="32px" onClick={handleCloseModal}>
        <CloseIcon />
      </IconButton>
    )}
    <Flex justifyContent="center" alignItems="center" marginLeft="16px">
      <Flex flexDirection="column">
        <TextButton 
          width='62px' 
          height="33px" 
          fontSize="14px"
          onClick={handleLogin}
        >
          로그인
        </TextButton>
      </Flex>
    </Flex>
    </>
  )
}

export default LoginButton;