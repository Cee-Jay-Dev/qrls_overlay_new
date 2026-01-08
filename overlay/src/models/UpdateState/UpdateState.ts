import { USGame } from "./USGame";
import { USGoalScored } from "./USGoalScored";

export interface UpdateState {
    event: string;
    game: USGame;
    hasGame: boolean;
    match_guid?: string;
    players: Object;
}