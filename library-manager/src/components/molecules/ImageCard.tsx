import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import EditBookModal from "./EditBookModal";
import DeleteBookModal from "./DeleteBookModal";
import { BookI } from "../../types/book";

const text = {
  genre: "Genre",
  description: "Description",
};

interface ImageCardProps {
  book: BookI;
}

export default function ImageCard({ book }: ImageCardProps) {
  const { id, title, author, genre = "Uncategorised", imageUrl } = book;

  return (
    <Box display="flex" justifyContent="center">
      <Card sx={{ maxHeight: 400, maxWidth: 200 }}>
        <CardMedia component="img" height="250" width="50" image={imageUrl} />
        <CardContent>
          <Typography variant="body1" textAlign={"center"}>
            {title}
          </Typography>
          <Typography gutterBottom variant="body1" textAlign={"center"}>
            {`by ${author}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${text.genre} - ${genre}`}
          </Typography>
        </CardContent>
        <CardActions>
          <EditBookModal book={book} />
          <DeleteBookModal bookId={id} />
        </CardActions>
      </Card>
    </Box>
  );
}
