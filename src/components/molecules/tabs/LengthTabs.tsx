import LinkTab from "components/atoms/tab/LinkTab";
import { Box, Flex } from "rebass";
import { TypoLength } from "utils/types";

const LengthTabs = () => {
  const LengthArray = Object.values(TypoLength);

  return (
    <>
    {
      LengthArray.map((value, index) => (
        // <RadioTab key={index} checked={false} name={value} width="120px"/>
        <></>
      ))
    }
    </>
  );
}

export default LengthTabs;
