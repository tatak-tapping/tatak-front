import TextButton from "components/atoms/button/TextButton";
import { Link } from "rebass";
import { BASE, PRIMARY } from "styles/colors";

const KakaoAccountButton = () => {
  const CLIENT_ID = "131af498a2f54aac0b0d5db709a9e518";
  const REDIRECT_URI =  "http://localhost:8080/users/login/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  return(
    <Link href={KAKAO_AUTH_URL}>
      <TextButton
        width="348px"
        height="43px"
        fontSize="16px"
        fontColor={PRIMARY[80]}
        backgroundColor={BASE[3]}
        >
        카카오로 로그인
      </TextButton>
    </Link>
  )
};

export default KakaoAccountButton;