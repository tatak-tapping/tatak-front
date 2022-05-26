/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Box, Button, Flex, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import { useEffect, useState } from "react";
import TextArea from "components/atoms/input/TextArea";
import { css } from "@emotion/react";
import { useForm, useWatch, FieldValues, FormProvider, Controller } from "react-hook-form";
import Input from "components/atoms/input/Input";
import { ICategory, ITopic, TypoApprovalStatus, TypoLanguage } from "utils/types";
import LanguageRadioTabs from "components/molecules/tabs/LanguageTabs";
import Select from "components/atoms/input/Select";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesAtom, tokenAtom, typoOptionAtom } from "modules/atom";
import useFetchCategories from "hooks/useFetchCategories";
import DatePicker from "react-datepicker";
import { DateIcon } from "components/atoms/icon/Icon";
import 'react-datepicker/dist/react-datepicker.css'
import { getTopics } from "api/common";

interface TypeUploadModalContentProps {
  onClickCloseModal : VoidFunction;
}

interface ITypoUploadFormInputs extends FieldValues {
  category:number;
  topic:number;
  title:string;
  language:TypoLanguage;
  approvalStatus:TypoApprovalStatus;
  writer:string;
  publicationMedia:string;
  publicationDate:string;
  contents:string;
}

/*
{
    "category" : 1,
    "topic" : 2,
    "title" : "별 헤는 밤",
    "language" : "KOREAN",
    "writer" : "윤동주",
    "publicationMedia" : "타닥",
    "publicationDate" :  "2022.05.26",
    "contents" : "불러 별 사람들의 가난한 별 지나가는 봅니다. 잔디가 부끄러운 가난한 별 이름자를 봅니다. 쉬이 것은 패, 이름자 다 까닭입니다. 하나에 비둘기, 그러나 하나 밤을 하나에 이름과 덮어 버리었습니다. 하나에 가슴속에 별 하나에 못 말 마디씩 봅니다. 노새, 경, 어머님, 소녀들의 딴은 쓸쓸함과 봅니다.\n그리고 된 멀리 시와 별빛이 헤는 가득 아침이 이름을 거외다. 무덤 이름과 이름과, 때 노루, 계십니다. 이름과 쓸쓸함과 아이들의 어머니, 하늘에는 내 말 강아지, 한 거외다. 나의 그리고 지나고 가을 것은 속의 어머님, 했던 오는 있습니다. 이름자를 노새, 까닭이요, 별에도 나의 내린 헤는 봅니다. 새겨지는 시인의 소녀들의 아무 프랑시스 않은 봅니다.\n마리아 다 새워 내린 겨울이 멀리 이웃 덮어 까닭입니다. 벌레는 별 말 새워 봅니다. 별 무덤 피어나듯이 계십니다. 나는 덮어 남은 하나에 하나에 프랑시스 별들을 있습니다. 헤는 한 소녀들의 지나고 가을 까닭입니다. 별들을 멀리 토끼, 보고, 이제 계집애들의 벌써 멀리 별이 계십니다. 걱정도 토끼, 불러 이웃 노새, 계십니다.",
    "approvalStatus" : "APPROVED"
}
*/

