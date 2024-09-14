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
import { getRandomImage } from "../../utils";
import { BookI } from "../../types/book";

const text = {
  genre: "Genre",
};

interface ImageCardProps {
  book: BookI;
}

export default function ImageCard({ book }: ImageCardProps) {
  const {
    id,
    title,
    author,
    genre = "Uncategorised",
    description = "Not available",
  } = book;

  return (
    <Box display="flex" justifyContent="center">
      <Card sx={{ maxHeight: 400, maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="250"
          width="50"
          image={getRandomImage()}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${title} by ${author}`}
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
