"use client";
import { useGetLocations } from "@/hooks/useGetLocations";  // Update the import statement
import { Button, Input } from "antd";
import React, { useState } from "react";

export default function GetLocationButton() {
  const [name, setName] = useState("");  // State to track the input value
  const { locations, isLoading, isError } = useGetLocations(name);  // Use the hook

  const handleButtonClick = () => {

    setName("Hobart");
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
      {isError && <p>Error loading locations</p>}
      <pre>{JSON.stringify(locations, null, 2)}</pre>
    </>
  );
}
