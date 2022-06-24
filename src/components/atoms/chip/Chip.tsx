import styled from '@emotion/styled';
import { BASE, GRAY, PRIMARY } from 'styles/colors';

interface ChipProps {
  name: string;
  checked: boolean;
  label?: string;
  onClick: VoidFunction;
  children?: React.ReactNode;
}

const StyledChip = styled.div`
  /* height: 36px; */
  padding: 3px 6px;
  margin: 0 6px 6px 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  color: ${PRIMARY[40]};
  background-color: ${BASE[3]};
  border: 1.3px solid ${PRIMARY[40]};
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  input[type='checkbox'] {
    display: none;
  }
  &.checked {
    border: 1.5px solid ${PRIMARY[100]};
  }
  &.checked span {
    color: ${PRIMARY[100]};
  }
  .chip-icon {
    line-height: 24px;
  }
`;

const Chip = ({ name, label, checked, onClick, children }: ChipProps) => {
  return (
    <StyledChip onClick={onClick} className={checked ? 'checked' : undefined}>
      <label htmlFor={name}>
        <input type="checkbox" name={name} checked={checked} readOnly />
        <span />
      </label>
      <span className="chip-icon">{children}</span>
      <span>{label}</span>
    </StyledChip>
  );
};

export default Chip;
