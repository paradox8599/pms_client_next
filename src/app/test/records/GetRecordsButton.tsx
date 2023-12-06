'use client'
import { useRecords } from "@/hooks/useRecords";

export function GetRecordsButton() {
    const { data, isLoading, error } = useRecords();
    return (
        <>
            <h3>Records</h3>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error Loading...</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </>
    )
}

