'use client'
import useTreatments from '@/hooks/useTreatements';
import { Button } from 'antd'
import { useState } from 'react';


export function GetTreatmentButton() {

    const [populate, setPopulate] = useState<string>();
    const [title, setTitle] = useState<string>();
    const { data, isLoading, error } = useTreatments(populate, title);
    return (
        <>
            <Button onClick={() => {
                setPopulate("*");
                setTitle("Massage");
            }}>Get treatements</Button>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error Loading...</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

        </>
    )
}

