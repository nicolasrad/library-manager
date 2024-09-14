import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
} from "@mui/material";
import EditBookForm from "../organisms/EditbookForm";
import { BookI } from "../../types/book";

interface BookModalPropsI {
  book: BookI;
}
const EditBookModal = ({ book }: BookModalPropsI) => {
  const [open, setOpen] = useState(false);

  const handleModalState = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Button color="primary" onClick={handleModalState}>
        Edit
      </Button>

      <Dialog open={open} onClose={handleModalState} maxWidth="sm" fullWidth>
        <DialogActions>
          <Button onClick={handleModalState} color="secondary">
            X
          </Button>
        </DialogActions>
        <DialogContent>
          <EditBookForm book={book} onClose={handleModalState} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default EditBookModal;
