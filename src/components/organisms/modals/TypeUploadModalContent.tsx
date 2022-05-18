/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Box, Button, Flex, Text } from "rebass";
import { BASE, GRAY, PRIMARY } from "styles/colors";
import { useEffect, useMemo, useState } from "react";
import TextArea from "components/atoms/text/TextArea";
import { css } from "@emotion/react";
import { useForm, useWatch, FieldValues, FormProvider, Controller } from "react-hook-form";
import Input from "components/atoms/input/Input";
import { ICategory, ITopic, TypoApprovalStatus, TypoLanguage } from "utils/types";
import LanguageRadioTabs from "components/molecules/tabs/LanguageTabs";
import Select from "components/atoms/input/select";
import { getCategories, getTopics } from "api/common";
import { getUserTypoFilter } from "api/typo";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { categoriesAtom, tokenAtom, typoOptionAtom } from "modules/atom";
import useFetchCategories from "hooks/useFetchCategories";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { DateIcon } from "components/atoms/icon/Icon";

interface TypeUploadModalContentProps {
  onClickCloseModal : VoidFunction;
}

interface ITypoUploadFormInputs extends FieldValues {
  category:number;
  topic:ITopic;
  title:string;
  language:TypoLanguage;
  approvalStatus:TypoApprovalStatus;
  writer:string;
  publicationMedia:string;
  publicationDate:string;
  contents:string;
}

const TypeUploadModalContent = ({onClickCloseModal}:TypeUploadModalContentProps) => {
  const [typoContent, setTypoContent] = useState<string>("");
  const [isNext, setIsNext] = useState<boolean>(false);
  const [typoOption, setTypoOption] = useRecoilState(typoOptionAtom);
  const token = useRecoilValue(tokenAtom);
  const { isLoading, isError, categories } = useFetchCategories();
  const [selectData, setSelectData] = useState<ICategory[]>(null);
  const [startDate, setStartDate] = useState(null);
  
  useEffect(() => {
    setSelectData(categories);
  }, [isLoading]);

  const methods = useForm<ITypoUploadFormInputs>({
    defaultValues:{
      category:0,
      topic:null,
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

  return(
    <Flex flexDirection="column" mt="20px" ml="20px" mr="20px">
      <Text fontSize="24px" fontWeight="600" color={GRAY[1]}>글감을 등록해주세요.</Text>
    <FormProvider {...methods} >
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box hidden>
        <Flex mt="10px" mb="24px" justifyContent="center">
          <Text fontSize="14px" color={GRAY[5]}>최소 100글자 이상부터 최대 800글자까지 등록이 가능해요.</Text>
          <Text marginLeft="auto" fontFamily='Noto Sans KR' size="14px" color={GRAY[5]}>/800</Text>
        </Flex>
        <TextArea width="600px" height="428px" placeholder="내용을 입력해주세요.">
        </TextArea>
        <Flex mt="40px" justifyContent="flex-end" >
          <Button onClick={onClickCloseModal}
          alignContent="center" mr="8px" width="76px" height="43px" fontSize="16px" fontWeight="600" color={PRIMARY[40]}>
            취소
          </Button>
          <NextButton
            disabled={typoContent.length === 0} 
            onClick={() => setIsNext(!isNext)}>
            다음으로
          </NextButton>
        </Flex>
      </Box>
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
                selectData && (selectData.map((item) => (
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
                selectData && (selectData.map((item) => (
                  {label: item.categoryName, value: item.categoryCode}
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
            disabled={typoContent.length === 0} 
            onClick={() => handleSubmit(onSubmit)}>
            등록하기
          </NextButton>
        </Flex>
      </Box>
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
  font-size: 16px;
  background-color: ${PRIMARY[80]};
  :disabled {
    background-color: ${GRAY[4]};
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