import IconButton from "components/atoms/button/IconButton";
import TextButton from "components/atoms/button/TextButton";
import { CloseIcon } from "components/atoms/icon/Icon";
import LoginModalContent from "components/organisms/modals/LoginModalContent";
import SignUpModalContent from "components/organisms/modals/SignUpModalContent";
import useModal from "hooks/userModal";
import { useEffect, useState } from "react";
import { Flex } from 'rebass';

const LoginButton = () => {
  const [isLogin, setIsLogin] = useState(null);
  const { handleOpenModal, handleCloseModal, renderModal } = useModal({
    width: '428px'
  });

  const handleOpenAnotherModal = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    if (isLogin) return;
    if (isLogin) handleOpenModal();
  }, [isLogin]);

  return (
   <>
    {renderModal(
      isLogin ? (
        <SignUpModalContent onClickLoginButton={handleOpenAnotherModal} onClickCloseModal={handleCloseModal}/>
      ): (
        <LoginModalContent onClickSignUpButton={handleOpenAnotherModal} onClickCloseModal={handleCloseModal}/>
      ),
      <IconButton width="32px" height="32px" border="none" onClick={handleCloseModal}>
        <CloseIcon />
      </IconButton>
    )}
    <Flex justifyContent="center" alignItems="center" marginLeft="16px">
      <Flex flexDirection="column">
        <TextButton 
          width='62px' 
          height="33px" 
          fontSize="14px"
          onClick={() => handleOpenModal()}
        >
          로그인
        </TextButton>
      </Flex>
    </Flex>
    </>
  )
}

export default LoginButton;