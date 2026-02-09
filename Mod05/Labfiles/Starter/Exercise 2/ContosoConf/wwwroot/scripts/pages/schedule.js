let schedules = [];
const list = document.getElementById("schedule");
const track1CheckBox = document.getElementById("show-track-1");
const track2CheckBox = document.getElementById("show-track-2");

function downloadSchedule() {
    const request = new XMLHttpRequest();
    request.open("GET", "/schedule/list", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            try {
                const response = JSON.parse(request.responseText);
                if (request.status === 200) {
                    response.schedule.forEach(function (element) {
                        schedules.push(element);
                    });
                    displaySchedule();
                } else {
                    alert(response.message);
                }
            } catch (exception) {
                alert("Schedule list not available.");
            }
        }
    };
    request.send();
}

const createSessionElement = (session) => {
    const li = document.createElement('li');
    li.className = 'schedule-item';
    li.sessionId = session.id;
    
    li.innerHTML = `
        <a href="#" class="star"></a>
        <span>${session.title}</span>
    `;
    
    return li;
};

const clearList = () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

const displaySchedule = () => {
    clearList();
    for (let schedule of schedules) {
        const tracks = schedule.tracks;
        const isCurrentTrack = (track1CheckBox.checked && tracks.indexOf(1) >= 0) ||
                             (track2CheckBox.checked && tracks.indexOf(2) >= 0);
        if (isCurrentTrack) {
            const li = createSessionElement(schedule);
            list.appendChild(li);
        }
    }
}

// TODO: Create a function called saveStar that accepts parameters sessionId and isStarred
// Task 1: Send the request to indicate the session that an attendee has selected
// - Create a new XMLHttpRequest
// - Use request.open() to open a POST request to "/schedule/star/" + sessionId
// Task 2: Handle the web service response
// - Add an onreadystatechange handler after request.open()
// - Check if isStarred is true
// - In the handler, check readyState === 4 and status === 200
// - Parse the JSON response
// - If response.starCount > 50, display alert: "This session is very popular! Be sure to arrive early to get a seat."
// After the handler:
// - Set request header "Content-Type" to "application/x-www-form-urlencoded"
// - Create data variable: "starred=" + isStarred
// - Send the request with the data
function saveStar(sessionId, isStarred) {

}

const handleListClick = (event) => {
    const isStarElement = event.srcElement.classList.contains("star");
    if (isStarElement) {
        event.preventDefault(); // Stop the browser following the clicked <a> element's href.

        const listItem = event.srcElement.parentNode;
        if (listItem.classList.contains("starred")) {
            listItem.classList.remove("starred");
            saveStar(listItem.sessionId, false);
        } else {
            listItem.classList.add("starred");
            saveStar(listItem.sessionId, true);
        }
    }
}

track1CheckBox.addEventListener("click", displaySchedule, false);
track2CheckBox.addEventListener("click", displaySchedule, false);
list.addEventListener("click", handleListClick, false);

downloadSchedule();