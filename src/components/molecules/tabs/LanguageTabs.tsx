import CheckboxTab from 'components/atoms/tab/CheckboxTab';
import LinkTab from 'components/atoms/tab/LinkTab';
import { languageAtom } from 'modules/atom';
import { useEffect, useState } from 'react';
import { Box, Flex } from 'rebass';
import { useSetRecoilState } from 'recoil';
import { TypoLanguage } from 'utils/types';

const LanguageRadioTabs = () => {
  const setLanguage = useSetRecoilState(languageAtom);
  const languageArray = Object.values(TypoLanguage);
  const [selected, setSeleted] = useState(TypoLanguage.KOREAN);

  const handleCheckboxChange = (value: string) => {
    setSeleted(value === 'KOREAN' ? TypoLanguage.KOREAN : TypoLanguage.ENGLISH);
  };

  useEffect(() => {
    setLanguage(selected);
  }, [selected]);

  return (
    <>
      {languageArray.map((value, index) => (
        <CheckboxTab
          width="120px"
          key={index}
          checked={selected === value}
          name={value === 'KOREAN' ? '한국어' : '영어'}
          onClick={() => handleCheckboxChange(value)}
        />
      ))}
    </>
  );
};

export default LanguageRadioTabs;
