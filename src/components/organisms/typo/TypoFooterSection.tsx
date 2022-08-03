/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { getArticle } from 'api/common';
import IconAndTextButton from 'components/atoms/button/IconAndTextButton';
import { BookMarkIcon, ReturnIcon, TurnUpIcon } from 'components/atoms/icon/Icon';
import { typoAtom } from 'modules/atom';
import { Box, Flex } from 'rebass';
import { useRecoilState } from 'recoil';
import { GRAY } from 'styles/colors';
import { ITypo } from 'utils/types';

import useModal from 'hooks/userModal';
import IconButton from 'components/atoms/button/IconButton';
import { CloseIcon } from 'components/atoms/icon/Icon';
import FeedDownModalContent from 'components/organisms/modals/feed/FeedDownModalContent';

const TypoFooterSection = () => {
  const [typo, setTypo] = useRecoilState<ITypo>(typoAtom);

  const handleClick = () => {
    handleOpenModal();
  };

  const handleRefreshClick = () => {
    const getArticleAsync = async () => {
      const { data } = await getArticle();
      setTypo(data);
    };
    getArticleAsync();
  };

  const { renderModal, handleOpenModal, handleCloseModal } = useModal({});

  return (
    <>
      {renderModal(
        <FeedDownModalContent />,
        <IconButton width="32px" height="32px" border="none" onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      )}
      <Flex
        justifyContent="center"
        alignItems="center"
        marginLeft="auto"
        marginRight="auto"
        width={1000}
        height={52}
        padding="0 24px"
      >
        <Flex>
          <div
            css={css`
              width: 40px;
              height: 40px;
              background-color: white;
              border-radius: 50%;
              text-align: center;
              line-height: 40px;
            `}
          >
            {typo?.category.emoji}
          </div>
          <Flex flexDirection="column" ml="8px">
            <Box>
              <span
                css={css`
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 17px;
                  color: ${GRAY[3]};
                `}
              >
                『{typo?.title}』
              </span>
              <span
                css={css`
                  margin-left: 4px;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 17px;
                  color: ${GRAY[3]};
                `}
              >
                {typo?.writer}
              </span>
            </Box>
            <Box>
              <div
                css={css`
                  font-weight: 400;
                  font-size: 12px;
                  line-height: 14px;
                  color: ${GRAY[6]};
                `}
              >
                {typo?.author.nickname}
              </div>
            </Box>
          </Flex>
        </Flex>
        <Flex justifyContent="center" alignItems="center" marginLeft="auto">
          <IconAndTextButton onClick={handleRefreshClick} icon={<ReturnIcon />}>
            새로고침
          </IconAndTextButton>
          <IconAndTextButton onClick={handleClick} icon={<BookMarkIcon />}>
            책갈피
          </IconAndTextButton>
          <IconAndTextButton onClick={handleClick} icon={<TurnUpIcon />}>
            이미지 저장
          </IconAndTextButton>
        </Flex>
      </Flex>
    </>
  );
};

export default TypoFooterSection;
