import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
} from "@mui/material";
import { BookI } from "../../types/book";
import { deleteBook } from "../../api";
import { useBooks } from "../../hooks/useBooks";

interface BookModalPropsI {
  bookId: number;
}

const handleMutationCache = (books: BookI[], bookId: number) => {
  const removeIndex = books.findIndex((book) => book.id === bookId);
  return books.slice(removeIndex, 1);
};

const DeleteBookModal = ({ bookId }: BookModalPropsI) => {
  const [open, setOpen] = useState(false);
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
      console.error("Error adding book:", error);
    }
    handleModalState();
  };

  return (
    <Box>
      <Button color="error" onClick={handleModalState}>
        Delete
      </Button>

      <Dialog open={open} onClose={handleModalState} maxWidth="sm" fullWidth>
        <DialogActions>
          <Button onClick={handleModalState} color="secondary">
            X
          </Button>
        </DialogActions>
        <DialogContent>
          <Button onClick={handleModalState} color="secondary">
            Close the modal
          </Button>
          <Button
            onClick={() => {
              handleDeleteBook(bookId);
            }}
            color="secondary"
          >
            Delete the book
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DeleteBookModal;
