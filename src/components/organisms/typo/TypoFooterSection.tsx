import { getArticle } from "api/common";
import IconAndTextButton from "components/atoms/button/IconAndTextButton";
import { BookMarkIcon, ReturnIcon, TurnUpIcon } from "components/atoms/icon/Icon";
import { typoTextAtom } from "modules/atom";
import { Box, Flex } from "rebass";
import { useRecoilState } from "recoil";
import { ITypo } from "utils/types";

const TypoFooterSection = () => {
  const [typoText, setTypoText ] = useRecoilState<ITypo>(typoTextAtom);

  const handleClick = () => alert("준비중입니다.");

  const handleRefreshClick = () => {
    const getArticleAsync = async () => {
      const {data} = await getArticle();
      console.log(data);
      setTypoText(data);
    };
    getArticleAsync();
  };

  return(
    <Flex as='header' width={1000} height={52} padding="0 24px" alignItems="center">
      <Flex justifyContent="center" alignItems="center" marginLeft="auto">
        <IconAndTextButton onClick={handleRefreshClick} icon={<ReturnIcon />}>
          새로고침
        </IconAndTextButton>
        <IconAndTextButton onClick={handleClick} icon={<BookMarkIcon />}>
          스크랩
        </IconAndTextButton>
        <IconAndTextButton onClick={handleClick} icon={<TurnUpIcon />}>
          이미지 저장
        </IconAndTextButton>
      </Flex>
    </Flex>
  )
}

export default TypoFooterSection;