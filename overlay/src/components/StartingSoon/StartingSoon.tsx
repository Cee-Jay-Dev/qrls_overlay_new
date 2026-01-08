import { useContext } from "react";
import {
    BackImage,
} from "./StartingSoon.style";
import { OverlayControlContext } from "../../contexts/OverlayControlProvider";

export const StartingSoon = () => {
    const control = useContext(OverlayControlContext);
        
    return (
        <BackImage>

        </BackImage>
    );
};
