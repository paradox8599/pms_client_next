'use client'
import { usePermissions } from '@/hooks/usePermissions';

export function GetPermissionsButton() {
    const { data, isLoading, error } = usePermissions();
    return (
        <>
            <h3>Permissions</h3>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error Loading...</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </>
    )
}

