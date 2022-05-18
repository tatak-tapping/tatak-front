import { categoriesAtom } from 'modules/atom';
import { getCategoriesSelector } from 'modules/selector';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { ICategory } from 'utils/types';

const useFetchCategories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [categories, setCategories] = useRecoilState<ICategory[]>(categoriesAtom);

  const response = useRecoilValueLoadable(getCategoriesSelector);

  const requestFetchCategories = useCallback((): void => {
    if (categories === null || categories === undefined) {
      return;
    }

    switch (response.state) {
      case 'loading':
        setIsLoading(true);
        break;

      case 'hasValue':
        setIsLoading(false);
        setCategories(response.contents);
        break;

      case 'hasError':
        setIsError(false);
        setIsLoading(false);
        break;

      default:
        return;
    }
  }, [setCategories, response]);

  useEffect(() => {
    requestFetchCategories();
  }, [requestFetchCategories]);

  return {
    isLoading,
    isError,
    categories,
  };
}

export default useFetchCategories;  