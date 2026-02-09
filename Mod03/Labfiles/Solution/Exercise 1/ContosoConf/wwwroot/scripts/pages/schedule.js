const schedules = [
  {
    "id": "session-1",
    "title": "Registration",
    "tracks": [1, 2]
  },
  {
    "id": "session-2",
    "title": "Moving the Web forward with HTML5",
    "tracks": [1, 2]
  },
  {
    "id": "session-3",
    "title": "Diving in at the deep end with Canvas",
    "tracks": [1]
  },
  {
    "id": "session-4",
    "title": "New Technologies in Enterprise",
    "tracks": [2]
  },
  {
    "id": "session-5",
    "title": "WebSockets and You",
    "tracks": [1]
  },
  {
    "id": "session-6",
    "title": "Coffee and Cake Break",
    "tracks": [1, 2]
  },
  {
    "id": "session-7",
    "title": "Building Responsive UIs",
    "tracks": [1]
  },
  {
    "id": "session-8",
    "title": "Fun with Forms (no, really!)",
    "tracks": [2]
  },
  {
    "id": "session-9",
    "title": "A Fresh Look at Layouts",
    "tracks": [1]
  },
  {
    "id": "session-10",
    "title": "Real-world Applications of HTML5 APIs",
    "tracks": [2]
  },
  {
    "id": "session-11",
    "title": "Lunch",
    "tracks": [1, 2]
  },
  {
    "id": "session-12",
    "title": "Getting to Grips with JavaScript",
    "tracks": [1]
  },
  {
    "id": "session-13",
    "title": "Transforms and Animations",
    "tracks": [2]
  },
  {
    "id": "session-14",
    "title": "Web Design Adventures with CSS3",
    "tracks": [1]
  },
  {
    "id": "session-15",
    "title": "Introducing Data Access and Caching",
    "tracks": [2]
  },
  {
    "id": "session-16",
    "title": "Closing Thanks and Prizes",
    "tracks": [1, 2]
  }
];

const list = document.getElementById("schedule");


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
        const li = createSessionElement(schedule);
        list.appendChild(li);
    }
}


displaySchedule();
