/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import CheckboxTab from 'components/atoms/tab/CheckboxTab';
import LinkTab from 'components/atoms/tab/LinkTab';
import { fontOptionAtom, tempfontOptionAtom } from 'modules/atom';
import { useEffect, useState } from 'react';
import { Box, Flex } from 'rebass';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { BASE, PRIMARY } from 'styles/colors';
import { FontWeight, TypoLanguage } from 'utils/types';

const FontWeightTabs = () => {
  const [tempFontOption, SetTempFontOption] = useRecoilState(tempfontOptionAtom);
  const [selected, setSeleted] = useState(FontWeight.REGULER);
  const weightArray = Object.values(FontWeight);

  const handleCheckboxChange = (value: string) => {
    setSeleted(
      value === '400' ? FontWeight.REGULER : value === '700' ? FontWeight.SEMIBLOD : FontWeight.BLOD
    );
  };

  useEffect(() => {
    SetTempFontOption({
      ...tempFontOption,
      weight: selected,
    });
  }, [selected]);

  return (
    <>
      {weightArray.map((value, index) => (
        <RadioTabStyled
          key={index}
          weight={value}
          onClick={() => handleCheckboxChange(value)}
          className={selected === value ? 'checked' : undefined}
        >
          <input
            type="checkbox"
            name={value}
            checked={selected === value ? true : false}
            readOnly
          />
          <span>T</span>
        </RadioTabStyled>
      ))}
    </>
  );
};

export default FontWeightTabs;

const RadioTabStyled = styled.div<{ weight: string }>`
  font-weight: ${(props) => props.weight};
  width: 32px;
  height: 36px;
  font-size: 20px;
  color: ${PRIMARY[20]};
  background-color: ${BASE[3]};
  border: 1px solid ${PRIMARY[40]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  input[type='checkbox'] {
    display: none;
  }
  &.checked {
    background-color: ${PRIMARY[80]};
    border: 1px solid ${PRIMARY[40]};
  }
  &.checked span {
    background-color: ${PRIMARY[80]};
    color: ${BASE[3]};
  }
  :not(:last-child) {
    border-right: none;
  }
`;
