import { getDefaultHeaders } from "../helpers";
import { API_URL } from "../variables/urls";

const TRT_URL = new URL("treatments/", API_URL);

export async function getTreatments(populate?: string, title?: string) {
  const url = new URL(TRT_URL.href);
  populate && url.searchParams.append("populate", populate);
  title && url.searchParams.append("filters[title]", title);

  const res = await fetch(url, {
    mode: "cors",
    credentials: "include",
    headers: getDefaultHeaders(),
  });

  return await res.json();
}
