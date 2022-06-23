/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef } from 'react';
import { BASE, GRAY, PRIMARY } from 'styles/colors';
import linkStyle from 'styles/linkStyle';

interface RadioProps {
  width: string;
  id: string;
  name: string;
  selectedValue: any;
  value: string;
  label: React.ReactNode;
  ref?: any;
  onChange: VoidFunction;
  rest?: any;
}

const RadioTab = ({
  width,
  value,
  id,
  name,
  onChange,
  ref,
  selectedValue,
  label,
  ...rest
}: RadioProps) => {
  return (
    <RadioTabStyled width={width} className={value === selectedValue ? 'checked' : undefined}>
      <input type="radio" id={id} name={name} value={value} ref={ref} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </RadioTabStyled>
  );
};

export default forwardRef(RadioTab);

const RadioTabStyled = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  color: ${PRIMARY[100]};
  background-color: ${BASE[3]};
  border: 1px solid ${PRIMARY[40]};
  input[type='radio'] {
    display: none;
  }
  &.checked {
    background-color: ${PRIMARY[100]};
    border: 1px solid ${PRIMARY[100]};
  }
  label {
    cursor: pointer;
  }
  &.checked label,
  input:checked + label {
    background-color: ${PRIMARY[100]};
    color: ${BASE[1]};
  }
  :not(:last-child) {
    border-right: none;
  }
`;
