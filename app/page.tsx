import { DesksList } from "../components/features/DesksList"
import { Suspense } from "react"
import { DesksListLoading } from "../components/features/DesksList/loading"

export default function Page() {
    return <div>
        Main page
        <Suspense fallback={<DesksListLoading />}>
            <DesksList />
        </Suspense>
    </div>
}