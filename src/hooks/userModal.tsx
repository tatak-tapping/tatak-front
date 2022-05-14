
import Modal from 'components/atoms/modal/Modal';
import { useEffect } from 'react';
import { ReactNode, useCallback, useRef, useState } from 'react';
import { Box } from 'rebass';

interface IUseModal {
  width?: string;
  padding?: string;
  handleClosedCallback?: VoidFunction;
  handleOpenedCallback?: VoidFunction;
}

const useModal = ({
  width,
  padding,
  handleClosedCallback,
  handleOpenedCallback,
}: IUseModal) => {
  const mountedRef = useRef(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    return () => { mountedRef.current = false }
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const renderModal = (children: ReactNode, closeButton?: ReactNode) => (
    <Modal
      width={width}
      padding={padding}
      isVisible={isModalVisible}
      onOpened={handleOpenedCallback}
      onClosed={handleClosedCallback}
      closeButton={closeButton}
    >
      {children}
    </Modal>
  );

  return {
    isModalVisible,
    handleOpenModal,
    handleCloseModal,
    renderModal,
  };
};

export default useModal;