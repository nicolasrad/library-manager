import { KeyedMutator } from "swr";

export interface BaseSWRResultI<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
  mutate: KeyedMutator<T>;
}
