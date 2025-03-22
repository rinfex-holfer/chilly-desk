import Link from 'next/link';
import { getDesks } from '../../../lib/api/desks';
import { routes } from '../../../lib/routes';

export const DesksList = async () => {
    try {
        const desks = await getDesks();

        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Desks</h1>
                <div className="grid gap-4">
                    {desks.map((desk) => (
                        <Link key={desk.id} href={routes.desks.desk(desk.id)} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-semibold">{desk.name}</h2>
                            <p className="text-gray-600 mt-1">{desk.description}</p>
                            <div className="mt-2 text-sm text-gray-500">
                                Created: {desk.createdAt.toLocaleDateString()}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Desks</h1>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h2 className="text-red-800 font-semibold">Error loading desks</h2>
                    <p className="text-red-600 mt-1">There was a problem loading the desks. Please try again later.</p>
                </div>
            </div>
        );
    }
}
