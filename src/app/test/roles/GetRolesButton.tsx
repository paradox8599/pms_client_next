'use client'

import { useRoles } from '@/hooks/useRoles';
import { Button, Input } from 'antd'
import { useState } from 'react';


export function GetRolesButton() {

    const [id, setID] = useState<string>();
    const { data, isLoading, error } = useRoles(id);

    const handleInput = () => {
        setID("");

    }
    return (
        <>
            <Input onChange={(e) => setID(e.target.value)} placeholder='Enter Specific role' value={id} />
            <Button onClick={handleInput}>
                Get all Roles
            </Button>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error Loading...</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

        </>
    )
}

