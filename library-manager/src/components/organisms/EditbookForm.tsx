import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import { updateBook } from "../../api";
import { useBooks } from "../../hooks/useBooks";
import { BookI } from "../../types/book";

interface EditBookFormPropsI {
  book: BookI;
  onClose: () => void;
}

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  genre: Yup.string().optional(),
  description: Yup.string().optional(),
});

const mutateCacheMechanism = (
  books: BookI[] | undefined,
  currentBook: BookI,
  updatedBook: BookI
) => {
  if (!books) return [];
  return books.map((book) => (book.id === currentBook.id ? updatedBook : book));
};

const EditBookForm = ({ book, onClose }: EditBookFormPropsI) => {
  const { mutate } = useBooks();

  const formik = useFormik({
    initialValues: {
      title: book.title,
      author: book.author,
      genre: book.genre,
      description: book.description,
    },
    validationSchema,
    onSubmit: async (values) => {
      const updatedBook = {
        ...book,
        ...values,
      };
      console.log(book, "mybook");
      try {
        await updateBook(book.id, updatedBook);

        await mutate(
          (books) => mutateCacheMechanism(books, book, updatedBook),
          {
            optimisticData: (currentBooks) =>
              mutateCacheMechanism(currentBooks, book, updatedBook),
            rollbackOnError: true,
          }
        );

        onClose();
      } catch (error) {
        console.error("Error updating book:", error);
      }
    },
  });

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Edit Book
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Book Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="author"
              name="author"
              label="Author"
              value={formik.values.author}
              onChange={formik.handleChange}
              error={formik.touched.author && Boolean(formik.errors.author)}
              helperText={formik.touched.author && formik.errors.author}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="genre"
              name="genre"
              label="Genre"
              value={formik.values.genre}
              onChange={formik.handleChange}
              error={formik.touched.genre && Boolean(formik.errors.genre)}
              helperText={formik.touched.genre && formik.errors.genre}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Update Book
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EditBookForm;
