import axios from "axios";
import { BookI } from "../types/book";
import { CONSTANTS } from "../constants";

const api = axios.create({
  baseURL: CONSTANTS.api.baseUrl,
});

export const getBooks = () => api.get<BookI[]>(CONSTANTS.api.bookEndpoint);

export const addBook = (book: BookI) =>
  api.post(CONSTANTS.api.bookEndpoint, book);

export const updateBook = (id: number, updatedBook: BookI) =>
  api.put(`${CONSTANTS.api.bookEndpoint}/${id}`, updatedBook);

export const deleteBook = (id: number) =>
  api.delete(`${CONSTANTS.api.bookEndpoint}/${id}`);
