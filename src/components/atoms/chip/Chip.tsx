import styled from "@emotion/styled";
import { BASE, PRIMARY } from "styles/colors";


interface ChipProps {
  onClick: VoidFunction,
  children: React.ReactNode,
  margin?:string,
  active?:boolean,
}

const StyledChip = styled.button<{margin?:string}>`
  margin:${(props) => props.margin};
  text-align: center;
  border-radius: 4px;
  border: 1px solid ${PRIMARY[40]};
  background-color: none;
  color: ${PRIMARY[40]};
  font-weight: 600;
  font-size: 16px;
  :active{
    background-color: ${PRIMARY[100]};
    border: 1px solid ${PRIMARY[40]};
    color: ${BASE[1]};
  }
  +.active{
    background-color: ${PRIMARY[100]};
    border: 1px solid ${PRIMARY[40]};
    color: ${BASE[1]};
  }
`;

const Chip = ({
  onClick,
  children,
  margin,
  active,
  ...rest
}:ChipProps) => {
  return (
    <StyledChip margin={margin} onClick={onClick} className={active && "active"} {...rest}   >
      {children}
    </StyledChip>
  );
};

export default Chip;