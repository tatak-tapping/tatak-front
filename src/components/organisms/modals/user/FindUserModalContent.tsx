/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Button, Flex, Text } from 'rebass';
import { BASE, GRAY, PRIMARY } from 'styles/colors';
import TextButton from 'components/atoms/button/TextButton';
import Label from 'components/atoms/label/Label';
import { postFindUser } from 'api/auth';
import { useForm, FieldValues, FormProvider } from 'react-hook-form';
import Input from 'components/atoms/input/Input';
import { useDialog } from 'context/Dialog';
import { DialogTypes } from 'components/atoms/dialog/Dialog';
import styled from '@emotion/styled';

interface FindUserModalContentProps {
  onClickCloseModal?: () => void;
}

interface IFindUserFormInputs extends FieldValues {
  email: string;
}

const FindUserModalContent = ({ onClickCloseModal }: FindUserModalContentProps) => {
  const { showDialog, closeDialog } = useDialog();

  const methods = useForm<IFindUserFormInputs>({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const {
    control,
    formState: { isDirty, isValid, errors },
    handleSubmit,
  } = methods;

  const onSubmit = async (params: IFindUserFormInputs) => {
    try {
      const { data } = await postFindUser(params);
      showDialog({
        type: DialogTypes.success,
        message: (
          <>
            <Text>이메일 발송 완료.</Text>
            <Button
              onClick={closeDialog}
              width="76px"
              height="43px"
              fontSize="16px"
              backgroundColor={PRIMARY[80]}
              margin="20px"
            >
              확인
            </Button>
          </>
        ),
      });
      onClickCloseModal();
    } catch (err) {
      console.log(err);
      showDialog({
        type: DialogTypes.error,
        message: (
          <>
            <Text>
              {err.status === 404
                ? '이전에 가입한 이력이 없는 이메일이에요.'
                : '회원 찾기에 실패했습니다.'}
            </Text>
            <Button
              onClick={closeDialog}
              width="76px"
              height="43px"
              fontSize="16px"
              backgroundColor={PRIMARY[80]}
              margin="20px"
            >
              확인
            </Button>
          </>
        ),
      });
    }
  };

  return (
    <>
      <Flex flexDirection="column" ml="20px" mr="20px">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mt="20px">
              <Text fontSize="24px" color={GRAY[2]} fontWeight="600">
                회원정보 수정
              </Text>
              <Text mt="10px" fontSize="14px" color={GRAY[5]}>
                비밀번호를 입력해주세요.
              </Text>
              <hr
                css={css`
                  width: 100%;
                  margin-top: 10px;
                  border: none;
                  border-top: 1px solid ${GRAY[2]};
                `}
              />
            </Box>
            <Box mt={20}>
              <Label>Password</Label>
              <Input
                name="email"
                width=""
                rules={{
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '정확한 이메일을 입력해주세요.',
                  },
                }}
                list="emailList"
                type="email"
                control={control}
                placeholder="이메일을 입력해주세요."
              />
              <StyledDatalist id="emailList">
                <option key="naver" value="@naver.com" />
                <option key="gmail" value="@gmail.com" />
                <option key="kakao" value="@kakao.com" />
              </StyledDatalist>
            </Box>
            <Box mt={28}>
              <TextButton
                width="348px"
                height="43px"
                fontSize="16px"
                fontColor={BASE[3]}
                backgroundColor={PRIMARY[80]}
                onClick={handleSubmit(onSubmit)}
                disabled={!isDirty || !isValid}
              >
                회원정보 찾기
              </TextButton>
            </Box>
          </form>
        </FormProvider>
      </Flex>
    </>
  );
};
export default FindUserModalContent;

const StyledDatalist = styled.datalist`
  width: 120px;
  height: 120px;
`;
