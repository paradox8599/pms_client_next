import { getDefaultHeaders } from "../helpers";
import { API_URL } from "../variables/urls";

const LOC_URL = new URL("locations/", API_URL);

export async function getLocations({ name }: {name: string }) {
  const url = new URL(LOC_URL.href);
  url.searchParams.append("filters[name][$contains]", name);

  const res = await fetch(url, {
    mode: "cors",
    credentials: "include",
    headers: getDefaultHeaders(),
  });

  return await res.json();
}

