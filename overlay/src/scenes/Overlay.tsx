import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { WebsocketContext } from "../contexts/WebsocketContext";
import { GameInfoContext } from "../contexts/GameInfoContext";
import { UpdateState } from "../models/UpdateState/UpdateState";
import { USPlayer } from "../models/UpdateState/USPlayer";
import { Scorebug } from "../components/Scorebug/Scorebug";
import { PlayerCard } from "../components/StatCard/ScoreCard";
import { BoostMeter } from "../components/BoostMeter/BoostMeter";
import { StatBoard } from "../components/StatBoard/StatBoard";
import { GoalScoredContext } from "../contexts/GoalScoredContext";

export type goalInfo = {
    assister: {
        id: string;
        name: string;
    };
    ball_last_touch: {
        player: string;
        speed: number;
    };
    goalspeed: number;
    goaltime: number;
    impact_location: {
        X: number;
        Y: number;
    };
    scorer: {
        id: string;
        name: string;
        teamnum: number;
    };
};

export type GoalControlState = {
    goal: goalInfo;
};

const defaultState: GoalControlState = {
    goal: {
        assister: { id: "test", name: "test" },
        ball_last_touch: { player: "test", speed: 1 },
        goalspeed: 2,
        goaltime: 3,
        impact_location: { X: 4, Y: 5 },
        scorer: { id: "test", name: "test", teamnum: 1 },
    },
};

export const GoalControlContext =
    createContext<GoalControlState>(defaultState);

export const Overlay = () => {
    const websocket = useContext(WebsocketContext);
    const { setGameInfo } = useContext(GameInfoContext);
    const { setGoalInfo } = useContext(GoalScoredContext);

    const [goalState, setGoalState] =
        useState<GoalControlState>(defaultState);

    useEffect(() => {
        websocket.subscribe("game", "update_state", (data: UpdateState) => {
            const updatedPlayers: USPlayer[] = Object.values(data.players);

            setGameInfo({
                arena: data.game.arena,
                isOT: data.game.isOT,
                isReplay: data.game.isReplay,
                target: data.game.target,
                timeRemaining: data.game.time_seconds,
                winner: data.game.winner,
                players: updatedPlayers,
                score: {
                    blue: data.game.teams[0].score,
                    orange: data.game.teams[1].score,
                },
            });
        });
    }, [websocket, setGameInfo]);

    useEffect(() => {
        websocket.subscribe("game", "goal_scored", (data: goalInfo) => {
            setGoalState({ goal: data });
        });
    }, [websocket]);

    const goalContextValue = useMemo(
        () => goalState,
        [goalState]
    );

    return (
        <GoalControlContext.Provider value={goalContextValue}>
            <Scorebug />
            <PlayerCard />
            <BoostMeter />
            <StatBoard />
        </GoalControlContext.Provider>
    );
};
