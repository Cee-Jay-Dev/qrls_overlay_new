import { useContext, useEffect, useRef } from "react";
import { WebsocketContext } from "./WebsocketContext";
import { SeriesScoreContext } from "./seriesScoreContext";
import { OverlayControlContext } from "./OverlayControlProvider";

export const SeriesController = () => {
    const control = useContext(OverlayControlContext);
    const websocket = useContext(WebsocketContext);
    const series = useContext(SeriesScoreContext);

    const lastMatchGuidRef = useRef<string | null>(null);
    const subscribedRef = useRef(false); 

    useEffect(() => {
        if (!series || subscribedRef.current) return;

        subscribedRef.current = true; 

        websocket.subscribe(
            "game",
            "match_ended",
            (data: { match_guid: string; winner_team_num: number }) => {
                if (lastMatchGuidRef.current === data.match_guid) return;

                lastMatchGuidRef.current = data.match_guid;

                if (data.winner_team_num === 0) {
                    series.AddBlueGameWin();
                } else if (data.winner_team_num === 1) {
                    series.AddOrangeGameWin();
                }
            }
        );

        websocket.subscribe("overlay", "new_series", () => {
            lastMatchGuidRef.current = null;
            series.ResetSeriesScore();
        });
    }, [websocket, series]);

    return null;
};
