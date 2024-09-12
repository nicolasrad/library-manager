import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import { addBook } from "../../api";
import { useBooks } from "../../hooks/useBooks";
import { BookI } from "../../types/book";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  genre: Yup.string().required("Genre is required"),
  description: Yup.string().required("Description is required"),
});

const AddBookForm: React.FC = () => {
  const { data: books, mutate } = useBooks();

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
        id: Date.now().toString(),
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
        resetForm();
        alert("Book added successfully!");
      } catch (error) {
        console.error("Error adding book:", error);
        alert("Error adding book");
      }
    },
  });

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Add a New Book
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
              Add Book
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddBookForm;
