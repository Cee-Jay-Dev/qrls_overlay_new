import { GoalContext } from "../models/contexts/GoalContext";
import { createContext } from "react"

export interface GoalScoredContextModel {
    goalInfo: GoalContext;
    setGoalInfo: (newGoalInfo: GoalContext) => void;
}

export const DEFAULT_GOAL_INFO: GoalContext = {
    ball_last_touch: {
        player: "",
        speed: 0,
    },
    goalspeed: 0,
    goaltime: 0,
    impact_location: {
        X: 0,
        Y: 0,
    },
    scorer: {
        id: "",
        name: "",
        teamnum: 0,
    },
};

export const GoalScoredContext = createContext<GoalScoredContextModel>({
    goalInfo: DEFAULT_GOAL_INFO,
    setGoalInfo: (newGoalInfo: GoalContext) => { },
});