import { useFetch } from "usehooks-ts";
import { IApiBase } from "../types/requestType";

const baseUrl = "https://api-v2.xdclass.net/api";

export function useApi<T = any>(url: string, options?: RequestInit) {
  return useFetch<IApiBase<T>>(`${baseUrl}${url}`, options);
}
