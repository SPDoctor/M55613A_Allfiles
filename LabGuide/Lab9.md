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

3. [ ] In **Solution Explorer**, expand the **ContosoConf** project, and then double-click **schedule.htm**.
4. [ ] On the **Debug** menu, click **Start Without Debugging**.

5. [ ] Expand the Windows notification area, right-click **IIS Express**, and then select **Exit**.
6. [ ] In the **Confirmation** dialog box, click **Yes**.
7. [ ] In Microsoft Edge, in the **Registration** box, click the star icon, and then verify that the icon is now colored yellow.
8. [ ] Click **Refresh**.
9. [ ] Verify that the star icon for **Registration** is now colored white.
10. [ ] Close Microsoft Edge.

#### Task 2: Save information about starred sessions to local storage

1. [ ] In **Solution Explorer**, expand the **ContosoConf** project, expand the **scripts** folder, and then double-click **LocalStarStorage.js**.
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

1. [ ] In **Solution Explorer**, double-click **appcache.manifest**.

2. [ ] Find the following line:

      ```javascript
        CACHE MANIFEST
      ```

3. [ ] After the line, insert the following line:

      ```javascript
        # version 2
      ```

4. [ ] In **Solution Explorer**, double-click **schedule.htm**.

5. [ ] On the **Debug** menu, click **Start Without Debugging**.
6. [ ] In Microsoft Edge, to refresh the page, press F5.
7. [ ] Expand the Windows notification area, right-click **IIS Express**, and then select **Exit**.
8. [ ] In the **Confirmation** dialog box, click **Yes**.
9. [ ] In Microsoft Edge, click the star icon in the **Registration** box, and then verify that the icon is now colored yellow.
10. [ ] Press F5.
11. [ ] Verify that the star icon for **Registration** is still colored yellow.
12. [ ] Close Microsoft Edge.

#### Task 6: Reset Microsoft Edge caching

1. [ ] On the taskbar, click **Microsoft Edge**.
2. [ ] In Microsoft Edge, to display the menu bar, press F10.
3. [ ] On the **Tools** menu, click **Internet options**.

4. [ ] In the **Internet Options** dialog box, click **Settings**.
5. [ ] In the **Website Data Settings** dialog box, click the **Caches and databases** tab.
6. [ ] Clear the **Allow website caches and databases** check box, and then click **OK**.
7. [ ] In the **Internet Options** dialog box, click **OK**.
8. [ ] Close Microsoft Edge.
9. [ ] Close all open windows.

::: success
**Results**: After completing this exercise, you will have updated the **Schedule** page to record starred sessions locally.
:::

©2026 Specialist Courseware Ltd


