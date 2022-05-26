import CheckboxTab from "components/atoms/tab/CheckboxTab";
import LinkTab from "components/atoms/tab/LinkTab";
import { useState } from "react";
import { Box, Flex } from "rebass";
import { TypoLanguage } from "utils/types";

const LanguageRadioTabs = () => {
  const languageArray = Object.values(TypoLanguage);
  const [ selected , setSeleted ] = useState(TypoLanguage.KOREAN);

  const handleCheckboxChange = (value:string) => {
    setSeleted(value === "한국어" ? TypoLanguage.KOREAN : TypoLanguage.ENGLISH);
  }
  return (
    <>
    {
      languageArray.map((value, index) => (
        <CheckboxTab
          width="120px"
          key={index} 
          checked={selected === value} 
          name={value}
          onClick={() => handleCheckboxChange(value)}/>
      ))
    }
    </>
  );
}

export default LanguageRadioTabs;
