
import { ICategory, ITopic, ITypo } from 'utils/types';
import instance from './instance';

export const getArticle = (): Promise<{data: ITypo}> => 
  instance.get(`/articles/main`);

export const getCategories = (): Promise<{data:ICategory[]}> => 
  instance.get(`/categories`);

export const getTopics = (id:number): Promise<{data:ITopic[]}> => 
  instance.get(`/topics/category/${id}`);

