"use client";
import { useGetLocations } from "@/hooks/useGetLocations";
import { Button, Input } from "antd";
import React, { useState } from "react";

export default function GetLocationButton() {
  const [name, setName] = useState("");
  const { data, isLoading, error } = useGetLocations(name);

  const handleButtonClick = () => {

    setName(name);
  };

  return (
    <>
      <Input
        placeholder="Enter location name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleButtonClick}>Get Locations </Button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading locations</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
