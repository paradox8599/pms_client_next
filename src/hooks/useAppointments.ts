import { getAppointments } from "@/lib/api/appointments";
import useSWR from "swr";

export default function useAppointments(id?: string) {
  return useSWR(id, () => getAppointments({ id }));
}
