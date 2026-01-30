import { LivePage } from "../LivePage.js";
// TODO: Create a web socket connection to ws://localhost:[port]/live/socket

new LivePage(
    socket,
    document.querySelector("main.live")
);
