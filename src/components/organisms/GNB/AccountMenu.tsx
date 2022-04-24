import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

const Wrapper = styled.div`
  position: relative;
`;

interface AccountMenuProps {
  isVisible: boolean;
  onClose: VoidFunction;
}

const AccountMenu = ({ isVisible, onClose }: AccountMenuProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isVisible]);

  return (
    <Wrapper ref={wrapperRef}>
      asdf
    </Wrapper>
  );
};

export default AccountMenu;