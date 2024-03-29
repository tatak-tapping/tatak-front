/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Button, Flex, Text } from 'rebass';
import { BASE, GRAY, PRIMARY } from 'styles/colors';
import TextButton from 'components/atoms/button/TextButton';
import Label from 'components/atoms/label/Label';
import { postCommonLogin, postConfirmPassword, putUser } from 'api/auth';
import { useForm, useWatch, FieldValues, FormProvider } from 'react-hook-form';
import Input from 'components/atoms/input/Input';
import { useDialog } from 'context/Dialog';
import { DialogTypes } from 'components/atoms/dialog/Dialog';

interface ConfirmPasswordModalContentProps {
  onClickModifyButton?: () => void;
  onClickCloseModal?: () => void;
}

interface IModifyFormInputs extends FieldValues {
  nickname: string;
  password: string;
  passwordConfirm: string;
}

const ConfirmPasswordModalContent = ({
  onClickModifyButton,
  onClickCloseModal,
}: ConfirmPasswordModalContentProps) => {
  const { showDialog, closeDialog } = useDialog();

  const onSubmit = async (params: IModifyFormInputs) => {
    try {
      const { data } = await postConfirmPassword(params);
      if (data) {
        onClickModifyButton();
      } else {
        onClickCloseModal();
        showDialog({
          type: DialogTypes.error,
          message: (
            <>
              <Text>회원정보가 일치하지 않아요.</Text>
              <TextButton
                onClick={closeDialog}
                width="76px"
                height="43px"
                fontSize="16px"
                color={PRIMARY[100]}
                backgroundColor={BASE[3]}
                border={`${PRIMARY[40]} 1px soild`}
                margin="20px"
              >
                확인
              </TextButton>
              <TextButton
                onClick={closeDialog}
                width="135px"
                height="43px"
                fontSize="16px"
                color={BASE[3]}
                backgroundColor={PRIMARY[80]}
                border={`${PRIMARY[40]} 1px soild`}
                margin="20px"
              >
                회원정보 찾기
              </TextButton>
            </>
          ),
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const methods = useForm<IModifyFormInputs>({
    defaultValues: {
      password: '',
    },
    mode: 'onChange',
  });

  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
  } = methods;

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
                name="password"
                type="password"
                rules={{
                  required: true,
                  minLength: {
                    value: 6,
                    message: '최소 6자리로 입력해주세요.',
                  },
                }}
                control={control}
                placeholder="비밀번호를 입력해주세요."
              />
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
                회원정보 수정
              </TextButton>
            </Box>
          </form>
        </FormProvider>
      </Flex>
    </>
  );
};
export default ConfirmPasswordModalContent;
