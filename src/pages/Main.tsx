import { getArticle, getCategories, getCategoryWithTopic, getTopics } from 'api/common';
import { getUserTypoFilter } from 'api/typo';
import Footer from 'components/organisms/GNB/Footer';
import Header from 'components/organisms/GNB/Header';
import FeedTemplate from 'components/templates/feed/FeedTemplate';
import TypoTemplate from 'components/templates/typo/TypoTemplate';
import {
  categoriesAtom,
  categoryWithTopicAtom,
  tokenAtom,
  typoAtom,
  typoOptionAtom,
} from 'modules/atom';
import { Suspense } from 'react';
import { useFullScreenHandle } from 'react-full-screen';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { setTypoOptionStorage } from 'utils/storageTypo';
import { ICategory, ICategoryAndTopic, IFontOption, ITopic, ITypo, ITypoOption } from 'utils/types';
const Main = () => {
  const fullScreen = useFullScreenHandle();
  const token = useRecoilValue(tokenAtom);
  const setTypo = useSetRecoilState<ITypo>(typoAtom);
  const setTypoOption = useSetRecoilState<ITypoOption>(typoOptionAtom);
  const setCategories = useSetRecoilState<ICategory[]>(categoriesAtom);
  const setCategoryWithTopic = useSetRecoilState<ICategoryAndTopic[]>(categoryWithTopicAtom);

  const getArticleAsync = async () => {
    const { data } = await getArticle();
    setTypo(data);
  };

  const getCategoriesAsync = async () => {
    const { data } = await getCategories();
    setCategories(data);
  };

  const getTopicsAsync = async () => {
    const { data } = await getCategoryWithTopic();
    setCategoryWithTopic(data);
  };

  const getUserTypoFilterAsync = async () => {
    const { data } = await getUserTypoFilter();
    setTypoOption(data);
    setTypoOptionStorage(data);
    console.log(data);
  };

  getArticleAsync();
  getCategoriesAsync();
  getTopicsAsync();
  if (token) getUserTypoFilterAsync();

  return (
    <>
      <Header handleFullScreen={fullScreen} />
      <TypoTemplate handleFullScreen={fullScreen} />
      <FeedTemplate />
      <Footer />
    </>
  );
};

export default Main;
