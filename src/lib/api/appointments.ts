import { getDefaultHeaders } from "../helpers";
import { API_URL } from "../variables/urls";

export const LOC_URL = new URL("appointments/", API_URL);

export async function getAppointments({ id }: { id?: string }) {
  let url = new URL(LOC_URL.href);

  if (id) {
    url = new URL(`${id}`, LOC_URL.href);
  }

  const res = await fetch(url, {
    mode: "cors",
    credentials: "include",
    headers: getDefaultHeaders(),
  });

  return await res.json();
}
