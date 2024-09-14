import React from "react";
import { Grid, Box } from "@mui/material";
import Header from "../molecules/Header";
import ImageCard from "../molecules/ImageCard";
import BookSkeleton from "../molecules/BookSkeleton";
import ErrorFetchingBooks from "../molecules/ErrorFetchingBooks";
import { useBooks } from "../../hooks/useBooks";
import { BookI } from "../../types/book";

const BookList: React.FC = () => {
  const { data: books, isLoading, isError, mutate } = useBooks();

  if (isLoading) return <BookSkeleton />;
  if (isError) return <ErrorFetchingBooks onRetry={mutate} />;

  return (
    <Box sx={styles.container}>
      <Header />
      <Grid container spacing={1}>
        {books.map((book: BookI) => (
          <Grid
            item
            key={book.id}
            xs={12}
            sm={4}
            md={3}
            lg={2}
            sx={styles.item}
          >
            <ImageCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const styles = {
  container: { padding: 2 },
  item: { marginTop: 5 },
};

export default BookList;
