import { GameType } from "./games";

export type Desk = {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    games: GameType[];
}
