
   import instance from './instance';

export const getShareCount = () => instance.get('/events/share-link');
export const increaseShareCount = () => instance.post('/events/share-link');


export const getArticle = (id: number) =>
  instance.get(`/article`);