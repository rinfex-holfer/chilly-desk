export const GameTypeMap = {
    pickMe: "pickMe",
    pickMe2: "pickMe2",
    pickMe3: "pickMe3",
} as const;

export type GameType = (typeof GameTypeMap)[keyof typeof GameTypeMap];