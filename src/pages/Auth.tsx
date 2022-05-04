import { getKakaoLogin } from "api/auth";
import instance from "api/instance";
import { tokenAtom } from "modules/atom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { setLocalStorageItem } from "utils/localStorage";

const Auth = () => {
  const navigate = useNavigate();
  const setUseToken = useSetRecoilState(tokenAtom);

  useEffect(() => {
    const getJWTAsync = async () => {
      const code = new URL(window.location.href).searchParams.get("code");
      const {data} = await getKakaoLogin(code);
      console.log(data);
      // setLocalStorageItem('access_token_tatak', `Bearer ${data.token}`);
      // setLocalStorageItem('user', data);
      setUseToken(data.accessToken);
      navigate('/');
    };
    getJWTAsync();
  }, []);

  return (
    <>
    </>
  );
};

export default Auth;