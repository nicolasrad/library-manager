import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import CollapsibleTable from "./CollapsableTable";
import Header from "../molecules/Header";
import ImageCard from "../molecules/ImageCard";
import BookSkeleton from "../molecules/BookSkeleton";
import ErrorFetchingBooks from "../molecules/ErrorFetchingBooks";
import { useBooks } from "../../hooks/useBooks";
import { BookI } from "../../types/book";

const text = {
  challengeAccepted: "Are you looking for a new challenge ?",
};

const BookList: React.FC = () => {
  const { data: books, isLoading, isError, mutate } = useBooks();

  if (isLoading) return <BookSkeleton />;
  if (isError) return <ErrorFetchingBooks onRetry={mutate} />;

  return (
    <Box sx={styles.container}>
      <Header />
      <Grid container spacing={2}>
        {books.map((book: BookI, index) => (
          <Grid
            item
            key={book.id + index}
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
      <Box sx={styles.infoBanner}>
        <Typography variant="h6" sx={styles.infoBannerText}>
          {text.challengeAccepted}
        </Typography>
      </Box>
      <CollapsibleTable />
    </Box>
  );
};

const styles = {
  container: { padding: 2 },
  item: { marginTop: 5 },
  infoBanner: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-between",
    backgroundColor: "#BBDEFB",
    padding: 2,
    marginTop: 5,
    borderRadius: 2,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  infoBannerText: { flexGrow: 1, marginRight: 3 },
};

export default BookList;