const TypeUploadModalContent = ({onClickCloseModal}:TypeUploadModalContentProps) => {

  const [typoOption, setTypoOption] = useRecoilState(typoOptionAtom);
  const categories = useRecoilValue(categoriesAtom);
  const token = useRecoilValue(tokenAtom);
  const [topics, setTopics] = useState<ITopic[]>(null);  
  const [isNext, setIsNext] = useState<boolean>(true);
  const [startDate, setStartDate] = useState(null);
  
  const methods = useForm<ITypoUploadFormInputs>({
    defaultValues:{
      category:0,
      topic:0,
      title:"",
      language:null,
      approvalStatus:null,
      writer:"",
      publicationMedia:"",
      publicationDate:"",
      contents:""
    },
    mode:"onChange"
  });

  const {
    control,
    formState: {isSubmitting, isDirty, isValid, errors},
    handleSubmit
  } = methods;

  const onSubmit = () => {

  };

  const titleWatch = useWatch({control, name: "title"});
  const writerWatch = useWatch({control, name: "writer"});
  const contentsWatch = useWatch({control, name: "contents"});
  const categoryWatch = useWatch({control, name: "category"});

  useEffect(() => {
    const topic = async () => {
      const {data} = await getTopics(categoryWatch);
      setTopics(data);
    };
    if(categoryWatch) topic();
    else setTopics(null);
  },[categoryWatch]);

  return(
    <Flex flexDirection="column" mt="20px" ml="20px" mr="20px">
      <Text fontSize="24px" fontWeight="600" color={GRAY[1]}>글감을 등록해주세요.</Text>
    <FormProvider {...methods} >
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        !isNext ? 
        (
        <Box>
          <TextArea 
            name="contents" 
            control={control} 
            width="600px" 
            height="428px"
            comment="최소 100글자 이상부터 최대 800글자까지 등록이 가능해요."
            counter={contentsWatch.length + "/800"}
            rules={{
              required:true, 
              maxLength:{
                value:800,
                message:"최소 100글자 이상부터 최대 800글자까지 등록이 가능해요."
              },
              minLength:{
                value:100,
                message:"최소 100글자 이상부터 최대 800글자까지 등록이 가능해요."
              }
            }}
            placeholder="내용을 입력해주세요." />
          <Flex mt="40px" justifyContent="flex-end" >
            <Button onClick={onClickCloseModal}
            alignContent="center" mr="8px" width="76px" height="43px" fontSize="16px" fontWeight="600" color={PRIMARY[40]}>
              취소
            </Button>
            <NextButton
              disabled={!(contentsWatch.length > 100 && contentsWatch.length < 801)}
              onClick={() => {
                console.log(isNext);
                setIsNext(!isNext)
              }}>
              다음으로
            </NextButton>
          </Flex>
        </Box>
        ) : 
        (
        <Box>
          <hr css={css`
            width: 100%;
            margin-top: 10px;
            border : none;
            border-top: 1px solid #000000;
          `}/>
          <Box width="620px" mt="28px">
            <Flex mb="20px">
              <LabelText>언어*</LabelText>
              <LanguageRadioTabs />
            </Flex>
            <Flex marginBottom="20px" mb="20px">
              <LabelText>글 유형*</LabelText>
              <Select 
                name="category"
                options={
                  categories && (categories.map((item) => (
                    {label: item.categoryName, value: item.categoryCode}
                  )))
                }
                comment="글 유형을 선택해주세요."
                control={control}
              />
            </Flex>
            <Flex mb="20px">
              <LabelText>주제*</LabelText>
              <Select 
                name="topic"
                options={
                  topics && (topics.map((item) => (
                    {label: item.topicName, value: item.topicCode}
                  )))
                }
                comment="주제를 선택해주세요."
                control={control}
              />
            </Flex>
            <Flex mb="20px">
              <LabelText>제목*</LabelText>
              <Input
                name="title"
                width="500px"
                rules={{
                  required:true, 
                  maxLength:{
                    value:60, 
                    message:'최대 60byte 입력이 가능해요.'
                  }
                }}
                control={control}
                type="text"
                counter={titleWatch.length + "/60"}
                placeholder="제목을 입력해주세요."
                comment="최대 60byte 입력이 가능해요."/>
            </Flex>
            <Flex mb="20px">
              <LabelText>글쓴이*</LabelText>
              <Input
                name="writer"
                width="500px"
                rules={{
                  required:true, 
                  maxLength:{
                    value:60, 
                    message:'최대 60byte 입력이 가능해요.'
                  }
                }}
                control={control}
                type="text"
                counter={writerWatch.length + "/60"}
                placeholder="글쓴이를 입력해주세요."
                comment="최대 60byte 입력이 가능해요."/>
            </Flex>
            <Flex mb="20px">
              <LabelText>발행매체</LabelText>
              <Input
                name="publicationMedia"
                control={control}
                type="text"
                width="500px"
                placeholder="발행매체를 입력해주세요."/>
            </Flex>
            <Flex mb="20px">
              <LabelText>발행일</LabelText>
              <Box>
              <Controller
                control={control}
                name="dateInput"
                rules={{
                  required:true,
                }}
                render={({ field }) => (
                  <Wrapper>
                    <DatePicker
                      dateFormat="yyyy.MM.dd"
                      closeOnScroll={(e) => e.target === document}
                      placeholderText="날짜를 선택해주세요."
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      css={StyledDateInput}
                    /> 
                    <DateIcon />
                  </Wrapper>
                )}
              />
              </Box>
            </Flex>
          </Box>
          <Flex mt="40px" justifyContent="flex-end" >
            <Button onClick={() => setIsNext(!isNext)}
            alignContent="center" mr="8px" width="76px" height="43px" fontSize="16px" fontWeight="600" color={PRIMARY[40]}>
              이전으로
            </Button>
            <NextButton
              onClick={() => handleSubmit(onSubmit)}>
              등록하기
            </NextButton>
          </Flex>
        </Box>
        )
      }
      </form>
      </FormProvider>
    </Flex>
  );
};
export default TypeUploadModalContent;

const NextButton = styled.button`
  border-radius: 4px;
  width: 104px;
  height: 43px;
  font-size: 18px;
  color: ${BASE[3]};
  font-weight: 600;
  outline: none;
  border:none;
  font-size: 16px;
  background-color: ${PRIMARY[80]};
  :disabled {
    background-color: ${PRIMARY[20]};
  }
`;

const LabelText = styled.div`
  width:120px;
  text-align:left;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color:${GRAY[2]};
  align-items: center;
  height: 40px;
  display: flex;
`;

const StyledDateInput = css`
  width: 240px;
  height: 40px;
  background-color: ${BASE[3]};
  border:1px solid ${PRIMARY[40]};
  ::placeholder{
    color: ${GRAY[6]};
  }
  :active{
    border-bottom: 1px solid ${PRIMARY[100]};
  }
`;

const Wrapper = styled.div`


`;