import { Alert, Typography, Box } from "@mui/material";
import React from "react";

const text = {
  title: "Error fetching books",
  details:
    "We encountered an error while fetching the book data. Please try again later",
};

const ErrorFetchingBooks: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Alert severity="error" sx={{ mb: 2 }}>
        <Typography variant="h6">{text.title}</Typography>
        <Typography variant="body2">{text.details}</Typography>
      </Alert>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "20rem",
    textAlign: "center",
    padding: 3,
  },
};

export default ErrorFetchingBooks;
