import { Box, Grid, Typography } from "@mui/material";
import AddBookModal from "./AddBookModal";

const text = {
  bookList: "Book List",
  suggestions: "Do you have any suggestions for new books?",
};

const Header = () => {
  return (
    <Grid container sx={styles.header}>
      <Grid item>
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
      </Grid>

      <Grid item>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f5f5f5",
            padding: 2,
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1, marginRight: 3 }}>
            {text.suggestions}
          </Typography>

          <AddBookModal />
        </Box>
      </Grid>
    </Grid>
  );
};
const styles = {
  header: { display: "flex", alignItems: "center" },
};

export default Header;
