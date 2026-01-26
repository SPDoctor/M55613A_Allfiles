import { LivePage } from "../LivePage.js";
// Create a web socket connection to /live/socket
const socket = new WebSocket(`ws://${window.location.host}/live/socket`);
new LivePage(
    socket,
    document.querySelector("section.live")
);


