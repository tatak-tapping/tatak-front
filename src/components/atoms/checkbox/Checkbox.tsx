import styled from '@emotion/styled';
import { BASE, GRAY, PRIMARY } from 'styles/colors';

interface CheckBoxProps {
  name: string;
  margin?: string;
  checked: boolean;
  onClick: VoidFunction;
}

const StyledCheckbox = styled.div<{ margin: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
  font-size: 14px;
  line-height: 17px;
  color: ${GRAY[5]};
  cursor: pointer;
  user-select: none;
  input[type='checkbox'] {
    display: none;
  }
  > label {
    content: url('/images/checkbox_off.svg');
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: ${BASE[3]};
    border: 1px solid ${PRIMARY[40]};
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    cursor: pointer;
  }
  label > span::before {
    content: url('/images/checkbox_off.svg');
  }
  label.checked {
    background-color: ${PRIMARY[80]};
    border: none;
  }
  label.checked > span::before {
    content: url('/images/checkbox_on.svg');
  }
`;

const CheckBox = ({ margin = '', name, checked, onClick }: CheckBoxProps) => {
  return (
    <StyledCheckbox margin={margin} onClick={onClick}>
      <label htmlFor={name} className={checked ? 'checked' : undefined}>
        <input type="checkbox" name={name} checked={checked} readOnly />
        <span />
      </label>
      <span>{name}</span>
    </StyledCheckbox>
  );
};

export default CheckBox;
