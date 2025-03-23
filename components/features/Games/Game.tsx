import { FC } from "react";
import { GameType } from "../../../lib/types/games";
import { PickMe } from "./PickMe";

export const Game: FC<{
    gameType: GameType,
}> = ({ gameType }) => {
    switch (gameType) {
        case "pickMe":
            return <PickMe />;
        default:
            return null;
    }
};
