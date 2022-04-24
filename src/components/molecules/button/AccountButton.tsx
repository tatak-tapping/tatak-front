import TextButton from "components/atoms/button/TextButton";
import { BASE, PRIMARY } from "styles/colors";

const AccountButton = () => {
  return(
    <TextButton
      width="348px"
      height="43px"
      fontSize="16px"
      fontColor={BASE[3]}
      backgroundColor={PRIMARY[80]}
    >
      로그인
    </TextButton>
  )
};

export default AccountButton;