
import { ICategory, ICategoryAndTopic, ITopic, ITypo } from 'utils/types';
import instance from './instance';

export interface getTypoArticleParams  {
  languages : string;
  topicCodes : string;
  lengths : string;
 }

export const getArticle = (data?:getTypoArticleParams): Promise<{data: ITypo}> => {
  if(data){
    return instance.get(`/articles/main?languages=${data.languages}&topicCodes=${data.topicCodes}&lengths=${data.lengths}`);
  }
  return instance.get(`/articles/main`);
}
  

export const getCategories = (): Promise<{data:ICategory[]}> => 
  instance.get(`/categories`);

export const getTopics = (id:number): Promise<{data:ITopic[]}> => 
  instance.get(`/topics/category/${id}`);

export const getCategoryWithTopic  = (): Promise<{data:ICategoryAndTopic[]}> => 
  instance.get(`/categories/all`);
