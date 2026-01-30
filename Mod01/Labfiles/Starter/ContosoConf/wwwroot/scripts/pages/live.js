import { LivePage } from "../LivePage.js";
// Create a web socket connection to /live/socket
const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const socket = new WebSocket(`${protocol}//${window.location.host}/live/socket`);
new LivePage(
    socket,
    document.querySelector("main.live")
);
