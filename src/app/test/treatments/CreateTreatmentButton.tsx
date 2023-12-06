'use client'
import { createTreatments } from "@/lib/api/treatments"
import { Button } from "antd";
import React from "react";

export function CreateTreatmentButton() {
    const [data, setData] = React.useState();
    return (
        <>
            <Button onClick={() => createTreatments("new treatment", "New Description", [1, 3], [3], [3, 4]).then(setData)}> Create Treatment</Button >
            {data && <pre> {JSON.stringify(data, null, 2)}</pre>}
        </>
    )
}