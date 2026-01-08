import { useContext } from "react";
import { BackImage } from "./BRB.style";
import { OverlayControlContext } from "../../contexts/OverlayControlProvider";

import brbbackground from "../../assets/screens/be_right_back.png";
import endbackground from "../../assets/screens/ending_soon.png";
import startbackground from "../../assets/screens/starting_soon.png";

const SCENE_BACKGROUNDS: Record<string, string> = {
    starting: startbackground,
    brb: brbbackground,
    ending: endbackground,
};

export const BRB = () => {
    const control = useContext(OverlayControlContext);

    const background = SCENE_BACKGROUNDS[control.scene];

    if (!background) return null;

    return <BackImage background={background} />;
};
