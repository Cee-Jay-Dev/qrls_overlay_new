import { WebsocketService } from "../services/websocketService";
import { createContext } from "react";

export const WebsocketContext = createContext(WebsocketService);