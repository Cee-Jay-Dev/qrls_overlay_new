import { createContext, useEffect, useState } from "react";

export type Caster = {
    active: boolean;
    name: string;
    social: string;
    video: string;
};

export interface OverlayControlState {
    stream: {
        title: string;
        bestOf: "bo1" | "bo3" | "bo5" | "bo7" | "bo+";
    };
    teams: {
        left: {
            name: string;
            logo: string;
        };
        right: {
            name: string;
            logo: string;
        };
    };
    casters: {
        caster1: Caster | null;
        caster2: Caster | null;
        caster3: Caster | null;
    };
}

const defaultState: OverlayControlState = {
    stream: {
        title: "",
        bestOf: "bo5",
    },
    teams: {
        left: { name: "", logo: "" },
        right: { name: "", logo: "" },
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
    children: React.ReactNode;
}) => {
    const [state, setState] = useState<OverlayControlState>(defaultState);

    useEffect(() => {
        const channel = new BroadcastChannel("overlay-control");

        channel.onmessage = (event) => {
            setState((prev) => ({
                ...prev,
                ...event.data,
            }));
        };

        return () => channel.close();
    }, []);

    return (
        <OverlayControlContext.Provider value={state}>
            {children}
        </OverlayControlContext.Provider>
    );
};
