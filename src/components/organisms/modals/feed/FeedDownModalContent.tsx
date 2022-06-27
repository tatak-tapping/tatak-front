/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import { Box, Button, Flex, Text } from 'rebass';
import { useForm, useWatch, FieldValues, FormProvider, Controller } from 'react-hook-form';
import html2canvas from 'html2canvas';

import { BASE, GRAY, PRIMARY } from 'styles/colors';
import Select from 'components/atoms/input/select';
import Card from 'components/atoms/card/Card';
import ColorTabs from 'components/molecules/tabs/ColorTabs';
import FontSizeTabs from 'components/molecules/tabs/FontSizeTabs';

import { FontFamily, FontFamilyOption } from 'utils/types';
import { FontSize } from 'utils/types/img-down';

import { useRecoilState } from 'recoil';

import { typoAtom } from 'modules/atom';
import { ITypo } from 'utils/types';

interface FeedDownModalContentProps {}

const FeedDownModalContent = () => {
  const [typo] = useRecoilState<ITypo>(typoAtom);
  const contents = typo?.contents;
  const title = typo?.title;
  const writer = typo?.writer;

  const methods = useForm({
    defaultValues: {
      color: 0,
      fontFamily: FontFamily.Eulyoo1945,
      fontSize: 'SMALL',
    },
    mode: 'onChange',
  });

  const { control, handleSubmit } = methods;

  const onSubmit = async (params: any) => {
    setImgSave(true);
    await downImg();
    setImgSave(false);
  };

  const colorWatch = useWatch({ control, name: 'color' });
  const fontFamilyWatch = useWatch({ control, name: 'fontFamily' });
  const fontSizeWatch = useWatch({ control, name: 'fontSize' });

  const $card = React.useRef<HTMLDivElement>(null);
  const downImg = async () => {
    await html2canvas($card.current).then(async (canvas) => {
      let url = '';
      url = await canvas.toDataURL('image/jpg').split(',')[1];
      const $fakeLink: HTMLAnchorElement = window.document.createElement('a');
      $fakeLink.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
      $fakeLink.download = 'download.jpg';
      window.document.body.appendChild($fakeLink);
      $fakeLink.click();
      window.document.body.removeChild($fakeLink);
      $fakeLink.remove();
    });
  };

  const [isPreview, setIsPreview] = React.useState(false);

  const [imgSave, setImgSave] = React.useState(false);

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
          <Flex width={!isPreview ? '704px' : '400px'} mt="28px">
            <Box width="400px" mr="48px">
              <Card
                size={'normal'}
                contents={contents}
                title={title}
                writer={writer}
                as={!imgSave ? 'textarea' : 'div'}
                ref={$card}
                pickColor={colorWatch}
                fontsize={fontSizeWatch}
                fontfamily={fontFamilyWatch}
              />
            </Box>

            {!isPreview && (
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
            )}
          </Flex>

          <hr
            css={css`
              width: 100%;
              margin-top: 38px;
              margin-bottom: 28px;
              border: none;
              border-top: 1px solid ${GRAY[2]};
            `}
          />

          <Flex mt="40px" justifyContent="flex-end">
            <Button
              type="button"
              alignContent="center"
              mr="8px"
              height="43px"
              fontSize="16px"
              fontWeight="600"
              color={PRIMARY[40]}
              onClick={() => {
                setIsPreview((isPreview) => !isPreview);
              }}
            >
              {isPreview ? '미리보기' : '이전으로'}
            </Button>
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
      <Box width="400px" mr="48px" sx={{ position: 'absolute', zIndex: -9999, left: '-99999px' }}>
        <Card
          size={!imgSave ? 'normal' : 'large'}
          contents={contents}
          title={title}
          writer={writer}
          as={'div'}
          ref={$card}
          pickColor={colorWatch}
          fontsize={fontSizeWatch}
          fontfamily={fontFamilyWatch}
        />
      </Box>
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
