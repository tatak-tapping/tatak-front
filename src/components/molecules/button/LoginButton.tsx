import IconButton from 'components/atoms/button/IconButton';
import TextButton from 'components/atoms/button/TextButton';
import { CloseIcon } from 'components/atoms/icon/Icon';
import FindUserModalContent from 'components/organisms/modals/user/FindUserModalContent';
import LoginModalContent from 'components/organisms/modals/user/LoginModalContent';
import SignUpModalContent from 'components/organisms/modals/user/SignUpModalContent';
import useModal from 'hooks/userModal';
import { userModalAtom } from 'modules/atom';
import { useEffect, useState } from 'react';
import { Flex } from 'rebass';
import { useRecoilState } from 'recoil';

const LoginButton = () => {
  const [modal, setModal] = useRecoilState(userModalAtom);
  const { handleOpenModal, handleCloseModal, renderModal } = useModal({
    width: '428px',
  });

  useEffect(() => {
    if (!modal) setModal('login');
  }, [modal]);

  return (
    <>
      {renderModal(
        modal === 'sign' ? (
          <SignUpModalContent
            onClickLoginButton={() => setModal('login')}
            onClickCloseModal={handleCloseModal}
          />
        ) : modal === 'login' ? (
          <LoginModalContent
            onOpenModal={() => handleOpenModal}
            onClickFindUserButton={() => setModal('find')}
            onClickSignUpButton={() => setModal('sign')}
            onClickCloseModal={handleCloseModal}
          />
        ) : (
          <FindUserModalContent onClickCloseModal={handleCloseModal} />
        ),
        <IconButton width="32px" height="32px" border="none" onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      )}
      <Flex justifyContent="center" alignItems="center" marginLeft="8px">
        <Flex flexDirection="column">
          <TextButton width="62px" height="33px" fontSize="14px" onClick={() => handleOpenModal()}>
            로그인
          </TextButton>
        </Flex>
      </Flex>
    </>
  );
};

export default LoginButton;
