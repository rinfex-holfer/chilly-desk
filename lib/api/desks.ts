'use server';

import { Desk } from '../types/desks';
import { apiGet } from './fetch-utils';

export const getDesks = async (): Promise<Desk[]> => await apiGet<Desk[]>("desks")