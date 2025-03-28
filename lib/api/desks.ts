'use server';

import { Desk } from '../types/desks';
import { apiGet } from './fetch-utils';

export const getDesks = async (options?: RequestInit): Promise<Desk[]> => {
    return await apiGet<Desk[]>("desks", options);
}