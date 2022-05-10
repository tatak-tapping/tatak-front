import LinkTab from "components/atoms/tab/LinkTab";
import RadioTab from "components/atoms/tab/RadioTab";
import { Box, Flex } from "rebass";

export enum Languages {
  SHORT = "짧은 글",
  MIDDLE = "중간 글",
  LONG = "긴 글", 
}

const LengthTabs = () => {
  const languageArray = Object.values(Languages);

  const SegmentButton = languageArray.map((value, index) => {
    return (
      <>
        <RadioTab checked={false} name={value} width="80px"/>
      </>
    );
  });

  return  (
    <div className="segment"> {SegmentButton} </div>
  )
}

export default LengthTabs;
  ;
