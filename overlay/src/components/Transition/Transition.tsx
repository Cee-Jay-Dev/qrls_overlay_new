import { useEffect, useRef, useState } from "react";
import transitionVideo from "../../assets/blue_trans.webm";
import {
    TransitionContainer,
    TransitionVideo,
} from "./Transition.style";

type TransitionProps = {
    trigger: any;
    onMidpoint: () => void;
    children: React.ReactNode;
};

export const Transition = ({
    trigger,
    onMidpoint,
    children,
}: TransitionProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const timeoutRef = useRef<number | null>(null);
    const lastTriggerRef = useRef<any>(null);

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (lastTriggerRef.current === trigger) return;
        lastTriggerRef.current = trigger;

        const video = videoRef.current;
        if (!video) return;

        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }

        setIsActive(true);

        video.pause();
        video.currentTime = 0;
        video.play().catch(() => { });

        timeoutRef.current = window.setTimeout(() => {
            onMidpoint();
        }, 900);

        const hideTimeout = window.setTimeout(() => {
            setIsActive(false);
        }, 1400);

        return () => {
            clearTimeout(hideTimeout);
        };
    }, [trigger, onMidpoint]);

    return (
        <>
            {children}
            <TransitionContainer $active={isActive}>
                <TransitionVideo
                    ref={videoRef}
                    src={transitionVideo}
                    muted
                    playsInline
                    preload="auto"
                />
            </TransitionContainer>
        </>
    );
};
