import { useEffect, useState } from 'react';
import { getLocalStorageItem } from 'utils/localStorage';

const useAccessStatus = () => {
  const [isAccess, setIsAccess] = useState(false);

  useEffect(() => {
    const token = getLocalStorageItem('tatak_token');
    const user = getLocalStorageItem('user');

    if (token == null || user == null) return;
    setIsAccess(true);
  }, []);

  return {
    isAccess,
  };
};

export default useAccessStatus;