import { postKakaoLogin } from "api/auth";
import instance from "api/common";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { setLocalStorageItem } from "utils/localStorage";

const Auth = () => {
  const history = useHistory();
  useEffect(() => {
    const getJWTAsync = async () => {
      const code = new URL(window.location.href).searchParams.get("code");
      const aa = await postKakaoLogin(code);

    };
    getJWTAsync();
  }, []);

  return (
    <>
      스피너 넣어야 할듯
    </>
  );
};

export default Auth;