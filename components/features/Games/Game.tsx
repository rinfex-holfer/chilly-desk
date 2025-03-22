import { FC } from "react";
import { GameTypeKey } from "../../../lib/domain/games";
import { PickMe } from "./PickMe";

export const Game: FC<{
    gameType: GameTypeKey,
}> = ({ gameType }) => {
    switch (gameType) {
        case "pickMe":
            return <PickMe />;
        default:
            return null;
    }
};
