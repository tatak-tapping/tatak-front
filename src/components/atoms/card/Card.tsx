import React from 'react';
import styled from '@emotion/styled';

import colorStyle from 'components/atoms/pick/colorStyle';
import { ReactComponent as TatakImg } from 'assets/icons/pick-tatak.svg';

interface CardProps {
  contents: string;
  title: string;
  writer: string;
  as: any;
  pickColor: number;
  size: string;
  family: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ contents, title, writer, as = 'textarea', pickColor, size, family }, ref) => {
    return (
      <StyledCard pickColor={pickColor} ref={ref}>
        <StyledCardBox>
          <StyledContent as={as} size={size} family={family}>
            {contents}
          </StyledContent>
          <StyledTitleBox>
            <StyledTitle size={size} family={family}>
              {title}
            </StyledTitle>
            <StyledTitle size={size} family={family}>
              {' '}
              {writer}
            </StyledTitle>
          </StyledTitleBox>
        </StyledCardBox>
        <StyledImg pickColor={pickColor}>
          <TatakImg />
        </StyledImg>
      </StyledCard>
    );
  }
);

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

const StyledCardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 336px;
  height: 100%;
  box-sizing: border-box;
`;

const StyledContent = styled.textarea<{ size: string; family: string }>`
  font-size: 21px;
  line-height: 1.6;
  width: 100%;
  height: 224px;
  overflow: auto;
  background: transparent;
  border: none;
  color: inherit;

  ${(props) => {
    switch (props.size) {
      case 'SMALL':
        return `
          font-size: 18px;
          line-height: 1.55;
        `;
      case 'MEDIUM':
        return `
          font-size: 21px;
          line-height: 1.8;
        `;
      case 'LARGE':
        return `
          font-size: 26px;
          line-height: 1.7;
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
