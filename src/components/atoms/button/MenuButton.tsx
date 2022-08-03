/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { GRAY, PRIMARY } from 'styles/colors';

interface MenuButtonProps {
  onClick: VoidFunction;
  children: React.ReactNode;
}

const StyledMenu = styled.button`
  width: 167px;
  height: 44px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  padding: 13px 8px;
  color: ${GRAY[3]};
  border: none;
  cursor: pointer;
  :hover {
    color: ${PRIMARY[100]};
  }
  :active {
    color: ${PRIMARY[100]};
  }
`;

const MenuButton = ({ onClick, children }: MenuButtonProps) => {
  return <StyledMenu onClick={onClick}>{children}</StyledMenu>;
};

export default MenuButton;
