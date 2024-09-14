import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import ImageCard from "../molecules/ImageCard";
import { useBooks } from "../../hooks/useBooks";
import { BookI } from "../../types/book";

const BookList: React.FC = () => {
  const { data: books, isLoading, isError } = useBooks();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error fetching books</Typography>;

  return (
    <Box sx={styles.container}>
      <Typography variant="h5" sx={styles.heading}>
        Book List
      </Typography>

      <Grid container spacing={2}>
        {books.map((book: BookI) => (
          <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
            <ImageCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const styles = {
  container: { padding: 2 },
  heading: { marginBottom: 2, textAlign: "center" },
};

export default BookList;
