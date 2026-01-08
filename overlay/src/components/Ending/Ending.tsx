import { useContext } from "react";
import {
    BackImage,
} from "./Ending.style";
import { OverlayControlContext } from "../../contexts/OverlayControlProvider";

export const Ending = () => {
    const control = useContext(OverlayControlContext);
        
    return (
        <BackImage>

        </BackImage>
    );
};
