import IconButton from 'components/atoms/button/IconButton';
import TextButton from 'components/atoms/button/TextButton';
import { CloseIcon } from 'components/atoms/icon/Icon';
import LoginModalContent from 'components/organisms/modals/user/LoginModalContent';
import SignUpModalContent from 'components/organisms/modals/user/SignUpModalContent';
import useModal from 'hooks/userModal';
import { Flex } from 'rebass';

const MusicPlayer = () => {
  const handlerMusicPlayer = () => {};

  return (
    <>
      <Flex justifyContent="center" alignItems="center" marginLeft="16px">
        <Flex flexDirection="column">
          <TextButton width="62px" height="33px" fontSize="14px" onClick={handlerMusicPlayer}>
            음악
          </TextButton>
        </Flex>
      </Flex>
    </>
  );
};

export default MusicPlayer;
