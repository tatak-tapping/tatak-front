import LinkTab from "components/atoms/tab/LinkTab";
import RadioTab from "components/atoms/tab/RadioTab";
import { Box, Flex } from "rebass";
import { TypoLanguage } from "utils/types";

const LanguageTabs = () => {
  const languageArray = Object.values(TypoLanguage);

  return (
    <>
    {
      languageArray.map((value, index) => (
        <RadioTab key={index} checked={false} name={value} width="120px"/>
      ))
    }
    </>
  );
}

export default LanguageTabs;
