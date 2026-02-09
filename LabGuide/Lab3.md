### Module 3: Introduction to JavaScript

::: secondary
Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the labfiles repository resides. For example, if you cloned or extracted the labfiles repository to **C:\M55613A_Allfiles**, change the path: **[Repository Root]\AllFiles\Mod01** to **C:\M55613A_AllFiles\Mod01**.
:::

### Lab: Displaying Data and Handling Events by Using JavaScript

::: secondary
###### Preparation Steps

Ensure that you have cloned the M55613A_Allfiles directory from GitHub
 (** https://github.com/SPDoctor/M55613A_Allfiles**). It contains the code segments for the labs and demos in this course.
:::

#### Exercise 1: Displaying Data Programmatically

#### Task 1: Review the existing code for the Schedule page
 
1. [ ] Start Microsoft Visual Studio.
2. [ ] In Microsoft Visual Studio, on the **File** menu, point to **Open**, and then click **Project/Solution**.

3. [ ] In the **Open Project** dialog box, browse to the **[Repository Root]\Allfiles\Mod03\Labfiles\Starter\Exercise 1** folder, click **ContosoConf.sln**, and then click **Open**.

    ::: warning
    **Note**: If **Security Warning for ContosoConf** dialog box appears, clear **Ask me for every project in this solution** checkbox and then click **OK**.
    :::

4. [ ] In Solution Explorer, expand the **ContosoConf** project node, and then double-click **schedule.htm**.
5. [ ] Review the contents of the **schedule.htm** file and verify that the **schedule** page section contains the following markup:

    ```html
        <section class="page-section schedule">
            <div class="container">
                <h1>Schedule</h1>
                <ul id="schedule"></ul>
            </div>
        </section>
    ```

6. [ ] Verify that the file contains the following HTML markup towards the end:

    ```html
        <script src="/scripts/pages/schedule.js" type="text/javascript"></script>
    ```

7. [ ] In Solution Explorer, expand the **scripts** folder.
8. [ ] Expand the **pages** sub-folder.
9. [ ] Double-click **schedule.js**.
10. [ ] Review the contents of the **schedule.js** file and verify that the first few lines contain the following code:

    ```javascript
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
            ...
        ];
    ```

#### Task 2: Write code to get the schedule list element on the Schedule page

1. [ ] In Solution Explorer, double-click **schedule.js**.

2. [ ] After the line containing the **TODO: Task 2** comment, add the following line of JavaScript:

    ```javascript
        const list = document.getElementById("schedule");
    ```

#### Task 3: Implement the createSessionElement function that creates the list item for a session

1. [ ] In **schedule.js**, in the **createSessionElement** function body, add the following JavaScript code:

    ```javascript
        const li = document.createElement('li');
        li.className = 'schedule-item';
        li.sessionId = session.id;
        
        li.innerHTML = `
            <a href="#" class="star"></a>
            <span>${session.title}</span>
        `;
        
        return li;
    ```

#### Task 4: Implement the displaySchedule function that adds session items to the list for display

1. [ ] In **schedule.js**, in the **displaySchedule** function, find the following comment:

    ```javascript
        // TODO: Task 4 - Loop through the schedules array
        //       Create session elements
        //       Append the elements to the list
    ```

2. [ ] After this comment, add the following JavaScript code:

    ```javascript
        clearList();
        for (let schedule of schedules) {
            const li = createSessionElement(schedule);
            list.appendChild(li);
        }
    ```

#### Task 5: Run the web application and view the Schedule page

1. [ ] In **Solution Explorer**, on the **Debug** menu, click **Start Without Debugging**.
2. [ ] In Microsoft Edge, if the message, "Intranet settings are turned off by default," appears, click **Don't show this message again**.
3. [ ] In Microsoft Edge, navigate to the **Schedule** page.
4. [ ] Verify that the list of sessions is displayed.
5. [ ] Close Microsoft Edge.


::: success
**Results**: After completing this exercise, you will have added the **Schedule** page, which displays the details of the conference sessions, to the ContosoConf application.
:::

#### Exercise 2: Handling Events

#### Task 1: Add check box HTML elements

1. [ ] In ContosoConf - Visual Studio, on the **File** menu, point to **Open**, and then click **Project/Solution**.

2. [ ] In the **Open Project** dialog box, browse to **[Repository Root]\Allfiles\Mod03\Labfiles\Starter\Exercise 2**, click **ContosoConf.sln**, and then click **Open**.

    ::: warning
    **Note**: If **Security Warning for ContosoConf** dialog box appears, clear **Ask me for every project in this solution** checkbox and then click **OK**.
    :::

3. [ ] In Solution Explorer, expand the **ContosoConf** project, and then double-click **schedule.htm**.
4. [ ] Find the line containing the following HTML markup:

    ```html
        <ul id="schedule"></ul>
    ```

5. [ ] Before this line, insert the following HTML markup:
Show:

    ```html
        <input type="checkbox" id="show-track-1" checked="checked"/><label      for="show-track-1">Track 1</label>
        <input type="checkbox" id="show-track-2" checked="checked"/><label      for="show-track-2">Track 2</label>
    ```

#### Task 2: Write code to get the check box elements from the Schedule page

1. [ ] In Solution Explorer, expand the **scripts** folder, expand the **pages** sub-folder, and then double-click **schedule.js**.

2. [ ] In **schedule.js**, find the line containing the following JavaScript code:

    ```javascript
        const list = document.getElementById("schedule");
    ```

3. [ ] After this line, add the following JavaScript code:

    ```javascript
        const track1CheckBox = document.getElementById("show-track-1");
        const track2CheckBox = document.getElementById("show-track-2");
    ```

#### Task 3: Add click event listeners for each check box

1. [ ] In **schedule.js**, add the following JavaScript code to the end of the file:

    ```javascript
        track1CheckBox.addEventListener("click", displaySchedule, false);
        track2CheckBox.addEventListener("click", displaySchedule, false);
    ```

#### Task 4: Update the displaySchedule function to display the sessions for selected tracks

1. [ ] In the **schedule.js** file, in the **displaySchedule** function, find the **for** loop:

    ```javascript
        for (let schedule of schedules) {
            const li = createSessionElement(schedule);
            list.appendChild(li);
        }
    ```

2. [ ] Replace the two lines inside the **for** loop with the following JavaScript code (this adds filtering logic to only display sessions for the selected tracks):

    ```javascript
        const tracks = schedule.tracks;
        const isCurrentTrack = (track1CheckBox.checked && tracks.indexOf(1) >= 0) ||
                                (track2CheckBox.checked && tracks.indexOf(2) >= 0);
        if (isCurrentTrack) {
            const li = createSessionElement(schedule);
            list.appendChild(li);
        }
    ```

#### Task 5: Run the web application and view the Schedule page

1. [ ] In **Solution Explorer**, on the **Debug** menu, click **Start Without Debugging**.
2. [ ] In Microsoft Edge, navigate to the **Schedule** page.
3. [ ] Verify that both check boxes are selected and that the complete list of sessions is displayed.
4. [ ] Clear **Track 1** and verify that only the sessions for **Track 2** appear.
5. [ ] Select **Track 1**, clear **Track 2**, and then verify that only the sessions for Track 1 appear.
6. [ ] Clear **Track 1** and verify that no sessions appear.
7. [ ] Close Microsoft Edge.
8. [ ] Close all open windows.

::: success
**Results**: After completing this exercise, you will have updated the **Schedule** page to filter sessions based on which tracks have been selected.
:::

©2026 Specialist Courseware Ltd


