import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import { addBook } from "../../api";
import { useModal } from "../../context/BaseModal";
import { useBooks } from "../../hooks/useBooks";
import { BookI } from "../../types/book";
import { generateRandomId, getRandomImage } from "../../utils";

const text = {
  errorAddingBook: "Error adding book",
  successAddingBook: "You successfully added a book",
  addBook: "Add book",
  addANewBook: "Add a new book",
  authorLabel: "Author*",
  titleLabel: "Title*",
  genreLabel: "Genre*",
  descriptionLabel: "Description",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  genre: Yup.string().required("Genre is required"),
  description: Yup.string().optional(),
});

const AddBookForm: React.FC = () => {
  const { data: books, mutate } = useBooks();
  const { toggleModal: closeModal } = useModal();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const newBook: BookI = {
        ...values,
        id: generateRandomId(),
        imageUrl: getRandomImage(),
      };

      try {
        await mutate(
          async () => {
            await addBook(newBook);
            return [...books, newBook];
          },
          {
            optimisticData: [...books, newBook],
            rollbackOnError: true,
          }
        );
        alert(text.successAddingBook); //@todo: refactor this
        resetForm();
        closeModal();
      } catch (error) {
        alert(text.errorAddingBook);
        console.error(text.errorAddingBook, error);
      }
    },
  });

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {text.addANewBook}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label={text.titleLabel}
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
              label={text.authorLabel}
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
              label={text.genreLabel}
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
              label={text.descriptionLabel}
              multiline
              rows={2}
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
              {text.addBook}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddBookForm;
