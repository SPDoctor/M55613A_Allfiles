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

// TODO: Task 2 - Get the "schedule" list element from the document


const createSessionElement = (session) => {
    // TODO: Task 3 - Implement the createSessionElement function
    //       Create a <li> element
    //       Set className to 'schedule-item'
    //       Set sessionId to session.id
    //       Set innerHTML with star link and session title
    //       Return the <li> element
};

const clearList = () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

const displaySchedule = () => {
    // TODO: Task 4 - Loop through the schedules array
    //       Create session elements
    //       Append the elements to the list
}


displaySchedule();
