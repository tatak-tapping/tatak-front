import { Box, Flex } from 'rebass';
import { useFullScreenHandle } from 'react-full-screen';

import Footer from 'components/organisms/GNB/Footer';
import Header from 'components/organisms/GNB/Header';

import { BASE } from 'styles/colors';

interface NoMatchProps {}

const NoMatch = (_: NoMatchProps) => {
  const handle = useFullScreenHandle();
  return (
    <Flex flexDirection="column" minWidth="1440px" height="100vh" backgroundColor={BASE}>
      <div>
        <Header handleFullScreen={handle} />
      </div>
      <Flex style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <img src="/images/404.svg" alt="" />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default NoMatch;
