import { BookI } from "../types/book";
import { BaseSWRResultI } from "../types/api";
import { CONSTANTS } from "../constants";
import { useGenericSWR } from "./generics";

interface UseBooksResultI extends BaseSWRResultI<BookI[]> {
  data: BookI[];
}

const { baseUrl, bookEndpoint } = CONSTANTS.api;

export const useBooks = (): UseBooksResultI => {
  return useGenericSWR<BookI[]>(`${baseUrl}${bookEndpoint}`, []);
};
