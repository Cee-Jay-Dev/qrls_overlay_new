export interface USGoalScored {
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
}
