import useSWR from "swr";
import axios from "axios";
import { BaseSWRResultI } from "../types/api";

export function useGenericSWR<T>(
  endpoint: string,
  falllback: T
): BaseSWRResultI<T> {
  const {
    data = falllback,
    error,
    mutate,
  } = useSWR<T>(endpoint, async (url: string) => {
    const response = await axios.get<T>(url);
    return response.data;
  });

  return {
    data: data,
    isLoading: !error && !data,
    isError: !!error,
    mutate: mutate,
  };
}
