let schedules = [];
const list = document.getElementById("schedule");
const track1CheckBox = document.getElementById("show-track-1");
const track2CheckBox = document.getElementById("show-track-2");

// TODO: Create a function called downloadSchedule
// Task 2: Create the downloadSchedule function
// - Create a new XMLHttpRequest object
// - Use request.open() to open a GET request to "/schedule/list" with async=true
// - Add onreadystatechange handler that:
//   - Checks if readyState === 4
//   - Parses the JSON response
//   - Loops through response.schedule and pushes each element to schedules array
//   - Calls displaySchedule()
// - Use request.send() to send the request
// Task 3: Add error handling
// - Wrap the JSON parsing and processing in a try-catch block
// - Check if request.status === 200 before processing
// - If status is not 200, display alert with response.message
// - If an exception occurs, display alert: "Schedule list not available."

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

// TODO: Task 2, Step 4: Call the downloadSchedule() function here