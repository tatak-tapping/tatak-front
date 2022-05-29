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
import { categoriesAtom, languageAtom, tokenAtom, typoOptionAtom } from "modules/atom";
import useFetchCategories from "hooks/useFetchCategories";
import DatePicker from "react-datepicker";
import { DateIcon } from "components/atoms/icon/Icon";
import 'react-datepicker/dist/react-datepicker.css'
import { getTopics } from "api/common";
import { DialogTypes } from "components/atoms/dialog/Dialog";
import { useDialog } from "context/Dialog";
import { postTypoUpload } from "api/typo";
import { useNavigate } from "react-router-dom";
import moment from "moment";

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
  publicationDateInput: Date;
  publicationDate:string;
  contents:string;
}

const TypeUploadModalContent = ({onClickCloseModal}:TypeUploadModalContentProps) => {
  const {showDialog, closeDialog} = useDialog(); 
  const navigate = useNavigate();

  const [typoOption, setTypoOption] = useRecoilState(typoOptionAtom);
  const categories = useRecoilValue(categoriesAtom);
  const token = useRecoilValue(tokenAtom);
  const language = useRecoilValue(languageAtom);
  const [topics, setTopics] = useState<ITopic[]>(null);  
  const [isNext, setIsNext] = useState<boolean>(false);

  const methods = useForm<ITypoUploadFormInputs>({
    defaultValues:{
      category:0,
      topic:0,
      title:"",
      language:null,
      approvalStatus:null,
      writer:"",
      publicationMedia:"",
      publicationDateInput:null,
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

  const onSubmit = async (params:ITypoUploadFormInputs) => {

    params.publicationDate = moment(params.publicationDateInput).format('YYYY.MM.DD');
    params.approvalStatus = TypoApprovalStatus.WAITED;
    params.language = language;
    
    try{
      const { data } = await postTypoUpload(params);
      onClickCloseModal();
      showDialog({
        type : DialogTypes.info,
        message : (
          <>
            <Text>
              글감 등록이 완료되었어요.
            </Text>
            <Flex mt="20px">
              <Button 
              onClick={() => navigate("/library")} 
              width="104px" height="43px"fontSize="16px"
              >
                보러가기
              </Button>
              <Button 
              onClick={closeDialog} 
              width="76px" height="43px"fontSize="16px"fontWeight="600" color={BASE[3]}
              backgroundColor={PRIMARY[80]} marginLeft="8px">
                확인
              </Button>
            </Flex>
          </>
        )
      });
      
    }catch(err){
      console.log(err);
      showDialog({
        type : DialogTypes.error,
        message : (
          <>
            <Text>
              글감 등록 실패
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
                name="publicationDateInput"
                rules={{
                  required:true,
                }}
                render={({ field }) => (
                  <div css={css` position: relative;`}>
                    <DatePicker
                      dateFormat="yyyy.MM.dd"
                      closeOnScroll={(e) => e.target === document}
                      placeholderText="날짜를 선택해주세요."
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      css={StyledDateInput}
                    /> 
                    <div css={css` position: absolute; top: 7px; right: 7px;`}>
                      <DateIcon />
                    </div>
                  </div>
                )}
              />
              </Box>
            </Flex>
          </Box>
          <Flex mt="40px" justifyContent="flex-end" >
            <Button 
              onClick={() => setIsNext(!isNext)}
              alignContent="center" mr="8px" width="76px" height="43px" fontSize="16px" fontWeight="600" color={PRIMARY[40]}>
              이전으로
            </Button>
            <NextButton
              disabled={!isDirty || !isValid}
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
  padding-left: 12px;
  ::placeholder{
    color: ${GRAY[6]};
  }
  :active{
    border-bottom: 1px solid ${PRIMARY[100]};
  }
`;

const StyledDateWrapper = styled.div`
  position: relative;
`;