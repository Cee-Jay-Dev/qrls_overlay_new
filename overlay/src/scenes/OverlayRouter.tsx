import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { OverlayControlContext } from "../contexts/OverlayControlProvider";
import { Overlay } from "./Overlay";
import { StatsBoard } from "./StatsBoard";
import { WebsocketContext } from "../contexts/WebsocketContext";
import { Transition } from "../components/Transition/Transition";
import { CasterScreenExp } from "../components/CasterScreen/CastScreen";
import { BRB } from "../components/BRB/BRB";
import { GameInfoContext } from "../contexts/GameInfoContext";

type OverlayScene =
    | "overlay"
    | "scoreboard"
    | "caster"
    | "starting"
    | "brb"
    | "ending";

const VALID_SCENES: readonly OverlayScene[] = [
    "overlay",
    "scoreboard",
    "caster",
    "starting",
    "brb",
    "ending",
];

export const OverlayRouter = () => {
    const control = useContext(OverlayControlContext);
    const websocket = useContext(WebsocketContext);
    const { gameInfo } = useContext(GameInfoContext);

    const [activeScene, setActiveScene] = useState<OverlayScene>("overlay");
    const [requestedScene, setRequestedScene] =
        useState<OverlayScene>("overlay");

    const [transitionKey, setTransitionKey] = useState(0);

    const lastScoreRef = useRef({
        blue: gameInfo.score.blue,
        orange: gameInfo.score.orange,
    });

    const goalTransitionTimeout = useRef<number | null>(null);
    const autoCasterTimeout = useRef<number | null>(null);

    const blueScore = gameInfo.score.blue;
    const orangeScore = gameInfo.score.orange;

    useEffect(() => {
        if (VALID_SCENES.includes(control.scene as OverlayScene)) {
            setRequestedScene(control.scene as OverlayScene);
        }
    }, [control.scene]);

    useEffect(() => {
        websocket.subscribe("game", "post_countdown_begin", () => {
            setRequestedScene("overlay");
        });

        websocket.subscribe("game", "match_ended", () => {
            setRequestedScene("scoreboard");
        });
    }, [websocket]);

    useEffect(() => {
        if (autoCasterTimeout.current !== null) {
            clearTimeout(autoCasterTimeout.current);
            autoCasterTimeout.current = null;
        }

        if (activeScene === "scoreboard") {
            autoCasterTimeout.current = window.setTimeout(() => {
                setRequestedScene("caster");
                autoCasterTimeout.current = null;
            }, 25000);
        }

        return () => {
            if (autoCasterTimeout.current !== null) {
                clearTimeout(autoCasterTimeout.current);
                autoCasterTimeout.current = null;
            }
        };
    }, [activeScene]);

    useEffect(() => {
        const last = lastScoreRef.current;
        const scoreIncreased =
            blueScore > last.blue || orangeScore > last.orange;

        if (
            scoreIncreased &&
            activeScene === "overlay" &&
            requestedScene === "overlay"
        ) {
            if (goalTransitionTimeout.current !== null) {
                clearTimeout(goalTransitionTimeout.current);
            }

            goalTransitionTimeout.current = window.setTimeout(() => {
                setTransitionKey((k) => k + 1);
                goalTransitionTimeout.current = null;
            }, 3000);
        }

        lastScoreRef.current = {
            blue: blueScore,
            orange: orangeScore,
        };

        return () => {
            if (goalTransitionTimeout.current !== null) {
                clearTimeout(goalTransitionTimeout.current);
                goalTransitionTimeout.current = null;
            }
        };
    }, [blueScore, orangeScore, activeScene, requestedScene]);

    const scene = useMemo(() => {
        switch (activeScene) {
            case "scoreboard":
                return <StatsBoard />;
            case "caster":
                return <CasterScreenExp />;
            case "starting":
            case "brb":
            case "ending":
                return <BRB />;
            default:
                return <Overlay />;
        }
    }, [activeScene]);

    return (
        <Transition
            trigger={`${requestedScene}-${transitionKey}`}
            onMidpoint={() => setActiveScene(requestedScene)}
        >
            {scene}
        </Transition>
    );
};
