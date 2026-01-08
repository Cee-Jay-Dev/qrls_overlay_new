import { createContext } from "react";

export interface SeriesScoreContextModel {
    blueWins: number;
    orangeWins: number;
    maxWins: number;
    AddBlueGameWin: () => void;
    AddOrangeGameWin: () => void;
    ResetSeriesScore: () => void;
}

export const SeriesScoreContext =
    createContext<SeriesScoreContextModel | null>(null);