import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../contexts/WebsocketContext";

export type StreamInfo = {
    title: string;
    bestOf: "bo1" | "bo3" | "bo5" | "bo7" | "bo+";
};

export type TeamInfo = {
    name: string;
    logo: string;
};

export type Caster = {
    active: boolean;
    name: string;
    social: string;
    video: string;
};

export type OverlayScene = "overlay" | "scoreboard" | "caster";

export type OverlayControlState = {
    scene: OverlayScene;
    stream: StreamInfo;
    teams: {
        left: TeamInfo;
        right: TeamInfo;
    };
    casters: {
        caster1: Caster | null;
        caster2: Caster | null;
        caster3: Caster | null;
    };
};

const defaultState: OverlayControlState = {
    scene: "overlay",
    stream: {
        title: "OVERLAY BY CEEJAY",
        bestOf: "bo5",
    },
    teams: {
        left: {
            name: "BLUE",
            logo: "https://cdn.discordapp.com/attachments/1373764601728204810/1450371068228276314/600px-RL_TeamImageMissing_darkmode.png",
        },
        right: {
            name: "ORANGE",
            logo: "https://cdn.discordapp.com/attachments/1373764601728204810/1450371068228276314/600px-RL_TeamImageMissing_darkmode.png",
        },
    },
    casters: {
        caster1: null,
        caster2: null,
        caster3: null,
    },
};

export const OverlayControlContext =
    createContext<OverlayControlState>(defaultState);

export const OverlayControlProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const websocket = useContext(WebsocketContext);
    const [state, setState] =
        useState<OverlayControlState>(defaultState);

    useEffect(() => {
        websocket.subscribe("overlay", "scene", (data: OverlayScene) => {
            setState((prev) => ({
                ...prev,
                scene: data,
            }));
        });

        websocket.subscribe("overlay", "stream_info", (data: StreamInfo) => {
            setState((prev) => ({
                ...prev,
                stream: data,
            }));
        });

        websocket.subscribe(
            "overlay",
            "teams",
            (data: { left: TeamInfo; right: TeamInfo }) => {
                setState((prev) => ({
                    ...prev,
                    teams: data,
                }));
            }
        );

        websocket.subscribe(
            "overlay",
            "casters",
            (data: OverlayControlState["casters"]) => {
                setState((prev) => ({
                    ...prev,
                    casters: data,
                }));
            }
        );
    }, [websocket]);

    return (
        <OverlayControlContext.Provider value={state}>
            {children}
        </OverlayControlContext.Provider>
    );
};
