"use client";

import { deleteLocation, getLocations } from "@/lib/api/locations";
import { getMe } from "@/lib/api/users";
import { Button } from "antd";
import React from "react";

export default function DeletelocationButton() {
    const [data, setData] = React.useState({});
    return (
        <>
            <Button
                onClick={() => {
                    deleteLocation("1").then(setData);
                }}
            >
                Delete Button
            </Button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}
