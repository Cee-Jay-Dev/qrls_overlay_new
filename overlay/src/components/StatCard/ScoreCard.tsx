import { useContext, useMemo } from "react";
import { GameService } from "../../services/gameService";
import { BoostService } from "../../services/boostService";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import {
    StatCardContainer,
    StatCardWrapper,
    StatCardBoostNameBox,
    StatCardStatsBackground,
    StatCardStatsContainer,
    StatsBox,
    StatsTitle,
    StatsValue,
    NameTitle,
    BoostBarBack,
    BoostBarFill,
} from "./ScoreCard.style";

export const PlayerCard = () => {
    const { gameInfo } = useContext(GameInfoContext);

    const spectatedPlayer = useMemo(
        () =>
            GameService.getPlayerFromTarget(
                gameInfo.players,
                gameInfo.target
            ),
        [gameInfo.players, gameInfo.target]
    );

    const isVisible = !!spectatedPlayer && !gameInfo.isReplay;

    const isBlue = spectatedPlayer?.team === 0;

    const boostScale = useMemo(() => {
        const boost = spectatedPlayer?.boost ?? 0;
        return BoostService.getBoostBarWidth(boost, 230) / 230;
    }, [spectatedPlayer?.boost]);

    const gradients = useMemo(
        () => ({
            name: isBlue
                ? "linear-gradient(to left, #0D66AD, #137ECE)"
                : "linear-gradient(to left, #C75A0A, #F08C2E)",
            back: isBlue
                ? "linear-gradient(to right, #0D66AD, #137ECE)"
                : "linear-gradient(to right, #C75A0A, #F08C2E)",
        }),
        [isBlue]
    );

    if (!spectatedPlayer) return null;

    return (
        <StatCardContainer $isVisible={isVisible}>
            <StatCardWrapper>
                <StatCardBoostNameBox gradient={gradients.name}>
                    <NameTitle>{spectatedPlayer.name}</NameTitle>
                    <BoostBarBack>
                        <BoostBarFill $scale={boostScale} />
                    </BoostBarBack>
                </StatCardBoostNameBox>

                <StatCardStatsBackground gradient={gradients.back}>
                    <StatCardStatsContainer>
                        <StatsBox>
                            <StatsTitle>Score</StatsTitle>
                            <StatsValue>{spectatedPlayer.score}</StatsValue>
                        </StatsBox>

                        <StatsBox>
                            <StatsTitle>Goals</StatsTitle>
                            <StatsValue>{spectatedPlayer.goals}</StatsValue>
                        </StatsBox>

                        <StatsBox>
                            <StatsTitle>Shots</StatsTitle>
                            <StatsValue>{spectatedPlayer.shots}</StatsValue>
                        </StatsBox>

                        <StatsBox>
                            <StatsTitle>Assists</StatsTitle>
                            <StatsValue>{spectatedPlayer.assists}</StatsValue>
                        </StatsBox>

                        <StatsBox>
                            <StatsTitle>Saves</StatsTitle>
                            <StatsValue>{spectatedPlayer.saves}</StatsValue>
                        </StatsBox>

                        <StatsBox>
                            <StatsTitle>Demos</StatsTitle>
                            <StatsValue>{spectatedPlayer.demos}</StatsValue>
                        </StatsBox>
                    </StatCardStatsContainer>
                </StatCardStatsBackground>
            </StatCardWrapper>
        </StatCardContainer>
    );
};
