import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  DialogContentText,
} from "@mui/material";
import { BookI } from "../../types/book";
import { deleteBook } from "../../api";
import { useBooks } from "../../hooks/useBooks";

const text = {
  delete: "Delete",
  closeTheModal: "Close",
  errorDeletingTheBook: "Error deleting the book:",
  deleteTheBook: "Delete the book",
  deleteTitle: "Are you sure you want to delete this book ?",
  deleteText:
    "This action cannot be undone. Please confirm if you wish to proceed with permanently deleting this book.",
};

interface BookModalPropsI {
  bookId: number;
}

const handleMutationCache = (books: BookI[], bookId: number) => {
  const removeIndex = books.findIndex((book) => book.id === bookId);
  return books.slice(removeIndex, 1);
};

const DeleteBookModal = ({ bookId }: BookModalPropsI) => {
  const [open, setOpen] = useState<boolean>(false);
  const { data: books, mutate } = useBooks();

  const handleModalState = () => {
    setOpen(!open);
  };

  const handleDeleteBook = async (bookId: number) => {
    try {
      await mutate(
        async () => {
          await deleteBook(bookId);
          return handleMutationCache(books, bookId);
        },
        {
          optimisticData: () => handleMutationCache(books, bookId),
          rollbackOnError: true,
        }
      );
    } catch (error) {
      alert(text.errorDeletingTheBook);
      console.error(text.errorDeletingTheBook, error);
    }
    handleModalState();
  };

  return (
    <Box>
      <Button color="error" onClick={handleModalState}>
        {text.delete}
      </Button>

      <Dialog open={open} onClose={handleModalState} maxWidth="sm" fullWidth>
        <DialogTitle id="alert-dialog-title">{text.deleteTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text.deleteText}
          </DialogContentText>
        </DialogContent>{" "}
        <DialogActions>
          <Button onClick={handleModalState} color="secondary">
            {text.closeTheModal}
          </Button>
          <Button
            onClick={() => {
              handleDeleteBook(bookId);
            }}
            color="secondary"
          >
            {text.deleteTheBook}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeleteBookModal;
