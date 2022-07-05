import styled from '@emotion/styled';

import TypoFooterSection from 'components/organisms/typo/TypoFooterSection';
import TypoMainSection from 'components/organisms/typo/TypoMainSection';
import {
  FullScreen,
  FullScreenHandle,
  FullScreenProps,
  useFullScreenHandle,
} from 'react-full-screen';

interface TypoTemplateProps {
  handleFullScreen?: FullScreenHandle;
}

const StyledTypo = styled.div`
  margin-top: 60px;
`;

const TypoTemplate = ({ handleFullScreen }: TypoTemplateProps) => {
  return (
    <StyledTypo>
      <TypoMainSection />
      <TypoFooterSection />
    </StyledTypo>
  );
};

export default TypoTemplate;
