"use client";

import { createLocation, getLocations } from "@/lib/api/locations";
import { getMe } from "@/lib/api/users";
import { Button } from "antd";
import React from "react";

export default function CreateLocationButton() {
    const [data, setData] = React.useState({});

    return (
        <>
            <Button
                onClick={() => {
                    createLocation({
                        name: 'Hobart', 
                        email: 'abc@123.com', 
                        streetNumber: '1',
                        street: 'Princes Street',
                        suburb: 'Sandy Bay',
                        postcode: '7005',
                        phone: '414961363',
                    }).then(setData);
                }}
            >
                Create location
            </Button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}
