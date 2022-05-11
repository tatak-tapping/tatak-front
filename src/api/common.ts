
import { TlsOptions } from 'tls';
import { ICategory, ITopic, ITypo, TypoLanguage, TypoLength } from 'utils/types';
import instance from './instance';

interface GetArticleParams {
  languages : TypoLanguage[];
  categoryCodes :ICategory[];
  topicCodes : ITopic[];
  lengths : TypoLength[];
}

export const getArticle = (params? : GetArticleParams): Promise<{data: ITypo}> => 
  instance.get(`/articles/main?languages=${params.languages.toString()}&categoryCodes=${params.categoryCodes.toString()}&topicCodes=${params.topicCodes.toString()}&lengths=${params.lengths.toString()}`);

export const getCategories = (): Promise<{data:ICategory[]}> => 
  instance.get(`/categories`);

export const getTopics = (id:number): Promise<{data:ITopic[]}> => 
  instance.get(`/topics/category/${id}`);

  