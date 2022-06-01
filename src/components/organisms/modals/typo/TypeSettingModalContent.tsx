/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { getArticle, getCategories, getTopics } from "api/common";
import { getUserTypoFilter } from "api/typo";
import TextButton from "components/atoms/button/TextButton";
import Chip from "components/atoms/chip/Chip";
import LengthTabs from "components/molecules/tabs/LengthTabs";
import { tokenAtom, typoOptionAtom, typoAtom, categoriesAtom, categoryWithTopicAtom } from "modules/atom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text } from "rebass";
import { useRecoilState, useRecoilValue } from "recoil";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import { ICategory, ITopic, ITypo, TypoLanguage, TypoLength } from "utils/types";

interface TypeSettingModalContentProps {
  onClickCloseModal : VoidFunction;
}

interface toggleCheckProps {
  value: string;
  checked: boolean;
}

const TypeSettingModalContent = ({onClickCloseModal}:TypeSettingModalContentProps) => {
  
  const categories = useRecoilValue(categoriesAtom);
  const categoryWithTopic = useRecoilValue(categoryWithTopicAtom);
  const languageArray = Object.values(TypoLanguage);
  const lengthArray = Object.values(TypoLength);

  const [typoOption, setTypoOption] = useRecoilState(typoOptionAtom);
  const [typo, setTypo ] = useRecoilState<ITypo>(typoAtom); 
  const token = useRecoilValue(tokenAtom);

  const navigate = useNavigate();

  const initialState = {
    "KOREAN" : false,
    "ENGLISH" : false,
  }
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState(initialState);

  const handleToggleCheck = (name:any) => {
    console.log(name);
    setChecked((prev:any) => {
      const newState = { ...prev };
      if(newState.value === name){
        newState.checked = !newState.checked;
      }
      return newState;
    });
  }
  const handleSubmit = () => {
    const getArticleAsync = async () => {
      const {data} = await getArticle();
      console.log(data);
      setTypo(data);
    };
    getArticleAsync();
  }

  return(
    <Flex flexDirection="column" ml="20px" mr="20px">
      <Box mt="20px">
        <Text fontSize="24px" color={GRAY[2]} lineHeight="150%" fontWeight="600">
          글감의 종류를 선택해주세요.
        </Text>
        <hr css={css`
          width: 100%;
          margin-top: 20px;
          border : none;
          border-top: 1px solid ${GRAY[2]};
        `}/>
      </Box>
      <Box mt="20px">
        <StyledTitle>언어</StyledTitle>
        {
          languageArray.map((value, index) => (
            <Chip
              key={index}
              name={value === "KOREAN" ? "한글" : "영문"}
              onClick={() => handleToggleCheck(value)}
              checked={checked(value)} />
          ))
        }
      </Box>
      <Box mt="20px">
        <StyledTitle>길이</StyledTitle>
        {
          lengthArray.map((value, index) => (
            <Chip
              key={index} 
              checked={false} 
              name={value === "LONG" ? "긴 글" : value === "MEDIUM" ? "중간 글" : "짧은 글"}
              onClick={() => handleToggleCheck(value)}/>
          ))
        }
      </Box>
      <Box mt="20px">
        <StyledTitle>주제</StyledTitle>
        <Box backgroundColor={BASE[2]} height="342px" padding="16px 20px" overflowY="scroll">
          {categoryWithTopic.map((item_x, index_x) =>{
              return (
                <div key={index_x} css={css`
                  :not(:first-child){
                    margin-top: 8px;
                  }
                `}>
                  <StyledSubTitle>{item_x.category.categoryName}</StyledSubTitle>
                  {
                    item_x.topics.map((item_y, index_y) => 
                      <Chip
                        key={index_y} 
                        checked={false} 
                        name={item_y.topicName}
                        onClick={() => handleToggleCheck(item_y.topicName)}/>
                    )
                  }
                </div>  
              )
            })} 
        </Box>
      </Box>
      <hr css={css`
        width: 100%;
        margin-top: 24px;
        border : none;
        border-top: 1px solid ${GRAY[2]};
      `}/>
      <Flex>
        <Text onClick={() => setTypoOption(null)}>설정 초기화</Text>
        <Text onClick={() => setTypoOption(null)}>취소</Text>
        <TextButton
          height="43px"
          width="104px"
          fontSize="16px"
          fontColor={BASE[3]}
          backgroundColor={PRIMARY[80]}
          onClick={handleSubmit}>
          적용하기
        </TextButton>
      </Flex>
    </Flex>
  );
};

export default TypeSettingModalContent;


const StyledTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color:${GRAY[2]};
  margin-bottom: 12px;
`;

const StyledSubTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color:${GRAY[3]};
  margin-bottom: 8px;
`;