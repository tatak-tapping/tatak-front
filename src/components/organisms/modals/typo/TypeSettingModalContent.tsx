/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { getArticle, getCategories, getTopics } from "api/common";
import { getUserTypoFilter } from "api/typo";
import TextButton from "components/atoms/button/TextButton";
import Chip from "components/atoms/chip/Chip";
import { DialogTypes } from "components/atoms/dialog/Dialog";
import LengthTabs from "components/molecules/tabs/LengthTabs";
import { useDialog } from "context/Dialog";
import { tokenAtom, typoOptionAtom, typoAtom, categoriesAtom, categoryWithTopicAtom } from "modules/atom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "rebass";
import { useRecoilState, useRecoilValue } from "recoil";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import { ICategory, ITopic, ITypo, TypoLanguage, TypoLength } from "utils/types";

interface TypeSettingModalContentProps {
  onClickCloseModal : VoidFunction;
}

interface toggleCheckProps {
  [key: string]: boolean;
}

const TypeSettingModalContent = ({onClickCloseModal}:TypeSettingModalContentProps) => {
  const {showDialog, closeDialog} = useDialog(); 
  const categoryWithTopic = useRecoilValue(categoryWithTopicAtom);
  const languageArray = Object.values(TypoLanguage);
  const lengthArray = Object.values(TypoLength);

  const [typoOption, setTypoOption] = useRecoilState(typoOptionAtom);
  const [typo, setTypo ] = useRecoilState<ITypo>(typoAtom); 
  const token = useRecoilValue(tokenAtom);

  const dataArray = categoryWithTopic.map((item_x, index_x) =>{
    return (
      item_x.topics.map((item_y, index_y) => item_y.topicCode.toString())
    )
  }).reduce(function(pre, cur) {
    return pre.concat(cur);
 });

  const initialState:toggleCheckProps = dataArray.reduce((o, key:string) => (
    {
      ...o,
      [key] : false,
    })
  , {});

  initialState["KOREAN"] = false;
  initialState["ENGLISH"] = false;
  initialState["LONG"] = false;
  initialState["MEDIUM"] = false;
  initialState["SHORT"] = false;

  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState(initialState);

  const handleToggleAllCheck = () => {
    setCheckedAll(!checkedAll);
    setChecked((prev:any) => {
      const newState = { ...prev };
      for (const inputName in initialState) {
        if(inputName !== "KOREAN" && inputName !== "ENGLISH"
        && inputName !== "LONG" && inputName !== "MEDIUM" && inputName !== "SHORT")
          newState[inputName] = !checkedAll;
      }
      return newState;
    });
  };

  const handleToggleCheck = (name:string|number) => {
    setChecked((prev:any) => {
      const newState = { ...prev };
      newState[name] = !prev[name];
      return newState;
    });
  }
  const handleSubmit = () => {
   const languagesParams : string[] = [];
   const topicCodesParams : string[] = [];
   const lengthsParams : string[] = [];

   if(checked["KOREAN"]) languagesParams.push("KOREAN");
   if(checked["ENGLISH"]) languagesParams.push("ENGLISH");

   if(checked["LONG"]) lengthsParams.push("LONG");
   if(checked["MEDIUM"]) lengthsParams.push("MEDIUM");
   if(checked["SHORT"]) lengthsParams.push("SHORT");

   for(const item in checked){
    if(item !== "KOREAN" && item !== "ENGLISH"
    && item !== "LONG" && item !== "MEDIUM" && item !== "SHORT"){
      if(checked[item]) topicCodesParams.push(item);
    }
   }

   const params = {
    languages : languagesParams.toString() ?? "",
    topicCodes : topicCodesParams.toString() ?? "",
    lengths :lengthsParams.toString() ?? ""
   }

    const getArticleAsync = async () => {
      const {data} = await getArticle(params);
      setTypo(data);
    };
    try{
      getArticleAsync();
      onClickCloseModal();
    }catch(err){
      showDialog({
        type : DialogTypes.error,
        message : (
          <>
            <Text>
              조건에 만족하는 글감이 없습니다.
            </Text>
            <Button
              onClick={closeDialog} 
              width="76px" 
              height="43px"
              fontSize="16px"
              backgroundColor={PRIMARY[80]}
              margin="20px">
              확인
            </Button>
          </>
        )
      });
    }
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
              name={value}
              label={value === "KOREAN" ? "한글" : "영문"}
              onClick={() => handleToggleCheck(value)}
              checked={checked[value]} />
          ))
        }
      </Box>
      <Box mt="20px">
        <StyledTitle>길이</StyledTitle>
        {
          lengthArray.map((value, index) => (
            <Chip
              key={index}
              name={value}
              label={value === "LONG" ? "긴 글" : value === "MEDIUM" ? "중간 글" : "짧은 글"}
              onClick={() => handleToggleCheck(value)}
              checked={checked[value]}/>
          ))
        }
      </Box>
      <Box mt="20px">
       <Flex flexDirection="inherit">
        <StyledTitle width="50%">주제</StyledTitle>
          <StyledClickText>
            <span onClick={handleToggleAllCheck}>
            {
              checkedAll ? "전체 해제" : "전체 선택"
            }
            </span>
          </StyledClickText>
       </Flex>
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
                        name={item_y.topicCode.toString()}
                        label={item_y.topicName}
                        onClick={() => handleToggleCheck(item_y.topicCode)}
                        checked={checked[item_y.topicCode.toString()]}/>
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


const StyledTitle = styled.div<{width?:string}>`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color:${GRAY[2]};
  width: ${props => props.width};
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

const StyledClickText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: ${PRIMARY[40]};
  width: 50%;
  span{
    cursor: pointer;
  }
`;