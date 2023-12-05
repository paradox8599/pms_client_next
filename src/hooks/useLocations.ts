import useSWR from "swr";
import { getLocations } from "../lib/api/locations";

export function useLocations(name: string) {
  return useSWR(name, () => getLocations({ name }));
}
