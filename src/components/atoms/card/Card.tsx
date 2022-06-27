import React from 'react';
import styled from '@emotion/styled';

import colorStyle from 'components/atoms/pick/colorStyle';
import { ReactComponent as TatakImg } from 'assets/icons/pick-tatak.svg';

interface CardProps {
  contents: string;
  title: string;
  writer: string;
  as: any;
  size: string;
  pickColor: number;
  fontsize: string;
  fontfamily: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ contents, title, writer, as = 'textarea', size, pickColor, fontsize, fontfamily }, ref) => {
    return (
      <StyledCard size={size} pickColor={pickColor} ref={ref}>
        <StyledCardBox size={size}>
          <StyledContent as={as} size={size} fontsize={fontsize} fontfamily={fontfamily}>
            {contents}
          </StyledContent>
          <StyledTitleBox>
            <StyledTitle size={size} fontsize={fontsize} fontfamily={fontfamily}>
              {title}
            </StyledTitle>
            <StyledTitle size={size} fontsize={fontsize} fontfamily={fontfamily}>
              {' '}
              {writer}
            </StyledTitle>
          </StyledTitleBox>
        </StyledCardBox>
        <StyledImg size={size} pickColor={pickColor}>
          <TatakImg />
        </StyledImg>
      </StyledCard>
    );
  }
);

export default Card;

const StyledCard = styled.div<{ size: string; pickColor: number; ref?: any }>`
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

  ${(props) => {
    if (props.size === 'large') {
      return `
        width: 1200px;
        height: 1200px;
        padding: 131px 100px;
      `;
    }
  }}
`;

const StyledCardBox = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 336px;
  height: 100%;
  box-sizing: border-box;

  ${(props) => {
    if (props.size === 'large') {
      return `
        max-height: 938px;
      `;
    }
  }}
`;

const StyledContent = styled.textarea<{ size: string; fontsize: string; fontfamily: string }>`
  font-size: 21px;
  line-height: 1.6;
  width: 100%;
  height: 224px;
  overflow: auto;
  background: transparent;
  border: none;
  color: inherit;

  ${(props) => {
    switch (props.fontsize) {
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
    if (props.size === 'large') {
      return `
        height: 768px;
        line-height: 1.6;
        letter-spacing: -0.0003px;
      `;
    }
  }}

${(props) => {
    if (props.size !== 'large') return ``;
    switch (props.fontsize) {
      case 'SMALL':
        return `
          font-size: 54px;
          
        `;
      case 'MEDIUM':
        return `
          font-size: 64px;
          
        `;
      case 'LARGE':
        return `
          font-size: 80px;
          
        `;
      default:
        return ``;
    }
  }}

  ${(props) => {
    return `
      font-family: ${props.fontfamily};
    `;
  }}
`;
const StyledTitleBox = styled.h2`
  padding-top: 12px;
`;
const StyledTitle = styled.div<{ size: string; fontsize: string; fontfamily: string }>`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;

  ${(props) => {
    if (props.size === 'large') {
      return `
        font-size: 48px;
        line-height: 1.4;
        opacity: 0.8;
      `;
    }
  }}
`;

const StyledImg = styled.div<{ pickColor: number; size: string }>`
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

  ${(props) => {
    if (props.size === 'large') {
      return `
      svg {
        width: 210px;
        height: 56px;
        bottom: 72px;
        right: 73px;
      };
    `;
    }
  }}
`;
