'use client'

import { useEffect } from 'react'
import { NotFoundError } from '@/lib/api/errors'
import { notFound } from 'next/navigation'
import { routes } from '@/lib/routes'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // TODO reporting
    }, [error])

    const onReset = () => {
        reset();
    }

    console.dir(error)
    if (error instanceof NotFoundError) {
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