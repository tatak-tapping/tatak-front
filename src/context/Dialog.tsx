import Dialog, { DialogProps, DialogTypes } from 'components/atoms/dialog/Dialog';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface DialogOptions extends DialogProps {}

interface DialogGlobalState {
  showDialog: (options: DialogOptions) => void;
  closeDialog?: VoidFunction;
}

const DialogContext = createContext<DialogGlobalState>({
  showDialog: () => {},
  closeDialog: () => {},
});

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [options, setOptions] = useState<DialogOptions>({
    isVisible: false,
    message: '메세지',
    width: '100px',
    type: DialogTypes.error,
  });

  const closeDialog = useCallback(() => {
    setOptions({ isVisible: false });
  }, []);

  const showDialog = useCallback(({ width, type, message }: Omit<DialogOptions, 'isVisible'>) => {
    setOptions({ isVisible: true, type, message, width });
  }, []);

  return (
    <DialogContext.Provider value={{ showDialog, closeDialog }}>
      <Dialog
        isVisible={options.isVisible}
        message={options.message}
        type={options.type}
        width={options.width}
      />
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  return useContext(DialogContext);
};
