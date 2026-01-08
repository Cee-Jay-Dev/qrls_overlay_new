import React, { useContext, useMemo } from "react";
import { OverlayControlContext } from "../../contexts/OverlayControlProvider";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import { SeriesScoreContext } from "../../contexts/seriesScoreContext";
import {
    BackImage,
    ScorebugCon,
    ScorebugWrap,
    Blue_LogoBox,
    BlueTeamNameBack,
    BlueTeamName,
    BlueScoreBox,
    VSContainer,
    OrangeScoreBox,
    OrangeTeamNameBack,
    Orange_LogoBox,
    OangeTeamName,
    StreamTitle,
    BottomCenterBox,
    BottomLeftBox,
    BottomRightBox,
    BottomBoxContainer,
    TextContainer,
    DividerDotText,
    GameText,
    GameScoreIndicator,
    BestText,
    LeftPlayerNameBox,
    RightPlayerNameBox,
    StatsContainer,
    StatsWrapper,
    STATContainer,
    LeftStatsValueBox,
    RightStatsValueBox,
    StatTitlesBox,
    StatsTitle,
    DisplayStatsBlueSide,
    DisplayStatsOrangeSide,
    DisplayStatsPerBack,
    StatsValue,
    StatsColumn,
    StatsNameTitle,
} from "./Scoreboard.style";

const STATS = ["score", "goals", "shots", "assists", "saves", "demos"] as const;
const MAX_BAR_WIDTH = 230;

export const Scoreboard = React.memo(() => {
    const { gameInfo } = useContext(GameInfoContext);
    const control = useContext(OverlayControlContext);
    const series = useContext(SeriesScoreContext)!;

    const { blueWins, orangeWins, maxWins } = series;

    const currentGame = Math.min(
        blueWins + orangeWins + 1,
        maxWins * 2 - 1
    );

    const bluePlayers = useMemo(
        () => gameInfo.players.filter(p => p.team === 0),
        [gameInfo.players]
    );

    const orangePlayers = useMemo(
        () => gameInfo.players.filter(p => p.team === 1),
        [gameInfo.players]
    );

    const statTotals = useMemo(() => {
        const totals: Record<string, { blue: number; orange: number }> = {};

        STATS.forEach(stat => {
            totals[stat] = {
                blue: bluePlayers.reduce((s, p) => s + (p[stat] as number), 0),
                orange: orangePlayers.reduce((s, p) => s + (p[stat] as number), 0),
            };
        });

        return totals;
    }, [bluePlayers, orangePlayers]);

    const getWidths = (blue: number, orange: number) => {
        const total = blue + orange || 1;
        return {
            blue: (blue / total) * MAX_BAR_WIDTH,
            orange: (orange / total) * MAX_BAR_WIDTH,
        };
    };

    return (
        <BackImage>
            <ScorebugCon>
                <StreamTitle>{control.stream.title}</StreamTitle>

                <ScorebugWrap>
                    <Blue_LogoBox>
                        {control.teams.left.logo && (
                            <img
                                src={control.teams.left.logo}
                                alt={control.teams.left.name}
                                loading="lazy"
                            />
                        )}
                    </Blue_LogoBox>

                    <BlueTeamNameBack>
                        <BlueTeamName>
                            <span>{control.teams.left.name}</span>
                        </BlueTeamName>
                    </BlueTeamNameBack>

                    <BlueScoreBox><span>{gameInfo.score.blue}</span></BlueScoreBox>

                    <VSContainer><span>VS</span></VSContainer>

                    <OrangeScoreBox><span>{gameInfo.score.orange}</span></OrangeScoreBox>

                    <OrangeTeamNameBack>
                        <OangeTeamName>
                            <span>{control.teams.right.name}</span>
                        </OangeTeamName>
                    </OrangeTeamNameBack>

                    <Orange_LogoBox>
                        {control.teams.right.logo && (
                            <img
                                src={control.teams.right.logo}
                                alt={control.teams.right.name}
                                loading="lazy"
                            />
                        )}
                    </Orange_LogoBox>
                </ScorebugWrap>

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
                            <GameText>GAME {currentGame - 1}</GameText>
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
            </ScorebugCon>

            <StatsContainer>
                <StatsWrapper>
                    <LeftPlayerNameBox>
                        {bluePlayers.map(p => (
                            <StatsColumn key={p.name}>
                                <StatsNameTitle>{p.name}</StatsNameTitle>
                            </StatsColumn>
                        ))}
                    </LeftPlayerNameBox>

                    <STATContainer>STATISTICS</STATContainer>

                    <RightPlayerNameBox>
                        {orangePlayers.map(p => (
                            <StatsColumn key={p.name}>
                                <StatsNameTitle>{p.name}</StatsNameTitle>
                            </StatsColumn>
                        ))}
                    </RightPlayerNameBox>
                </StatsWrapper>

                <StatsWrapper>
                    <LeftStatsValueBox>
                        {bluePlayers.map(p => (
                            <StatsColumn key={p.name}>
                                {STATS.map(stat => (
                                    <StatsValue key={stat}>{p[stat]}</StatsValue>
                                ))}
                            </StatsColumn>
                        ))}
                    </LeftStatsValueBox>

                    <StatTitlesBox>
                        {STATS.map(stat => {
                            const { blue, orange } = statTotals[stat];
                            const widths = getWidths(blue, orange);

                            return (
                                <div key={stat}>
                                    <StatsTitle>{stat.toUpperCase()}</StatsTitle>
                                    <DisplayStatsPerBack>
                                        <DisplayStatsBlueSide width={widths.blue} />
                                        <DisplayStatsOrangeSide width={widths.orange} />
                                    </DisplayStatsPerBack>
                                </div>
                            );
                        })}
                    </StatTitlesBox>

                    <RightStatsValueBox>
                        {orangePlayers.map(p => (
                            <StatsColumn key={p.name}>
                                {STATS.map(stat => (
                                    <StatsValue key={stat}>{p[stat]}</StatsValue>
                                ))}
                            </StatsColumn>
                        ))}
                    </RightStatsValueBox>
                </StatsWrapper>
            </StatsContainer>
        </BackImage>
    );
});
