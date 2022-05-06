
import instance from './instance';

export const getArticle = (id: number) => instance.get(`/article`);