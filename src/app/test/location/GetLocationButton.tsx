"use client";
import { useLocations } from "@/hooks/useLocations";
import { Button, Input } from "antd";
import React, { useState } from "react";

export default function GetLocationButton() {
  const [name, setName] = useState("");
  const { data, isLoading, error } = useLocations(name);

  const handleButtonClick = () => {

    setName("");
  };

  return (
    <>
      <Input
        placeholder="Enter specific location name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Button onClick={handleButtonClick}>Get all Locations </Button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading locations</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
