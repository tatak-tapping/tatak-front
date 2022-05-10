import styled from "@emotion/styled";
import { BASE, PRIMARY } from "styles/colors";


interface ChipProps {
  onClick: VoidFunction,
  children: React.ReactNode
}

const StyledChip = styled.button`
  height: 36px;
  padding: 4px 8px 4px 6px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid ${PRIMARY[100]};
  background-color: ${PRIMARY[100]};
  color: ${BASE[1]};
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  :active{
    background-color: ${BASE[1]};
    border: 1px solid ${PRIMARY[40]};
    color: ${PRIMARY[40]};
  }
`;

const Chip = ({
  onClick,
  children
}:ChipProps) => {
  return (
    <StyledChip onClick={onClick}>
      {children}
    </StyledChip>
  );
};

export default Chip;