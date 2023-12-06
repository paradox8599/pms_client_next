import CreateAppointmentButton from "./appointment/CreateAppointmentButton";
import CreateLocationButton from "./location/CreateLocationButton";
import DeletelocationButton from "./location/DeleteLocationButton";
import FindAvailableAppointmentsButton from "./FAAButton";
import GetAppointmentsButton from "./appointment/GetAppointmentsButton";
import GetLocationButton from "./location/GetLocationButton";
import GetMeButton from "./GetMeButton";

import LoginButton from "./LoginButton";
import UpdateLocationButton from "./location/UpdateLocationButton";
import GetAvailabilitiesButton from "./availabilities/GetAvailabilitiesButton";
import { GetTreatmentButton } from "./treatments/GetTreatmentButton";
import { CreateTreatmentButton } from "./treatments/CreateTreatmentButton";
import { GetRolesButton } from "./roles/GetRolesButton";
import { GetPermissionsButton } from "./permissions/GetPermissionsButton";
import { GetRecordsButton } from "./records/GetRecordsButton";


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <LoginButton />
      <GetMeButton />
      <GetLocationButton />
      <CreateLocationButton />
      <UpdateLocationButton />
      <DeletelocationButton />
      <GetAppointmentsButton />
      <CreateAppointmentButton />
      <FindAvailableAppointmentsButton />
      <GetAvailabilitiesButton />
      <GetTreatmentButton />
      <CreateTreatmentButton />
      <GetRolesButton />
      <GetRecordsButton />
      <GetPermissionsButton />
    </div>
  );
}
