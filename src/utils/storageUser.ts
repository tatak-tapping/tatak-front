import moment from 'moment';
import {
  setLocalStorage,
  setSessionStorage,
  getSessionStorage,
  getLocalStorage,
} from 'utils/storage';
import { IUser } from 'utils/types';

export enum LOGIN_TYPE {
  SESSION,
  LOCAL,
}

const setTokenStorage = (type: LOGIN_TYPE, data: IUser) => {
  if (type === LOGIN_TYPE.SESSION) {
    setSessionStorage('access_token_tadak', data.accessToken);
    setSessionStorage('user_tadak', data);
    setSessionStorage('expiresAt_tadak', moment().add(2, 'hour').format('yyyy-MM-DD HH:mm:ss'));
    setSessionStorage('refresh_token_tadak', data.refreshToken);
  } else {
    setLocalStorage('access_token_tadak', data.accessToken);
    setLocalStorage('user_tadak', data);
    setLocalStorage('expiresAt_tadak', moment().add(2, 'hour').format('yyyy-MM-DD HH:mm:ss'));
    setLocalStorage('refresh_token_tadak', data.refreshToken);
  }
};

const getTokenStorage = () => {
  if (getSessionStorage('access_token_tadak')) {
    console.log('session');
    return getSessionStorage<string>('access_token_tadak');
  } else if (getLocalStorage('access_token_tadak')) {
    console.log('local');
    return getLocalStorage<string>('access_token_tadak');
  } else {
    console.log('else');

    return '';
  }
};

const getRefreshTokenStorage = () => {
  if (getSessionStorage('access_token_tadak')) {
    return getSessionStorage<string>('refresh_token_tadak');
  } else if (getLocalStorage('access_token_tadak')) {
    return getLocalStorage<string>('refresh_token_tadak');
  } else return '';
};

const getExpiresTokenStorage = () => {
  if (getSessionStorage('access_token_tadak')) {
    return getSessionStorage<string>('expiresAt_tadak');
  } else if (getLocalStorage('access_token_tadak')) {
    return getLocalStorage<string>('expiresAt_tadak');
  } else return '';
};

const getUserStorage = () => {
  if (getSessionStorage('access_token_tadak')) {
    console.log('getget ', getSessionStorage<IUser>('user_tadak'));
    return getSessionStorage<IUser>('user_tadak');
  } else if (getLocalStorage('access_token_tadak')) {
    console.log('getget local', getSessionStorage<IUser>('user_tadak'));
    return getLocalStorage<IUser>('user_tadak');
  }
  return null;
};

const setUserStorage = (data: IUser) => {
  if (getSessionStorage('access_token_tadak')) {
    setSessionStorage('user_tadak', data);
  } else setLocalStorage('user_tadak', data);
};

const setRefreshTokenStorage = (accessToken: string, refreshToken?: string) => {
  if (getSessionStorage('access_token_tadak')) {
    setSessionStorage('access_token_tadak', accessToken);
    setSessionStorage('refresh_token_tadak', refreshToken);
    setSessionStorage('expiresAt_tadak', moment().add(2, 'hour').format('yyyy-MM-DD HH:mm:ss'));
  } else {
    setLocalStorage('access_token_tadak', accessToken);
    setLocalStorage('refresh_token_tadak', refreshToken);
    setLocalStorage('expiresAt_tadak', moment().add(2, 'hour').format('yyyy-MM-DD HH:mm:ss'));
  }
};

export {
  setTokenStorage,
  getTokenStorage,
  setRefreshTokenStorage,
  getUserStorage,
  getExpiresTokenStorage,
  setUserStorage,
  getRefreshTokenStorage,
};
