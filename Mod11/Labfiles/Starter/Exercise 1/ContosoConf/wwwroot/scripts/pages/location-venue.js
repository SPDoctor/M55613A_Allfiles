let currentInfoDiv = document.getElementById("instruction");

function showRoomInfo(roomId) {
    const infoDiv = document.getElementById(roomId + "-info");
    if (currentInfoDiv) {
        currentInfoDiv.style.display = "none";
    }
    infoDiv.style.display = "block";
    currentInfoDiv = infoDiv;
};

// TODO: Get the room elements in the svg element.

// TODO: Add a click event listener for each room element.
// TODO: In the event listener, call the showRoomInfo function, passing in the id of the clicked element.


