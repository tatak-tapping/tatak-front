
import styled from '@emotion/styled';
import { BASE, GRAY, PRIMARY } from 'styles/colors';

interface RadioTabProps {
  name: string;
  width?: string;
  checked: boolean;
  onClick?: VoidFunction;
}

const StyledRadioTab = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  user-select: none;
  color: ${PRIMARY[40]};
  background-color: none;
  border: 1px solid ${PRIMARY[40]};
  input[type='radio'] {
    display: none;
  }
  input[type='radio']:checked{
    background-color: ${PRIMARY[100]};
    border: 1px solid ${PRIMARY[100]};
  }
  label {
    cursor: pointer;
  }
  :checked + label{
    color:${BASE[1]};
  }
  .segment-button:last-child {
    border-right: none;
  }
`;

const RadioTab = ({ width = '100px', name, checked, onClick }: RadioTabProps) => {
  return (
    <StyledRadioTab width={width} onClick={onClick}>
      <input type="radio" id={name} value={name} name="language"/>
      <label htmlFor={name}>
        {name}
      </label>
    </StyledRadioTab>
  );
};

export default RadioTab;