import { useContext } from "react";
import { GameService } from "../../services/gameService";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import {
    StatBoardWrapper,
    PlayerNameBox,
    PlayerRow,
    TeamStripe,
    BoostFill,
    BoostBar,
} from "./StatBoard.style";

export const StatBoard = () => {
    const { gameInfo } = useContext(GameInfoContext);

    const spectatedPlayer = GameService.getPlayerFromTarget(
        gameInfo.players,
        gameInfo.target
    );

    const bluePlayers = GameService.getBlueTeam(gameInfo.players);
    const orangePlayers = GameService.getOrangeTeam(gameInfo.players);

    return (
        <>
            <TeamBoard
                isBlue={true}
                players={bluePlayers}
                spectatedPlayer={spectatedPlayer}
            />

            <TeamBoard
                isBlue={false}
                players={orangePlayers}
                spectatedPlayer={spectatedPlayer}
            />
        </>
    );
};

const TeamBoard = ({
    isBlue,
    players,
    spectatedPlayer,
}: {
    isBlue: boolean;
    players: any[];
    spectatedPlayer?: any;
}) => {
    const teamGradient = isBlue
        ? "linear-gradient(to bottom, #0D66AD, #137ECE)"
        : "linear-gradient(to bottom, #C75A0A, #F08C2E)";

    return (
        <StatBoardWrapper isBlue={isBlue}>
            {players.map((player) => {
                const isSpectated =
                    spectatedPlayer?.id === player.id;

                return (
                    <PlayerRow key={player.id} isBlue={isBlue}>
                        <TeamStripe gradient={teamGradient} />
                        <PlayerNameBox
                            isSpectated={isSpectated}
                            gradient={teamGradient}
                            isBlue={isBlue}
                        >
                            <span>{player.name}</span>

                            <BoostBar>
                                <BoostFill
                                    boost={player.boost}
                                    gradient={teamGradient}
                                    isSpectated={isSpectated}
                                />
                            </BoostBar>
                        </PlayerNameBox>
                    </PlayerRow>
                );
            })}
        </StatBoardWrapper>
    );
};
