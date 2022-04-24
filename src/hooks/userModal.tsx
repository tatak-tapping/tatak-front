
import Modal from 'components/atoms/modal/Modal';
import { ReactNode, useCallback, useState } from 'react';
import { Box } from 'rebass';
import { modalBackStyle } from 'styles/modal';

interface IUseModal {
  width?: string;
  height?: string;
  padding?: string;
  handleClosedCallback?: VoidFunction;
  handleOpenedCallback?: VoidFunction;
}

const useModal = ({
  width,
  height,
  padding,
  handleClosedCallback,
  handleOpenedCallback,
}: IUseModal) => {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const renderModal = (children: ReactNode, closeButton?: ReactNode) => (
    <Modal
      width={width}
      height={height}
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