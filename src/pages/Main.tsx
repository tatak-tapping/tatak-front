
import { getArticle, getCategories, getCategoryWithTopic, getTopics } from 'api/common';
import Footer from 'components/organisms/GNB/Footer';
import Header from 'components/organisms/GNB/Header';
import FeedTemplate from 'components/templates/feed/FeedTemplate';
import TypoTemplate from 'components/templates/typo/TypoTemplate';
import { categoriesAtom, categoryWithTopicAtom, typoAtom } from 'modules/atom';
import { Suspense } from 'react';
import { useFullScreenHandle } from 'react-full-screen';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ICategory, ICategoryAndTopic, ITopic, ITypo } from 'utils/types';
const Main = () => {
  const fullScreen = useFullScreenHandle();
  const setTypo = useSetRecoilState<ITypo>(typoAtom);
  const setCategories = useSetRecoilState<ICategory[]>(categoriesAtom);
  const setCategoryWithTopic = useSetRecoilState<ICategoryAndTopic[]>(categoryWithTopicAtom);

  const getArticleAsync = async () => {
    const {data} = await getArticle();
    setTypo(data);
  };

  const getCategoriesAsync = async () => {
    const {data} = await getCategories();
    setCategories(data);
  };

  const getTopicsAsync = async () => {
    const {data} = await getCategoryWithTopic();
    setCategoryWithTopic(data);
  };

  getArticleAsync();
  getCategoriesAsync();
  getTopicsAsync();

  return  (
    <>
      <Header handleFullScreen={fullScreen}/>
      <TypoTemplate handleFullScreen={fullScreen}/>
      <FeedTemplate />
      <Footer />
    </>
  )
}

export default Main;
