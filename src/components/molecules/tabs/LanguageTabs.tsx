import LinkTab from "components/atoms/tab/LinkTab";
import RadioTab from "components/atoms/tab/RadioTab";
import { Box, Flex } from "rebass";

export enum Languages {
  KOREAN = "한국어", 
  ENGLISH = "영어"
}

const LanguageTabs = () => {
  const languageArray = Object.values(Languages);

  const SegmentButton = languageArray.map((value, index) => {
    return (
      <>
        <RadioTab checked={false} name={value}  width="120px"/>
      </>
    );
  });

  return  (
    <div className="segment"> {SegmentButton} </div>
  )
}

export default LanguageTabs;
  ;
