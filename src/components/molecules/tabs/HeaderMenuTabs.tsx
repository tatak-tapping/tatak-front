import LinkTab from "components/atoms/tab/LinkTab";
import { Box, Flex } from "rebass";

const HeaderMenuTabs = () => {
  
  return  (
    <Flex>
      <Box>
        <LinkTab href="/" margin="">HOME</LinkTab>
      </Box>
      <Box>
        <LinkTab href="/MyPage">HISTORY</LinkTab>
      </Box>
    </Flex>
  )
}

export default HeaderMenuTabs;
