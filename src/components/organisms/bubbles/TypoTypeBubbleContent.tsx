/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Bubble from 'components/atoms/bubble/Bubble';
import TextButton from 'components/atoms/button/TextButton';
import UserMenuButton from 'components/molecules/profile/UserMenuButton';
import UserProfileEdit from 'components/molecules/profile/UserProfilEdit';
import FontAlignTabs from 'components/molecules/tabs/FontAlignTabs';
import FontWeightTabs from 'components/molecules/tabs/FontWeightTabs';
import { fontOptionAtom, tempfontOptionAtom } from 'modules/atom';
import { useEffect, useRef, useState } from 'react';
import { Box, Flex, Link, Text } from 'rebass';
import { useRecoilState } from 'recoil';
import { BASE, GRAY, PRIMARY } from 'styles/colors';
import { setSessionStorage } from 'utils/storage';
import { FontAlign, FontFamily, FontFamilyOption, FontWeight } from 'utils/types';

const Wrapper = styled.div`
  position: relative;
  z-index: 999;
`;

interface TypoTypeBubbleProp {
  isVisible: boolean;
  onClose: VoidFunction;
}

const TypoTypeBubbleContent = ({ isVisible, onClose }: TypoTypeBubbleProp) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [fontOption, SetFontOption] = useRecoilState(fontOptionAtom);
  const [tempFontOption, setTempFontOption] = useRecoilState(tempfontOptionAtom);

  const sizeArray = Array.from(Array(81).keys());

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isVisible]);

  const handleClickSave = () => {
    SetFontOption({
      ...tempFontOption,
    });
    setSessionStorage('tadak_font_option', fontOption);
    onClose();
  };

  const handleSizeChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setTempFontOption({
      ...tempFontOption,
      size: value,
    });
  };

  const handleFontChange = (e: any) => {
    const {
      target: { value },
    } = e;
    console.log(value);
    setTempFontOption({
      ...tempFontOption,
      font: value,
    });
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Bubble width="232px" height="328px" right="16px" padding="0 16px" isVisible={isVisible}>
        <Box width="200px">
          <StyledTitle>글꼴 선택</StyledTitle>
          <StyledSelect
            id="font"
            width="200px"
            value={tempFontOption.font}
            onChange={handleFontChange}
          >
            {FontFamilyOption.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </StyledSelect>
        </Box>
        <Flex width="200px" mb="20px">
          <Box width={1 / 2}>
            <StyledTitle>글자 크기</StyledTitle>
            <StyledSelect
              id="size"
              width="96px"
              value={tempFontOption.size}
              onChange={handleSizeChange}
            >
              {sizeArray &&
                sizeArray.map(
                  (value, index) =>
                    index > 15 && (
                      <option key={index} value={index} selected={fontOption.size === index}>
                        {index}
                      </option>
                    )
                )}
            </StyledSelect>
          </Box>
          <Box width={1 / 2}>
            <StyledTitle>글자 굵기</StyledTitle>
            <FontWeightTabs />
          </Box>
        </Flex>
        <Box width="200px" mb="20px">
          <StyledTitle>글줄 정렬</StyledTitle>
          <FontAlignTabs />
        </Box>
        <Flex mb="20px" lineHeight="150%" alignContent="right">
          <Box width={1 / 3}></Box>
          <Text
            width="49px"
            textAlign="center"
            fontWeight="600"
            lineHeight="33px"
            fontSize="14px"
            color={PRIMARY[40]}
            onClick={onClose}
          >
            취소
          </Text>
          <StyledButton onClick={handleClickSave}>적용하기</StyledButton>
        </Flex>
      </Bubble>
    </Wrapper>
  );
};

export default TypoTypeBubbleContent;

const StyledButton = styled.button`
  color: ${BASE[1]} !important;
  background-color: ${PRIMARY[80]} !important;
  font-size: 14px;
  height: 33px;
  width: 73px;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 4px;
  margin-left: 7px;
`;

const StyledTitle = styled.p`
  font-weight: 600;
  color: ${GRAY[2]};
  margin-bottom: 8px;
`;

const StyledSelect = styled.select<{ width: string }>`
  width: ${(props) => props.width};
  height: 36px;
  border: 1px solid ${PRIMARY[40]};
  background-color: ${BASE[3]};
  outline: none;
  padding-left: 12px;
  color: ${GRAY[5]};
`;
