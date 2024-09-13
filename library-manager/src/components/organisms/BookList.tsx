import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import EditBookModal from "../molecules/EditBookModal";
import DeleteBookModal from "../molecules/DeleteBookModal";
import { useBooks } from "../../hooks/useBooks";
import { BookI } from "../../types/book";

const BookList: React.FC = () => {
  const { data: books, isLoading, isError } = useBooks();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error fetching books</Typography>;

  return (
    <Box sx={styles.container}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <Typography variant="h5" sx={styles.heading}>
            Book List
          </Typography>
          <List>
            {books.map((book: BookI) => (
              <ListItem key={book.id}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <ListItemText
                      primary={`${book.title} by ${book.author}`}
                      secondary={`Genre: ${book.genre} - ${book.description}`}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ marginBottom: 1 }}>
                      <EditBookModal book={book} />
                    </Box>
                    <Box>
                      <DeleteBookModal bookId={book.id} />
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  container: {
    padding: 2,
  },
  gridItem: {
    padding: 2,
    borderBottom: "1px solid #ddd",
  },
  heading: {
    textAlign: "center",
    marginBottom: 3,
  },
};

export default BookList;
