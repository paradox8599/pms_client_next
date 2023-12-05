"use client";

import { updateLocation } from "@/lib/api/locations";

import { Button } from "antd";
import React from "react";

export default function UpdateLocationButton() {
    const [data, setData] = React.useState({});

    return (
        <>
            <Button
                onClick={() => {
                    const loc = {
                        name: 'Launceston',
                        email: 'abc@123.com',
                        streetNumber: '10',
                        street: 'Princes Street',
                        suburb: 'Sandy Bay',
                        postcode: '7005',
                        phone: '414961363',
                    }
                    updateLocation({ location: loc }, "2").then(setData);
                }}
            >
                Update location
            </Button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}
