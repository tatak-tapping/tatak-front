
import Modal from 'components/atoms/modal/Modal';
import { isOpenModalAtom, modalAtom } from 'modules/atom';
import { useEffect } from 'react';
import { ReactNode, useCallback, useRef, useState } from 'react';
import { Box } from 'rebass';
import { useRecoilState } from 'recoil';

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
  const [isOpenModal, setIsOpenModal] = useRecoilState(isOpenModalAtom);
  const [modal, setModal] = useRecoilState(modalAtom);

  useEffect(() => {
    return () => { mountedRef.current = false }
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true);
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
    setIsModalVisible(false);
    setModal(undefined);
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