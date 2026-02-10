### Module 9: Persisting User Data

::: secondary
Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the labfiles repository resides. For example, if you cloned or extracted the labfiles repository to **C:\M55613A_Allfiles**, change the path: **[Repository Root]\AllFiles\Mod01** to **C:\M55613A_AllFiles\Mod01**.
:::

### Lab: Persisting User Data

::: secondary
###### Preparation Steps

Ensure that you have cloned the M55613A_Allfiles directory from GitHub
 (**https://github.com/SPDoctor/M55613A_Allfiles**). It contains the code segments for the labs and demos in this course.
:::

#### Exercise 1: Persisting User Data by Using the Local Storage API

#### Task 1: Observe the current behavior of the Schedule page

1. [ ] In Microsoft Visual Studio, on the **File** menu, click point to **Open**, and then click **Project/Solution**.

2. [ ] In the **Open Project** dialog box, browse to **[Repository Root]\Allfiles\Mod09\Labfiles\Starter\Exercise 1**, and then open the **ContosoConf.sln** solution.
   
   ::: warning
   **Note**: If **Security Warning for ContosoConf** dialog box appears, clear **Ask me for every project in this solution** checkbox and then click **OK**.
   :::

3. [ ] On the **Debug** menu, click **Start Without Debugging**.
4. [ ] In Microsoft Edge, navigate to the **Schedule** page.
5. [ ] In Microsoft Edge, in the **Registration** box, click the star icon, and then verify that the icon is now colored yellow.
6. [ ] Click **Refresh**.
7. [ ] Verify that the star icon for **Registration** is now colored white, because the change was not persisted.
8. [ ] Close Microsoft Edge.

#### Task 2: Save information about starred sessions to local storage

1. [ ] In **Solution Explorer**, expand the **ContosoConf** project, expand the **wwwroot** folder, then expand the **scripts** folder, and then double-click **LocalStarStorage.js**.
2. [ ] Find the following comments:

      ```javascript
        // TODO: convert this.sessions into a JSON string

        // TODO: save this JSON string into local storage as "stars"
      ```

3. [ ] After the second comment, insert the following JavaScript code:
   
      ```javascript
        this.localStorage.setItem("stars", JSON.stringify(this.sessions));
      ```

#### Task 3: Load information about starred sessions from local storage

1. [ ] In **LocalStarStorage.js**, find the following comment:
   
      ```javascript
        // TODO: get the "stars" from local storage
      ```

2. [ ] After this comment, add the following JavaScript code:

      ```javascript
        var json = this.localStorage.getItem("stars");
      ```

3. [ ] Find the following comments:

      ```javascript
        // TODO: parse the JSON string into this.sessions
        
        // TODO: handle failures due to missing data etc
      ```

4. [ ] After the second comment, add the following JavaScript code:

      ```javascript
        if (json) {
            try {
                this.sessions = JSON.parse(json) || [];
            } catch (exception) {
                this.sessions = [];
            }
        } else {
            this.sessions = [];
        }
      ```

#### Task 4: Use the local storage wrapper to save and load data in the Schedule page

1. [ ] In **Solution Explorer**, expand the **scripts** folder, then double-click **ScheduleItem.js**.
2. [ ] Find the following comment:

      ```javascript
        // TODO: Check if item is starred
      ```

3. [ ] After this comment, add the following JavaScript code:

      ```javascript
        if (localStarStorage.isStarred(this.id)) {
            this.element.classList.add(this.starredClass);
        }
      ```

4. [ ] Find the following comment:

      ```javascript
        // TODO: remove the star from the item
      ```

5. [ ] After this comment, add the following JavaScript code:
   
      ```javascript
        this.localStarStorage.removeStar(this.id);
      ```

6. [ ] Find the following comment:
   
      ```javascript
        // TODO: add a star to the item
      ```

7. [ ] After this comment, add the following JavaScript code:
   
      ```javascript
        this.localStarStorage.addStar(this.id);
      ```

#### Task 5: Test the application

1. [ ] Open **Solution Explorer**.
1. [ ] On the **Debug** menu, click **Start Without Debugging**.
1. [ ] In Microsoft Edge, navigate to the Schedule page.
1. [ ] In Microsoft Edge, to hard refresh the page, press Ctrl-F5.
1. [ ] In Microsoft Edge, click the star icon in the **Registration** box, and then verify that the icon is now coloured yellow.
1. [ ] Press Ctrl-F5 to hard refresh the browser.
1. [ ] Verify that the star icon for **Registration** is still coloured yellow.

#### Task 6: Clear local storage data

1. [ ] In Microsoft Edge, press **F12** to open the Developer Tools.
2. [ ] Click the **Application** tab (it may be under the + menu if your window is narrow).
3. [ ] In the left sidebar, expand **Storage**, then expand **Local Storage**.
4. [ ] Click on the site URL (e.g., **http://localhost:xxxx** where xxxx is your port number).
5. [ ] You should see the **stars** key with its JSON array value in the right panel.
6. [ ] Right-click on the **stars** entry and select **Delete** to remove it.
   
   ::: warning
   **Note**: Alternatively, you can clear all local storage for this site by right-clicking on the site URL in the left sidebar and selecting **Clear**.
   :::

7. [ ] Press **F5** to refresh the page.
8. [ ] Verify that all star icons are now all grey/white (unstarred).
9. [ ] Close the Developer Tools and close Microsoft Edge.
10. [ ] Close all open windows.

::: success
**Results**: After completing this exercise, you will have updated the **Schedule** page to record starred sessions locally.
:::

©2026 Specialist Courseware Ltd


