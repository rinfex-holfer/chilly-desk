import Link from 'next/link';
import { getDesks } from '@/lib/api/desks';
import { routes } from '@/lib/routes';

export const DesksList = async () => {
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
                            Created: {new Date(desk.createdAt).toLocaleDateString()}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
