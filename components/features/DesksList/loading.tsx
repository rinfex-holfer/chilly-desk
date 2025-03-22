export const DesksListLoading = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Desks List</h1>
            <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="border rounded-lg p-4 shadow-sm animate-pulse">
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                        <div className="flex gap-2">
                            <div className="h-5 bg-gray-200 rounded w-20"></div>
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-1/3 mt-2"></div>
                    </div>
                ))}
            </div>
        </div>
    );
} 