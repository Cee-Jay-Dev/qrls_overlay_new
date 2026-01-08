const WebSocket = require('ws');
const { success, error, warn, info, log } = require('cli-msg');
const atob = require('atob');

let wsClient;
let relayMsDelay = parseInt("0", 10);

const wss = new WebSocket.Server({ port: "49322" });
let connections = {};

info.wb("Opened WebSocket server on port 49322");

wss.on('connection', function connection(ws) {
    let id = (+new Date()).toString();

    connections[id] = {
        connection: ws,
        registeredFunctions: []
    };

    ws.send(JSON.stringify({
        event: "wsRelay:info",
        data: "Connected!"
    }));

    ws.on('message', function incoming(message) {
        sendRelayMessage(id, message);
    });

    ws.on('close', function close() {
        delete connections[id];
    });
});

initRocketLeagueWebsocket("localhost:49122");

setInterval(function () {
    if (wsClient.readyState === WebSocket.CLOSED) {
        warn.wb("Rocket League WebSocket Server Closed. Attempting to reconnect");
        initRocketLeagueWebsocket("localhost:49122");
    }
}, 10000);

function sendRelayMessage(senderConnectionId, message) {
    let json = JSON.parse(message);

    let channelEvent = json.event.split(':');

    if (channelEvent[0] === 'wsRelay') {
        if (channelEvent[1] === 'register') {
            if (connections[senderConnectionId].registeredFunctions.indexOf(json.data) < 0) {
                connections[senderConnectionId].registeredFunctions.push(json.data);
                info.wb(senderConnectionId + "> Registered to receive: " + json.data);
            } else {
                warn.wb(
                    senderConnectionId +
                    "> Attempted to register an already registered function: " +
                    json.data
                );
            }
        } else if (channelEvent[1] === 'unregister') {
            let idx = connections[senderConnectionId].registeredFunctions.indexOf(json.data);
            if (idx > -1) {
                connections[senderConnectionId].registeredFunctions.splice(idx, 1);
                info.wb(senderConnectionId + "> Unregistered: " + json.data);
            } else {
                warn.wb(
                    senderConnectionId +
                    "> Attempted to unregister a non-registered function: " +
                    json.data
                );
            }
        }
        return;
    }

    for (let k in connections) {
        if (!connections.hasOwnProperty(k)) continue;
        if (senderConnectionId === k) continue;

        if (connections[k].registeredFunctions.indexOf(json.event) > -1) {
            setTimeout(() => {
                try {
                    connections[k].connection.send(message);
                } catch (e) {
                    
                }
            }, 0);
        }
    }
}

function initRocketLeagueWebsocket(rocketLeagueHost) {
    wsClient = new WebSocket("ws://" + rocketLeagueHost);

    wsClient.onopen = function () {
        success.wb("Connected to Rocket League on " + rocketLeagueHost);
    };

    wsClient.onmessage = function (message) {
        let sendMessage = message.data;
        if (sendMessage.substr(0, 1) !== '{') {
            sendMessage = atob(message.data);
        }
        setTimeout(() => {
            sendRelayMessage(0, sendMessage);
        }, relayMsDelay);
    };

    wsClient.onerror = function () {
        error.wb(
            `Error connecting to Rocket League on host "${rocketLeagueHost}"\n` +
            `Is the plugin loaded into Rocket League? Run "plugin load sos" in the BakkesMod console.`
        );
    };
}
