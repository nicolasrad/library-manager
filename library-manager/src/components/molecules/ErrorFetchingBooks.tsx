import { Alert, Button, Typography, Box } from "@mui/material";

const text = {
  title: "Error fetching books",
  details:
    "We encountered an error while fetching the book data. Please try again later",
  retry: "Retry",
};

interface ErrorFetchingBooksProps {
  onRetry?: () => void;
}

const ErrorFetchingBooks = ({ onRetry }: ErrorFetchingBooksProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "20rem",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Alert severity="error" sx={{ mb: 2 }}>
        <Typography variant="h6">{text.title}</Typography>
        <Typography variant="body2">{text.details}</Typography>
      </Alert>

      {onRetry && (
        <Button variant="contained" color="primary" onClick={onRetry}>
          {text.retry}
        </Button>
      )}
    </Box>
  );
};

export default ErrorFetchingBooks;
