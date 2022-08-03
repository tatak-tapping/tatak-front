import React from 'react';
import styled from '@emotion/styled';

import colorStyle from 'components/atoms/pick/colorStyle';

interface PickProps {
  id: number;
  name: string;
  value: number;
  selectedValue: number;
  ref: any;
  onChange: VoidFunction;
}

const Pick = ({ id, name, value, selectedValue, ref, onChange }: PickProps) => {
  return (
    <StyledPick color={String(value)} active={value == selectedValue ? 'on' : 'off'}>
      <input type="radio" id={String(id)} name={name} value={value} ref={ref} onChange={onChange} />
      <label htmlFor={String(id)}>{value}</label>
    </StyledPick>
  );
};

export default Pick;

const StyledPick = styled.div<{ color: string; active: string }>`
  display: inline-block;
  input {
    --webkit-appearance: none;
    display: none;
  }
  input + label {
    display: inline-block;
    position: relative;
    width: 32px;
    height: 32px;
    border: 2px solid #f6f6f2;
    border-radius: 50%;
    text-indent: -999px;

    ${(props) => {
      if (props.color === '8') return `outline: 1px solid #E9E8E0;`;
    }}

    &:after {
      content: '';
      position: absolute;
      top: -5px;
      right: -5px;
      left: -5px;
      bottom: -5px;
      border-radius: 50px;
      border: 3px solid transparent;

      ${(props) => {
        if (props.active === 'on') {
          return `
          border-color: ${colorStyle[Number(props.color)].bg}
        `;
        }
        return null;
      }}
    }

    ${(props) => {
      return `
        background: ${colorStyle[Number(props.color)].bg};
    `;
    }}
  }
`;
