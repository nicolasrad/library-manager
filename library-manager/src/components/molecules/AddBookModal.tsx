import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
} from "@mui/material";
import AddBookForm from "../organisms/AddBookForm";

const text = {
  addNewBook: "Add new book",
};

const AddBookModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleModalState = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={handleModalState}>
        {text.addNewBook}
      </Button>
      <Dialog open={open} onClose={handleModalState} maxWidth="sm" fullWidth>
        <DialogActions>
          <Button onClick={handleModalState} color="secondary">
            x
          </Button>
        </DialogActions>
        <DialogContent>
          <AddBookForm />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AddBookModal;
