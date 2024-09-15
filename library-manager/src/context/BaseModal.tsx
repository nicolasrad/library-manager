import { ReactElement, useState, createContext, useContext } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
} from "@mui/material";

interface BaseModalProps {
  title: string;
  variantType: "text" | "outlined" | "contained";
  children: ReactElement;
}

interface ModalContextType {
  open: boolean;
  toggleModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  open: false,
  toggleModal: () => {},
});

export const useModal = () => useContext(ModalContext);

const BaseModal = ({ title, variantType, children }: BaseModalProps) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <ModalContext.Provider value={{ open, toggleModal }}>
      <Box>
        <Button variant={variantType} color="primary" onClick={toggleModal}>
          {title}
        </Button>

        <Dialog open={open} onClose={toggleModal} maxWidth="sm" fullWidth>
          <DialogActions>
            <Button onClick={toggleModal} color="secondary">
              X
            </Button>
          </DialogActions>

          <DialogContent>{children}</DialogContent>
        </Dialog>
      </Box>
    </ModalContext.Provider>
  );
};

export default BaseModal;
