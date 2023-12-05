'use client'
import { getTreatments } from '@/lib/api/treatments'
import { Button } from 'antd'
import { useState } from 'react';


export function GetTreatmentButton() {
    const [data, setData] = useState();
    const pop = "*";
    const title = "Massage";
    return (
        <>
            <Button onClick={() => getTreatments(pop, title).then(setData)}>Get treatements</Button>

            {<pre>{JSON.stringify(data, null, 2)}</pre>}

        </>
    )
}