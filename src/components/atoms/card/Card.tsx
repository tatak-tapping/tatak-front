import React from 'react';
import styled from '@emotion/styled';

import colorStyle from 'components/atoms/pick/colorStyle';
import { ReactComponent as TatakImg } from 'assets/icons/pick-tatak.svg';

interface CardProps {
  pickColor: number;
  size: string;
  family: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ pickColor, size, family }, ref) => {
  return (
    <StyledCard pickColor={pickColor} ref={ref}>
      <StyledCardBox>
        <StyledContent size={size} family={family}>
          나무에 앉은 새는 나뭇가지가 부러지는 것을 두려워하지 않습니다. 그건 나뭇가지를 믿어서가
          아니라 자신의 날개를 믿기 때문이죠. 항상 당신 자신을 믿으세요.
        </StyledContent>
        <StyledTitleBox>
          <StyledTitle size={size} family={family}>
            내가 상상하면 꿈이 현실이 된다
          </StyledTitle>
          <StyledTitle size={size} family={family}>
            {' '}
            김새해
          </StyledTitle>
        </StyledTitleBox>
      </StyledCardBox>
      <StyledImg pickColor={pickColor}>
        <TatakImg />
      </StyledImg>
    </StyledCard>
  );
});

export default Card;

const StyledCard = styled.div<{ pickColor: number; ref?: any }>`
  position: relative;
  display: flex;
  width: 400px;
  height: 400px;
  padding: 32px;
  box-sizing: border;
  flex-direction: column;
  justify-content: center;

  ${(props) => {
    return `
      background: ${colorStyle[props.pickColor].bg};
      color: ${colorStyle[props.pickColor].color};

      p, h2, div {
          background: inherit;
          color: inherit;
      }
    `;
  }}
`;

const StyledCardBox = styled.div``;

const StyledContent = styled.p<{ size: string; family: string }>`
  font-size: 21px;
  line-height: 1.6;

  ${(props) => {
    switch (props.size) {
      case 'SMALL':
        return `
          font-size: 18px;
        `;
      case 'MEDIUM':
        return `
          font-size: 21px;
        `;
      case 'LARGE':
        return `
          font-size: 26px;
        `;
      default:
        return ``;
    }
  }}

  ${(props) => {
    return `
      font-family: ${props.family};
    `;
  }}
`;
const StyledTitleBox = styled.h2`
  padding-top: 12px;
`;
const StyledTitle = styled.div<{ size: string; family: string }>`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
`;

const StyledImg = styled.div<{ pickColor: number }>`
  position: absolute;
  bottom: 25px;
  right: 24px;

  ${(props) => {
    return `
      svg {
        fill: ${colorStyle[props.pickColor].bg};
        width: 70px;
        height: 18px;
        background: transparent;

        * {
          background: inherit;
        }
      };
    `;
  }}
`;
