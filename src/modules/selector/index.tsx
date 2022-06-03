import { getCategories } from "api/common";
import { categoryWithTopicAtom } from "modules/atom";
import { selector } from "recoil"
import { ICategory } from "utils/types";

export const getCategoriesSelector = selector<ICategory[]>({
  key: 'getCategoriesSelector',
  get: async () => {
    const {data} = await getCategories();
    return data;
  }
});