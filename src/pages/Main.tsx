
import { getArticle, getCategories, getTopics } from 'api/common';
import Footer from 'components/organisms/GNB/Footer';
import Header from 'components/organisms/GNB/Header';
import FeedTemplate from 'components/templates/feed/FeedTemplate';
import TypoTemplate from 'components/templates/typo/TypoTemplate';
import { categoriesAtom, topicsAtom, typoAtom } from 'modules/atom';
import { Suspense } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ICategory, ITopic, ITypo } from 'utils/types';
const Main = () => {
  const setTypo = useSetRecoilState<ITypo>(typoAtom);
  const setCategories = useSetRecoilState<ICategory[]>(categoriesAtom);

  const getArticleAsync = async () => {
    const {data} = await getArticle();
    setTypo(data);
  };

  const getCategoriesAsync = async () => {
    const {data} = await getCategories();
    setCategories(data);
  };
   
  getArticleAsync();
  getCategoriesAsync();

  return  (
    <>
      <Header />
      <TypoTemplate />
      <FeedTemplate />
      <Footer />
    </>
  )
}

export default Main;
