import moment from 'moment';

const getLocalStorage = <T>(key: string) => {
  const json = JSON.parse(localStorage.getItem(key)!) as T;
  return json;
};

const setLocalStorage = <T>(key: string, value: T) => {
  const toJson = JSON.stringify(value);
  localStorage.setItem(key, toJson);
};

const getSessionStorage = <T>(key: string) => {
  const json = JSON.parse(sessionStorage.getItem(key)!) as T;
  return json;
};

const setSessionStorage = <T>(key: string, value: T) => {
  const toJson = JSON.stringify(value);
  sessionStorage.setItem(key, toJson);
};

export { getLocalStorage, setLocalStorage, getSessionStorage, setSessionStorage };
