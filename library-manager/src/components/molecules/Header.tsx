import { Box, Grid, Typography } from "@mui/material";
import AddBookForm from "../organisms/AddBookForm";
import BaseModal from "../../context/BaseModal";

const text = {
  bookList: "Book List",
  suggestions: "Do you have any suggestions for new books?",
};

const Header = () => {
  return (
    <Grid container sx={styles.header}>
      <Grid item>
        <Typography variant="h2" sx={styles.title}>
          {text.bookList}
        </Typography>
      </Grid>

      <Grid item>
        <Box sx={styles.infoBox}>
          <Typography variant="h6" sx={styles.infoText}>
            {text.suggestions}
          </Typography>

          <BaseModal title="Add new book" variantType="contained">
            <AddBookForm />
          </BaseModal>
        </Box>
      </Grid>
    </Grid>
  );
};
const styles = {
  title: {
    fontFamily: "Roboto",
    fontSize: "2rem",
    fontWeight: 700,
    color: "#2f3e46",
    letterSpacing: "0.05em",
    lineHeight: 1.2,
    textAlign: "left",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
    margin: 3,
  },
  header: { display: "flex", alignItems: "center" },
  infoBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    flexDirection: { xs: "column", sm: "row" },
    padding: 2,
    borderRadius: 2,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    gap: 2,
  },
  infoText: { flexGrow: 1, marginRight: 3 },
};

export default Header;
