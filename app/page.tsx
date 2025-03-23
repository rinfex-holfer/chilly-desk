import { DesksList } from "../components/features/DesksList"
import { Suspense } from "react"
import { DesksListLoading } from "../components/features/DesksList/loading"
import { ErrorBoundary } from "next/dist/client/components/error-boundary"
import DesksError from "../components/features/DesksList/error"

export default function Page() {
    return <div>
        <h1>Main page</h1>
        <ErrorBoundary errorComponent={DesksError}>
            <Suspense fallback={<DesksListLoading />}>
                <DesksList />
            </Suspense>
        </ErrorBoundary>
    </div>
}