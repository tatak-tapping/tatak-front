
import { getArticle } from 'api/common';
import Footer from 'components/organisms/GNB/Footer';
import Header from 'components/organisms/GNB/Header';
import FeedTemplate from 'components/templates/feed/FeedTemplate';
import TypoTemplate from 'components/templates/typo/TypoTemplate';
import { typoAtom } from 'modules/atom';
import { Suspense } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ITypo } from 'utils/types';
const Main = () => {
  const setTypo = useSetRecoilState<ITypo>(typoAtom);

  const getArticleAsync = async () => {
    const {data} = await getArticle();
    setTypo(data);
  };
   
  getArticleAsync();
  return  (
    <>
      <Header />
      <Suspense fallback="잠시만 기다료">
        <TypoTemplate />
      </Suspense>
      <FeedTemplate />
      <Footer />
    </>
  )
}

export default Main;
