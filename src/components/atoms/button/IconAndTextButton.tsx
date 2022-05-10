import styled from "@emotion/styled";
import { BASE, PRIMARY } from "styles/colors";


interface IconAndTextButtonProps {
  onClick: VoidFunction,
  children: React.ReactNode,
  icon?: React.ReactNode,
  isBlack?: boolean
}

const StyledIconAndTextButton = styled.button<{isBlack:boolean}>`
  height: 52px;
  align-items: flex-start;
  padding: 0 8px 0 4px;
  border-radius: 6px;
  border: 1px solid;
  border-image-source: conic-gradient(from 180deg at 50% 50%, #2E3D30 0deg, rgba(0, 0, 0, 0.2) 189.38deg, #2E3D30 360deg);
  background-color: ${BASE[3]};
  color: ${PRIMARY[100]};
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  * {
    fill: ${PRIMARY[80]};
    background-color: ${BASE[2]};
  }
  :hover{
    border: 1px solid;
    border-image-source: conic-gradient(from 180deg at 50% 50%, #2E3D30 0deg, rgba(46, 61, 48, 0.2) 189.38deg, #2E3D30 360deg);
    background-color: ${BASE[3]};
    color: ${PRIMARY[100]};
    * {
      fill: ${PRIMARY[80]};
      background-color: ${BASE[3]};
    }
  }
  :active{
    border: 1px solid;
    border-image-source: conic-gradient(from 180deg at 50% 50%, #2E3D30 0deg, rgba(46, 61, 48, 0.2) 189.38deg, #2E3D30 360deg);
    background-color: ${PRIMARY[100]};
    color: ${BASE[1]};
    * {
      fill: ${BASE[1]};
      background-color: ${PRIMARY[100]};
    }
  }
`;

const IconAndTextButton = ({
  onClick,
  isBlack = false,
  icon,
  children
}:IconAndTextButtonProps) => {
  return (
    <StyledIconAndTextButton isBlack={isBlack} onClick={onClick}>
      {icon}
      {children}
    </StyledIconAndTextButton>
  );
};

export default IconAndTextButton;