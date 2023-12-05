'use client'
import useAvailabilities from "@/hooks/useAvailabilities";
import { Button } from 'antd'
import { useState } from "react";

export default function GetAvailabilitiesButton() {
    const { data, isLoading, error } = useAvailabilities();
    const [showData, setShowData] = useState(false);
    return (
        <>
            <Button onClick={() => setShowData(true)}>Get Availabilities</Button>

            {isLoading && <p>Loading..</p>}
            {error && <p>error loading</p>}
            {showData && data && <pre>{JSON.stringify(data, null, 2)}</pre>}

        </>
    )
}