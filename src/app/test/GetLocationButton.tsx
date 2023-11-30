"use client";
import { useGetLocations } from "@/hooks/useGetLocations";  // Update the import statement
import { Button, Input } from "antd";
import React, { useState } from "react";

export default function GetLocationButton() {
  const [name, setName] = useState("");  // State to track the input value
  const { data, isLoading, error } = useGetLocations(name);  // Use the hook

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
