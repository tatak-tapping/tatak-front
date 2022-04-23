import Footer from 'components/organisms/GNB/Footer';
import Header from 'components/organisms/GNB/Header';
import { Flex } from 'rebass';
import { BASE } from 'styles/colors';

const MyPage = () => {
  
  return  (
    <>
      <Flex flexDirection="column" minWidth="1440px" backgroundColor={BASE}>
        <Header />

        <Footer />
      </Flex>
    </>
  )
}

export default MyPage;
