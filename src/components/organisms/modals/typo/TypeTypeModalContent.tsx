/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { getArticle, getCategories, getTopics } from "api/common";
import { getUserTypoFilter } from "api/typo";
import TextButton from "components/atoms/button/TextButton";
import Chip from "components/atoms/chip/Chip";
import LanguageTabs from "components/molecules/tabs/LanguageTabs";
import LengthTabs from "components/molecules/tabs/LengthTabs";
import { tokenAtom, typoOptionAtom, typoAtom } from "modules/atom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text } from "rebass";
import { useRecoilState, useRecoilValue } from "recoil";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import { ICategory, ITopic, ITypo } from "utils/types";


const StyledTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color:${GRAY[2]};
  margin-bottom: 12px;
`;

const TypeTypeModalContent = () => {
  const [topics, setTopics] =  useState<ITopic[]>(undefined);
  const [categories, setCategories] =  useState<ICategory[]>(undefined);
  const [category, setCategory] =  useState<number>(0);
  const [topic, setTopic] =  useState<number>(0);
  const [typoOption, setTypoOption] = useRecoilState(typoOptionAtom);
  const [typo, setTypo ] = useRecoilState<ITypo>(typoAtom); 
  const token = useRecoilValue(tokenAtom); 
  const navigate = useNavigate();

  useEffect(() => {
    const Aysnc = async () => {
      const {data} = await getCategories();
      console.log(data);
      setCategories(data);
    }
    Aysnc();
    if(!token) setTypoOption(null);
    else{
      const Aysnc = async () => {
        const {data} = await getUserTypoFilter();
      }
      Aysnc();
    }
  }, []);

  useEffect(()=> {
    const Aysnc = async () => {
      const {data} = await getTopics(category);
      console.log(data);
      setTopics(data);
    }
    Aysnc();
  },[category])

  const handleCategoryClick = (id:number) => {
    setCategory(id);
    setTopic(0);
  }

  const handleTopicClick = (id:number) => {
    setTopic(id);
  }

  const handleSubmit = () => {
    const getArticleAsync = async () => {
      const {data} = await getArticle();
      console.log(data);
      setTypo(data);
    };
    getArticleAsync();
    navigate('/');
  }

  return(
    <Flex flexDirection="column" ml="40px" mr="40px">
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
        <LanguageTabs />
      </Box>
      <Box mt="20px">
        <StyledTitle>글 유형</StyledTitle>
        {categories && categories.map(({categoryCode, categoryName}) => (
          // <Chip 
          //   key={categoryCode} 
          //   name={categoryName}
          //   onClick={() => handleCategoryClick(categoryCode)} 
          //   //checked={categoryCode}
          //   margin="0 4px 0 0 ">{categoryName}</Chip>
          <></>
        ))}
      </Box>
      <Box mt="20px">
        <StyledTitle>주제</StyledTitle>
        <Box  minHeight="80px" maxHeight="80px" overflowY="scroll">
        {topics && topics.map(({isVisible, topicCode, topicName}) => (
          <></>
          // isVisible && <Chip key={topicCode} onClick={() => handleTopicClick(topicCode)} margin="0 8px 8px 0" active={topic === topicCode ? true : false}>{topicName}</Chip>
        ))}
        </Box>
      </Box>
      <Box mt="20px">
        <StyledTitle>길이</StyledTitle>
        <LengthTabs />
      </Box>
      <hr css={css`
        width: 100%;
        margin-top: 24px;
        border : none;
        border-top: 1px solid ${GRAY[2]};
      `}/>
      <Flex>
        <Text onClick={() => setTypoOption(null)}>설정 초기화</Text>
        <Text>취소</Text>
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
export default TypeTypeModalContent;