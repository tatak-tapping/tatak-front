import styled from "@emotion/styled";
import { BASE, PRIMARY } from "styles/colors";


interface ChipProps {
  key: number;
  checked: boolean;
  onClick: VoidFunction;
  child?:React.ReactElement;
  margin?: string;
}

const StyledChip = styled.div<{margin?:string}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin:${(props) => props.margin};
  text-align: center;
  border-radius: 4px;
  border: 1px solid ${PRIMARY[40]};
  background-color: none;
  color: ${PRIMARY[40]};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  input[type='checkbox'] {
    display: none;
  }
  :active{
    background-color: ${PRIMARY[100]};
    border: 1px solid ${PRIMARY[40]};
    color: ${BASE[1]};
  }
  > label {
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
  label.checked {
    background-color: ${PRIMARY[100]};
    border: 1px solid ${PRIMARY[40]};
    color: ${BASE[1]};
  }
`;

const Chip = ({
  onClick,
  margin,
  key,
  checked,
  child,
  ...rest
}:ChipProps) => {
  return (
    <StyledChip margin={margin} onClick={onClick}>
      {/* <label htmlFor={key} className={checked ? 'checked' : undefined}>
        <input type="checkbox" name={key} checked={checked} readOnly />
      </label> */}
      {child}
    </StyledChip>
  );
};

export default Chip;