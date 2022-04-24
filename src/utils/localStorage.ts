const getLocalStorageItem = <T>(key: string) => {
  const json = JSON.parse(localStorage.getItem(key)!) as T;
  return json;
};

const setLocalStorageItem = <T>(key: string, value: T) => {
  const toJson = JSON.stringify(value);
  localStorage.setItem(key, toJson);
};

export { getLocalStorageItem, setLocalStorageItem };