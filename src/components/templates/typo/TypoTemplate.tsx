import TypoFooterSection from "components/organisms/typo/TypoFooterSection";
import TypoMainSection from "components/organisms/typo/TypoMainSection";
import { FullScreen, FullScreenHandle, FullScreenProps, useFullScreenHandle } from "react-full-screen";

interface TypoTemplateProps {
  handleFullScreen?: FullScreenHandle
}

const TypoTemplate = ({handleFullScreen}:TypoTemplateProps) => {
  return(
    <>
      <TypoMainSection />
      <TypoFooterSection />
    </>
  );
}

export default TypoTemplate;