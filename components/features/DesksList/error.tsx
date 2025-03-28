'use client'

import { startTransition, useEffect, useMemo } from 'react'
import { NotFoundError } from '@/lib/api/errors'
import { NextJsError, extractApiError } from '@/lib/api/errors-client'
import { ApiError } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'

export default function Error({
    error,
    reset,
}: {
    error: NextJsError
    reset: () => void
}) {
    const errorParsed = useMemo<NextJsError | ApiError>(() => extractApiError(error) || error, [error])
    const router = useRouter();

    useEffect(() => {
        // TODO reporting
    }, [errorParsed])

    const onReset = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }

    console.log("errorParsed", errorParsed)
    if (errorParsed instanceof NotFoundError) {
        return (
            <div>
                <h2>Desks list is not found :-(</h2>
                <button onClick={onReset}>
                    Try again
                </button>
            </div>
        )
    }

    return (
        <div>
            <h2>Something went wrong! {error.message || 'Unknown error'}</h2>
            <button onClick={onReset}>
                Try again
            </button>
        </div>
    )
}