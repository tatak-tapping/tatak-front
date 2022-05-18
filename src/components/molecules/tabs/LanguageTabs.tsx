import CheckboxTab from "components/atoms/tab/CheckboxTab";
import LinkTab from "components/atoms/tab/LinkTab";
import { useState } from "react";
import { Box, Flex } from "rebass";
import { TypoLanguage } from "utils/types";

const LanguageRadioTabs = () => {
  const languageArray = Object.values(TypoLanguage);
  const [ selected , setSeleted ] = useState(TypoLanguage.KOREAN);

  const handleChange = () => {
    //
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
          onClick={handleChange}/>
      ))
    }
    </>
  );
}

export default LanguageRadioTabs;
