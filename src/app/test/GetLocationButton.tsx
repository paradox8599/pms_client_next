"use client";

import { getLocations } from "@/lib/api/locations";
import { getMe } from "@/lib/api/users";
import { Button } from "antd";
import React from "react";

export default function GetLocationButton() {
  const [data, setData] = React.useState({});
  return (
    <>
      <Button
        onClick={() => {
          getLocations({name:'Hobart'}).then(setData);
        }}
      >
        Get Location Button
      </Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
