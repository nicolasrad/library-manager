import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import ImageCard from "../molecules/ImageCard";
import BookSkeleton from "../molecules/BookSkeleton";
import ErrorFetchingBooks from "../molecules/ErrorFetchingBooks";
import { useBooks } from "../../hooks/useBooks";
import { BookI } from "../../types/book";

const text = {
  bookList: "Book List",
};

const BookList: React.FC = () => {
  const { data: books, isLoading, isError, mutate } = useBooks();

  if (isLoading) return <BookSkeleton />;
  if (isError) return <ErrorFetchingBooks onRetry={mutate} />;

  return (
    <Box sx={styles.container}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Roboto",
          fontSize: "2rem",
          fontWeight: 700,
          color: "#2f3e46",
          letterSpacing: "0.05em",
          lineHeight: 1.2,
          textAlign: "left",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          margin: 3,
        }}
      >
        {text.bookList}
      </Typography>

      <Grid container spacing={1}>
        {books.map((book: BookI) => (
          <Grid item key={book.id} xs={12} sm={4} md={3} lg={2}>
            <ImageCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const styles = {
  container: { padding: 2 },
};

export default BookList;
