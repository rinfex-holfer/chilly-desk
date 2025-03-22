
const DeskPage: React.FC<{ params: Promise<{ deskId: string }> }> = async ({ params }) => {
    const { deskId } = await params;

    return <div>
        <h1>Desk {deskId}</h1>
    </div>
}

export default DeskPage