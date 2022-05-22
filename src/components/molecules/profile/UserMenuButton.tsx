import MenuButton from "components/atoms/button/MenuButton";
import { DialogTypes } from "components/atoms/dialog/Dialog";
import { useDialog } from "context/Dialog";
import { tokenAtom } from "modules/atom";
import { useNavigate } from "react-router-dom";
import { Button, Flex } from "rebass";
import { useSetRecoilState } from "recoil";
import { setLocalStorage } from "utils/storage";

const UserMenuButton = () => {

  const { showDialog, closeDialog } = useDialog();
  const navigate = useNavigate();
  const setTokenAtom = useSetRecoilState(tokenAtom);

  const handleMyInfo = () => {
      showDialog({
        type: DialogTypes.error,
        message: (
            <MenuButton  onClick={closeDialog}>
                스크랩
            </MenuButton>
        ),
    });
  };

  const handleLogout = () => {
    setTokenAtom(null);
    localStorage.removeItem('access_token_tatak');
    sessionStorage.removeItem('access_token_tatak');

    localStorage.removeItem('tatak_user');
    sessionStorage.removeItem('tatak_user');
    
    navigate('/');;
  }

  return(
    <Flex flexDirection="column">
      <MenuButton  onClick={() => navigate('/bookmark')}>
        책갈피
      </MenuButton>
      <MenuButton  onClick={() => navigate('/library')}>
        내서재
      </MenuButton>
      <MenuButton  onClick={() => navigate('/storage')}>
        내 서랍
      </MenuButton>
      <MenuButton onClick={handleLogout}>
        로그아웃
      </MenuButton>
  </Flex>
  );
}

export default UserMenuButton;