import React, { useContext, useMemo } from "react";
import { OverlayControlContext } from "../../contexts/OverlayControlProvider";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import { GoalScoredContext } from "../../contexts/GoalScoredContext";
import { SeriesScoreContext } from "../../contexts/seriesScoreContext";
import { GoalControlContext } from "../../scenes/Overlay";
import { GameService } from "../../services/gameService";

import {
    TopTitleBar,
    LeftSide,
    LeftSide_LogoBox,
    LeftSide_NameBox,
    ScorebugContainer,
    ClockContainer,
    ScorebugWrapper,
    RightSide_LogoBox,
    RightSide,
    RightSide_NameBox,
    LeftScoreBox,
    RightScoreBox,
    BottomCenterBox,
    BottomLeftBox,
    BottomRightBox,
    BottomBoxContainer,
    TextContainer,
    DividerDotText,
    GameText,
    GameScoreIndicator,
    BestText,
    ReplayContainer,
    BackImage,
    CenterBox,
    CenterBoxCont,
    StatLineOne,
    StatLineOneCont,
    CenterBoxPlayerName,
    CenterBoxSmallPlayerName,
} from "./Scorebug.style";

export const Scorebug = React.memo(() => {
    const { gameInfo } = useContext(GameInfoContext);
    const { goalInfo } = useContext(GoalScoredContext);
    const control = useContext(OverlayControlContext);
    const goalControl = useContext(GoalControlContext);
    const series = useContext(SeriesScoreContext);

    const blueWins = series?.blueWins ?? 0;
    const orangeWins = series?.orangeWins ?? 0;
    const maxWins = series?.maxWins ?? 1;

    const currentGame = useMemo(
        () => Math.min(blueWins + orangeWins + 1, maxWins * 2 - 1),
        [blueWins, orangeWins, maxWins]
    );

    const clock = useMemo(
        () => GameService.getClockFromSeconds(gameInfo.timeRemaining, gameInfo.isOT),
        [gameInfo.timeRemaining, gameInfo.isOT]
    );

    if (!series) return null;

    return (
        <>
            <ScorebugContainer>
                <TopTitleBar>{control.stream.title}</TopTitleBar>

                <ScorebugWrapper>
                    <LeftSide_LogoBox>
                        {control.teams.left.logo && (
                            <img
                                src={control.teams.left.logo}
                                alt={control.teams.left.name}
                                loading="lazy"
                            />
                        )}
                    </LeftSide_LogoBox>

                    <LeftSide>
                        <LeftSide_NameBox>
                            <span>{control.teams.left.name}</span>
                        </LeftSide_NameBox>
                    </LeftSide>

                    <LeftScoreBox><span>{gameInfo.score.blue}</span></LeftScoreBox>

                    <ClockContainer><span>{clock}</span></ClockContainer>

                    <RightScoreBox><span>{gameInfo.score.orange}</span></RightScoreBox>

                    <RightSide>
                        <RightSide_NameBox>
                            <span>{control.teams.right.name}</span>
                        </RightSide_NameBox>
                    </RightSide>

                    <RightSide_LogoBox>
                        {control.teams.right.logo && (
                            <img
                                src={control.teams.right.logo}
                                alt={control.teams.right.name}
                                loading="lazy"
                            />
                        )}
                    </RightSide_LogoBox>
                </ScorebugWrapper>

                <BottomBoxContainer>
                    <BottomLeftBox>
                        {Array.from({ length: maxWins }).map((_, i) => (
                            <GameScoreIndicator
                                key={i}
                                win={i < blueWins}
                                team="blue"
                            />
                        ))}
                    </BottomLeftBox>

                    <BottomCenterBox>
                        <TextContainer>
                            <GameText>GAME {currentGame}</GameText>
                            <DividerDotText>|</DividerDotText>
                            <BestText>{control.stream.bestOf}</BestText>
                        </TextContainer>
                    </BottomCenterBox>

                    <BottomRightBox>
                        {Array.from({ length: maxWins }).map((_, i) => (
                            <GameScoreIndicator
                                key={i}
                                win={i < orangeWins}
                                team="orange"
                            />
                        ))}
                    </BottomRightBox>
                </BottomBoxContainer>
            </ScorebugContainer>

            <ReplayContainer isVisible={gameInfo.isReplay}>
                <BackImage />

                <CenterBoxCont isVisible={gameInfo.isReplay}>
                    <CenterBox>
                        <StatLineOneCont>
                            <StatLineOne>
                                <CenterBoxSmallPlayerName>Scored By</CenterBoxSmallPlayerName>
                                <CenterBoxPlayerName>
                                    {goalControl.goal.scorer.name}
                                </CenterBoxPlayerName>
                            </StatLineOne>

                            <StatLineOne>
                                <CenterBoxSmallPlayerName>Assisted By</CenterBoxSmallPlayerName>
                                <CenterBoxPlayerName>
                                    {goalControl.goal.assister.name || "N/A"}
                                </CenterBoxPlayerName>
                            </StatLineOne>

                            <StatLineOne>
                                <CenterBoxSmallPlayerName>Goal Speed</CenterBoxSmallPlayerName>
                                <CenterBoxPlayerName>
                                    {Math.round(goalControl.goal.goalspeed)}
                                </CenterBoxPlayerName>
                            </StatLineOne>

                            <StatLineOne>
                                <CenterBoxSmallPlayerName>Time Between Goals</CenterBoxSmallPlayerName>
                                <CenterBoxPlayerName>
                                    {(() => {
                                        const totalSeconds = Math.floor(goalControl.goal.goaltime);
                                        const minutes = Math.floor(totalSeconds / 60);
                                        const seconds = totalSeconds % 60;

                                        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
                                    })()}
                                </CenterBoxPlayerName>
                            </StatLineOne>
                        </StatLineOneCont>
                    </CenterBox>
                </CenterBoxCont>
            </ReplayContainer>
        </>
    );
});