import useSWR from "swr";
import { getLocations } from "../lib/api/locations";

export function useGetLocations(name: string) {
  return useSWR({ name }, getLocations);
}
