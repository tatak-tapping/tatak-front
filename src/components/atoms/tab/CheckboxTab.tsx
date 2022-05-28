/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';
import { BASE, GRAY, PRIMARY } from "styles/colors";
import linkStyle from "styles/linkStyle";

interface CheckboxProps {
  name: string;
  checked: boolean;
  width?:string;
  onClick: VoidFunction;
}

const CheckboxTabStyled = styled.div<{width:string}>`
  width: ${props => props.width};
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
  input[type='checkbox'] {
    display: none;
  }
  &.checked {
    background-color: ${PRIMARY[100]};
    border: 1px solid ${PRIMARY[100]};
  }
  &.checked span {
    background-color: ${PRIMARY[100]};
    color: ${BASE[1]};
  }
  :not(:last-child){
    border-right: none;
  }
`;

const CheckboxTab = ({ name, checked, onClick, width }: CheckboxProps) => {
  return  (
    <CheckboxTabStyled onClick={onClick} width={width} className={checked ? 'checked' : undefined}>
      <input type="checkbox" name={name} checked={checked} readOnly />
      <span>{name}</span>
    </CheckboxTabStyled>
  );
};

export default CheckboxTab;
