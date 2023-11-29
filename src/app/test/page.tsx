import CreateLocationButton from "./CreateLocationButton";
import GetLocationButton from "./GetLocationButton";
import GetMeButton from "./GetMeButton";
import LoginButton from "./LoginButton";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <LoginButton />
      <GetMeButton />
      <GetLocationButton />
      <CreateLocationButton />
    </div>
  );
}
