import { getKakaoLogin } from "api/auth";
import instance from "api/instance";
import { isAuthLoginAtom, tokenAtom, userAtom } from "modules/atom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { setLocalStorage, setSessionStorage } from "utils/storage";

const Auth = () => {
  const navigate = useNavigate();
  const setUserToken = useSetRecoilState(tokenAtom);
  const setUser = useSetRecoilState(userAtom);
  const authLogin = useRecoilValue(isAuthLoginAtom);

  useEffect(() => {
    const getJWTAsync = async () => {
      const code = new URL(window.location.href).searchParams.get("code");
      const {data} = await getKakaoLogin(code);

      if(authLogin){
        setSessionStorage("access_token_tatak", data.accessToken);
        setSessionStorage("tatak_user", data);
      } else{
        setLocalStorage("access_token_tatak", data.accessToken);
        setLocalStorage("tatak_user", data);
      }
      instance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

      setUserToken(data.accessToken);
      setUser(data);
     
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