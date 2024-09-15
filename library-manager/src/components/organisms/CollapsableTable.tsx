import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import { BookI } from "../../types/book";
import { DUMMY_DATA } from "../../constants";
import { ArrowUpIcon, ArrowDownIcon } from "../../assets";

const text = {
  author: "Author",
  title: "Title",
  genre: "Genre",
  description: "Description",
  notSpecified: "Not Specified",
  notAvailable: "Description not available",
};

interface CollapsibleRowProp {
  book: BookI;
}

const CollapsibleTable: React.FC = () => {
  return (
    <TableContainer component={Paper} sx={styles.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={styles.tableStyle}>{text.author}</TableCell>
            <TableCell sx={styles.tableStyle}>{text.title}</TableCell>
            <TableCell sx={styles.tableStyle}>{text.genre}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DUMMY_DATA.map((book, index) => (
            <CollapsibleRow book={book} key={book.id + index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const CollapsibleRow = ({ book }: CollapsibleRowProp) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={styles.tableStyle}>{book.author}</TableCell>
        <TableCell sx={styles.tableStyle}>{book.title}</TableCell>
        <TableCell sx={styles.tableStyle}>
          {book.genre || text.notSpecified}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="body1">
                <strong>{text.description}:</strong>
                {book.description || text.notAvailable}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const styles = {
  container: { marginTop: 10, width: "100%", overflowX: "auto", padding: 2 },
  tableStyle: {
    padding: {
      xs: "1px",
      sm: "16px",
    },
  },
};

export default CollapsibleTable;
