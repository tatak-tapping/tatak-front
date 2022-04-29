import { getKakaoLogin } from "api/auth";
import instance from "api/common";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLocalStorageItem } from "utils/localStorage";

const Auth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getJWTAsync = async () => {
      const code = new URL(window.location.href).searchParams.get("code");
      const { data } = await getKakaoLogin(code);
      setLocalStorageItem('access_token_tatak', `Bearer ${data.token}`);
      setLocalStorageItem('user', data);
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