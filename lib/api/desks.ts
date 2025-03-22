'use server';

import { Desk } from '../domain/desks';

export async function getDesks(): Promise<Desk[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return [
        {
            id: '1',
            name: 'Math Practice Desk',
            description: 'Practice basic arithmetic operations',
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-01'),
            games: ['pickMe', 'pickMe2']
        },
        {
            id: '2',
            name: 'Language Learning Desk',
            description: 'Learn new vocabulary and grammar',
            createdAt: new Date('2024-01-15'),
            updatedAt: new Date('2024-01-20'),
            games: ['pickMe', 'pickMe3']
        },
        {
            id: '3',
            name: 'Science Quiz Desk',
            description: 'Test your knowledge in various science topics',
            createdAt: new Date('2024-02-01'),
            updatedAt: new Date('2024-02-01'),
            games: ['pickMe2', 'pickMe3']
        }
    ];
} 