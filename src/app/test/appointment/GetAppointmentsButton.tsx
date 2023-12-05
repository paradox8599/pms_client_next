"use client";

import useAppointments from "@/hooks/useAppointments";
import { Input } from "antd";
import React, { useState } from "react";

export default function GetAppointmentsButton() {
    const [id, setID] = useState<string>();

    const { data, isLoading, error } = useAppointments(id)



    return (
        <>
            <Input
                placeholder="Enter appointment ID to get a specific appointment"
                value={id}
                onChange={(e) => setID(e.target.value)}
            />

            {isLoading && <p>Loading...</p>}
            {error && <p>Error Loading...</p>}
            <pre>{JSON.stringify(data, null, 2)}</pre>

        </>
    );
}
