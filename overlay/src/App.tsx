import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebsocketService } from "./services/websocketService";
import { WebsocketContext } from "./contexts/WebsocketContext";
import { ControlPanel } from "./scenes/ControlPanel";
import { OverlayControlProvider } from "./contexts/OverlayControlProvider";
import { GameContext } from "./models/contexts/GameContext";
import { DEFAULT_GAME_INFO, GameInfoContext } from "./contexts/GameInfoContext";
import { OverlayRouter } from "./scenes/OverlayRouter";
import { SeriesScoreProvider } from "./services/changeScore";
import { SeriesController } from "./contexts/seriesScoreController";

function App() {
    useEffect(() => {
        WebsocketService.init(49322, false);
    }, []);

    const [gameInfo, setGameInfo] =
        useState<GameContext>(DEFAULT_GAME_INFO);

    return (
        <WebsocketContext.Provider value={WebsocketService}>
            <GameInfoContext.Provider value={{ gameInfo, setGameInfo }}>
                <OverlayControlProvider>
                    <SeriesScoreProvider>
                        <SeriesController />

                        <BrowserRouter>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<OverlayRouter />}
                                />
                                <Route
                                    path="/controlpanel"
                                    element={<ControlPanel />}
                                />
                            </Routes>
                        </BrowserRouter>

                    </SeriesScoreProvider>

                </OverlayControlProvider>
            </GameInfoContext.Provider>
        </WebsocketContext.Provider>
    );
}

export default App;
