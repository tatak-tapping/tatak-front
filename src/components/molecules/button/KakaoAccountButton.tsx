import TextButton from "components/atoms/button/TextButton";
import { BASE, PRIMARY } from "styles/colors";

const KakaoAccountButton = () => {
  return(
    <TextButton
    width="348px"
    height="43px"
    fontSize="16px"
    fontColor={PRIMARY[80]}
    backgroundColor={BASE[3]}
  >
    카카오로 로그인
  </TextButton>
   
  )
};

export default KakaoAccountButton;