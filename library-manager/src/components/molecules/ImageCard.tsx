import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteBookModal from "./DeleteBookModal";
import BaseModal from "../../context/BaseModal";
import EditBookForm from "../organisms/EditbookForm";
import { BookI } from "../../types/book";

const text = {
  edit: "Edit",
  genre: "Genre",
  description: "Description",
};

interface ImageCardProps {
  book: BookI;
}

export default function ImageCard({ book }: ImageCardProps) {
  const { id, title, author, genre, imageUrl } = book;

  return (
    <Box display="flex" justifyContent="center">
      <Card sx={{ height: 400, width: 200 }}>
        <CardMedia component="img" height="250" width="50" image={imageUrl} />
        <CardContent>
          <Typography
            variant="body1"
            textAlign={"center"}
            style={styles.elipsis}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            textAlign={"center"}
            style={styles.elipsis}
          >
            {`by ${author}`}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={styles.elipsis}
          >
            {`${text.genre} - ${genre}`}
          </Typography>
        </CardContent>
        <CardActions>
          <BaseModal title={text.edit} variantType="text">
            <EditBookForm book={book} />
          </BaseModal>
          <DeleteBookModal bookId={id} />
        </CardActions>
      </Card>
    </Box>
  );
}

const styles = {
  elipsis: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
