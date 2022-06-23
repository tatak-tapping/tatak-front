/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import { Box, Button, Flex, Text } from 'rebass';
import { useForm, useWatch, FieldValues, FormProvider, Controller } from 'react-hook-form';

import { BASE, GRAY, PRIMARY } from 'styles/colors';
import Select from 'components/atoms/input/select';
import Card from 'components/atoms/card/Card';
import ColorTabs from 'components/molecules/tabs/ColorTabs';
import FontSizeTabs from 'components/molecules/tabs/FontSizeTabs';

import { FontFamily, FontFamilyOption } from 'utils/types';
import { FontSize } from 'utils/types/img-down';

interface FeedDownModalContentProps {}

const FeedDownModalContent = () => {
  const methods = useForm({
    defaultValues: {
      color: 0,
      fontFamily: FontFamily.Eulyoo1945,
      fontSize: 'SMALL',
    },
    mode: 'onChange',
  });

  const { control, handleSubmit } = methods;

  const onSubmit = (params: any) => {
    console.log(params);
  };

  const colorWatch = useWatch({ control, name: 'color' });
  const fontFamilyWatch = useWatch({ control, name: 'fontFamily' });
  const fontSizeWatch = useWatch({ control, name: 'fontSize' });

  return (
    <Flex flexDirection="column" mt="20px" ml="20px" mr="20px">
      <Text fontSize="24px" fontWeight="600" color={GRAY[1]}>
        이미지 저장
      </Text>
      <Text mt="10px" fontSize="14px" color={GRAY[5]}>
        이미지로 저장할 수 있어요.
      </Text>
      <hr
        css={css`
          width: 100%;
          margin-top: 10px;
          border: none;
          border-top: 1px solid ${GRAY[2]};
        `}
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex width="704px" mt="28px">
            <Box width="400px" mr="48px">
              <Card pickColor={colorWatch} size={fontSizeWatch} family={fontFamilyWatch} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <StyledTitle>배경</StyledTitle>
              <ColorTabs name="color" control={control} />
              <StyledTitle>글꼴</StyledTitle>
              <Select
                name="fontFamily"
                options={
                  FontFamilyOption &&
                  FontFamilyOption.map((item) => ({ label: item.label, value: item.value }))
                }
                control={control}
                comment={''}
              />
              <StyledTitle>글자 크기</StyledTitle>
              <FontSizeTabs name="fontSize" control={control} />
            </Box>
          </Flex>

          <Flex mt="40px" justifyContent="flex-end">
            <Button
              backgroundColor={PRIMARY[80]}
              color={BASE[3]}
              onClick={() => handleSubmit(onSubmit)}
            >
              저장하기
            </Button>
          </Flex>
        </form>
      </FormProvider>
    </Flex>
  );
};

const StyledTitle = styled.h3`
  color: #303030;
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 12px;
`;

export default FeedDownModalContent;
