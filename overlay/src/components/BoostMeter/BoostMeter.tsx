import { useContext, useMemo } from "react";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import { GameService } from "../../services/gameService";
import {
    BoostMeterWrapper,
    BoostSvg,
    BoostCircleFill,
    CircleBackground,
    BoostText,
    BoostTopText,
    CircleBackground2,
    CircleBackground3,
    BoostTextFlare,
    QRLS_Logo,
} from "./BoostMeter.style";

export const BoostMeter = () => {
    const { gameInfo } = useContext(GameInfoContext);

    const spectatedPlayer = GameService.getPlayerFromTarget(
        gameInfo.players,
        gameInfo.target
    );

    const boost = spectatedPlayer?.boost ?? 0;
    const isBlue = spectatedPlayer?.team === 0;

    const radius = 36;
    const fullCircumference = 3 * Math.PI * radius;
    const semicircleLength = fullCircumference / 2;

    const dashOffset = useMemo(
        () => semicircleLength * (1 - boost / 100),
        [boost, semicircleLength]
    );

    const gradientId = isBlue
        ? "boostGradientBlue"
        : "boostGradientOrange";

    if (!spectatedPlayer || gameInfo.isReplay) return null;

    return (
        <BoostMeterWrapper>
            <BoostSvg viewBox="0 0 100 100">
                <defs>
                    {isBlue ? (
                        <linearGradient id="boostGradientBlue">
                            <stop offset="0%" stopColor="#0D66AD" />
                            <stop offset="100%" stopColor="#137ECE" />
                        </linearGradient>
                    ) : (
                        <linearGradient id="boostGradientOrange">
                            <stop offset="0%" stopColor="#C75A0A" />
                            <stop offset="100%" stopColor="#F08C2E" />
                        </linearGradient>
                    )}
                </defs>

                <CircleBackground2 cx="50" cy="50" r={radius * 1.23} />
                <CircleBackground3
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeDasharray={`${semicircleLength} ${fullCircumference}`}
                />
                <CircleBackground
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeDasharray={`${semicircleLength} ${fullCircumference}`}
                />
                <BoostCircleFill
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeDasharray={`${semicircleLength} ${fullCircumference}`}
                    strokeDashoffset={dashOffset}
                    gradientId={gradientId}
                />
            </BoostSvg>

            <QRLS_Logo />
            <BoostTextFlare $isBlue={isBlue} />
            <BoostTopText>BOOST</BoostTopText>
            <BoostText>{boost}</BoostText>
        </BoostMeterWrapper>
    );
};
