import { useState } from "react";
import {
    SeriesScoreContext,
    SeriesScoreContextModel,
} from "../contexts/seriesScoreContext";

export const SeriesScoreProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [blueWins, setBlueWins] = useState(0);
    const [orangeWins, setOrangeWins] = useState(0);

    const maxWins = 3;

    const AddBlueGameWin = () => {
        console.log("Blue win added");
        setBlueWins((prev) => prev + 1);
    };

    const AddOrangeGameWin = () => {
        console.log("Orange win added");
        setOrangeWins((prev) => prev + 1);
    };

    const ResetSeriesScore = () => {
        setBlueWins(0);
        setOrangeWins(0);
    };

    const value: SeriesScoreContextModel = {
        blueWins,
        orangeWins,
        maxWins,
        AddBlueGameWin,
        AddOrangeGameWin,
        ResetSeriesScore,
    };

    return (
        <SeriesScoreContext.Provider value={value}>
            {children}
        </SeriesScoreContext.Provider>
    );
};
