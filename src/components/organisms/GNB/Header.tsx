import IconButton from 'components/atoms/button/IconButton';
import {
  CloseIcon,
  FullScreenIcon,
  PencilIcon,
  SettingIcon,
  TypeIcon,
} from 'components/atoms/icon/Icon';
import Logo from 'components/atoms/logo/Logo';
import LoginButton from 'components/molecules/button/LoginButton';
import MusicPlayer from 'components/molecules/button/MusicPlayer';
import UserProfile from 'components/molecules/profile/UserProfile';
import TextButton from 'components/atoms/button/TextButton';
import useModal from 'hooks/userModal';
import { isOpenModalAtom, tokenAtom, typoModalAtom } from 'modules/atom';
import { Box, Flex, Text } from 'rebass';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useCallback, useEffect, useState } from 'react';
import TypeUploadModalContent from '../modals/typo/TypeUploadModalContent';
import TypeSettingModalContent from '../modals/typo/TypeSettingModalContent';
import TypoTypeBubbleContent from '../bubbles/TypoTypeBubbleContent';
import { FullScreenHandle } from 'react-full-screen';
import { useDialog } from 'context/Dialog';
import { DialogTypes } from 'components/atoms/dialog/Dialog';
import { BASE, PRIMARY } from 'styles/colors';

interface HeaderProps {
  handleFullScreen?: FullScreenHandle;
}

const Header = ({ handleFullScreen }: HeaderProps) => {
  const useToken = useRecoilValue(tokenAtom);
  const { showDialog, closeDialog } = useDialog();
  const [modal, SetModal] = useRecoilState(typoModalAtom);
  const [typoContent, setTypoContent] = useState<string>('');
  const [isOpenModal, setIsOpenModal] = useRecoilState(isOpenModalAtom);

  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const handleCloseBubble = () => setIsBubbleVisible(!isBubbleVisible);

  const handlerPencil = () => {
    if (!useToken) {
      showDialog({
        type: DialogTypes.info,
        message: (
          <>
            <Text>타닥에 가입하고 좋아하는 글을 올려보세요.</Text>
            <Flex>
              <TextButton
                onClick={closeDialog}
                width="76px"
                height="43px"
                fontSize="16px"
                color={PRIMARY[100]}
                backgroundColor={BASE[3]}
                border={`${PRIMARY[40]} 1px soild`}
                margin="20px"
              >
                취소
              </TextButton>
              <TextButton
                onClick={closeDialog}
                width="135px"
                height="43px"
                fontSize="16px"
                color={BASE[3]}
                backgroundColor={PRIMARY[80]}
                border={`${PRIMARY[40]} 1px soild`}
                margin="20px"
              >
                회원가입
              </TextButton>
            </Flex>
          </>
        ),
      });
      return;
    }
    SetModal('pencil');
    setIsOpenModal(true);
    handleOpenModal();
  };

  const handlerSetting = () => {
    SetModal('setting');
    setIsOpenModal(true);
    handleOpenModal();
  };

  const { handleOpenModal, handleCloseModal, renderModal } = useModal({
    //width: modal === "pencil " ?  '700px' : '776px'
  });

  return (
    <>
      {renderModal(
        modal === 'pencil' ? (
          <TypeUploadModalContent onClickCloseModal={handleCloseModal} />
        ) : (
          <TypeSettingModalContent onClickCloseModal={handleCloseModal} />
        ),
        <IconButton width="32px" height="32px" border="none" onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      )}
      <Flex as="header" height={64} padding="0 24px" alignItems="center">
        <Logo />
        <Flex justifyContent="center" alignItems="center" marginLeft="auto">
          <Box>{/* <MusicPlayer /> */}</Box>
          <Box>
            <IconButton onClick={handlerSetting} margin="0 4px 0 0">
              <SettingIcon />
            </IconButton>
            <IconButton onClick={() => setIsBubbleVisible(!isBubbleVisible)} margin="0 4px 0 0">
              <TypeIcon />
            </IconButton>
            <IconButton onClick={handlerPencil} margin="0 4px 0 0">
              <PencilIcon />
            </IconButton>
            <IconButton onClick={handleFullScreen.enter}>
              <FullScreenIcon />
            </IconButton>
          </Box>
          <Box>{useToken ? <UserProfile /> : <LoginButton />}</Box>
        </Flex>
      </Flex>
      <TypoTypeBubbleContent isVisible={isBubbleVisible} onClose={handleCloseBubble} />
    </>
  );
};

export default Header;
