/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Bubble from "components/atoms/bubble/Bubble";
import TextButton from "components/atoms/button/TextButton";
import UserMenuButton from "components/molecules/profile/UserMenuButton";
import UserProfileEdit from "components/molecules/profile/UserProfilEdit";
import { fontOptionAtom } from "modules/atom";
import { useEffect, useRef } from "react";
import { Box, Flex, Link, Text } from "rebass";
import { useRecoilState } from "recoil";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import { FontAlign, FontSelectOption, FontWeight } from "utils/types";


const Wrapper = styled.div`
  position: relative;
`;

interface TypoTypeBubbleProp  {
  isVisible: boolean;
  onClose: VoidFunction;
}

const TypoTypeBubbleContent =({ isVisible, onClose }: TypoTypeBubbleProp) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [fontOption, SetFontOption] = useRecoilState(fontOptionAtom);

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
      align:FontAlign.CENTER,
      font: "MapoGoldenPier",
      size: 52,
      weight: FontWeight.REGULER
    })
  };

  return(
    <Wrapper ref={wrapperRef}>
      <Bubble width="232px" height="328px" right="16px" padding="0 16px" isVisible={isVisible}>
        <Box width="200px" mb="20px">
          <StyledTitle>글꼴 선택</StyledTitle>
          <select id="font">
            {FontSelectOption.map((font, index)=> {
              console.log(font);
              <option value={font.value}>{font.label}</option>
            })}
          </select>
        </Box>
        <Flex width="200px" mb="20px">
          <Box width={1/2}>
            <StyledTitle>글자 크기</StyledTitle>
            <select id="size">
              {[...Array(10)].map((value, index) =>
               <option value={index}>{value}</option>
              )}
          </select>
          </Box>
          <Box width={1/2}>
            <StyledTitle>글자 굵기</StyledTitle>
                
          </Box>
        </Flex>
        <Box width="200px" mb="20px">
          <StyledTitle>글줄 정렬</StyledTitle>
        </Box>
        <Flex>
          <TextButton fontSize="" height="100px" width="20px" onClick={handleClickSave}
          >적용하기</TextButton>
        </Flex>
      </Bubble>
    </Wrapper>
  );
};

export default TypoTypeBubbleContent;

const StyledTitle = styled.p`
  font-weight: 600;
  color:${GRAY[2]};
  margin-bottom: 8px;
`;