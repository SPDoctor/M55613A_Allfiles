### Module 7: Creating Objects and Methods by Using JavaScript

::: secondary
Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the labfiles repository resides. For example, if you cloned or extracted the labfiles repository to **C:\M55613A_Allfiles**, change the path: **[Repository Root]\AllFiles\Mod01** to **C:\M55613A_AllFiles\Mod01**.
:::

### Lab: Refining Code for Maintainability and Extensibility

::: secondary
###### Preparation Steps

Ensure that you have cloned the M55613A_Allfiles directory from GitHub
 (**https://github.com/SPDoctor/M55613A_Allfiles**). It contains the code segments for the labs and demos in this course.
:::

### Exercise 1: Refactoring JavaScript Code to Use Classes and Objects

#### Task 1: Create the ScheduleList class

1. [ ] In Microsoft Visual Studio, on the **File** menu, point to **Open**, and then click **Project/Solution**.

2. [ ] In the **Open Project** dialog box, browse to **[Repository Root]\Allfiles\Mod07\Labfiles\Starter\Exercise 1**, click **ContosoConf.sln**, and then click **Open**.

	::: warning
	**Note**: If **Security Warning for ContosoConf** dialog box appears, clear **Ask me for every project in this solution** checkbox and then click **OK**.
	:::

3. [ ] Expand the **ContosoConf** project, expand the **wwwroot** folder, then expand the **scripts** folder, and then expand the **pages** folder.
4. [ ] Double-click **schedule.js**.
5. [ ] Find the following comment:

    ```javascript
        // TODO: Create a ScheduleList class.
    ```
6. [ ] Right-click the **scripts** folder, point to **Add**, then **New Item...** and then select **JavaScript File**.
7. [ ] For item name, add **ScheduleList.js**, and then click **Ok**.
8. [ ] Add the following JavaScript code:
	```javascript
		import { ScheduleItem } from "./ScheduleItem.js";

		export class ScheduleList {
			//TODO: Add Constructor
			
			//TODO: Add methods
		}
		
	```
9. [ ] In **schedule.js**, find and remove the following comment:
	```javascript
        // TODO: Create a ScheduleList class.
    ```

#### Task 2: Convert variables into properties of the ScheduleList class

1. [ ] In **schedule.js**, find the following comment:
    ```javascript
        // TODO: Refactor these variables into properties of the ScheduleList class.
		//		 Assign them in the "initialize" method from arguments
    ```
2. [ ] Delete the following line of JavaScript code after this comment:
    ```javascript
        const element, localStarStorage;
    ```

3. [ ] In **ScheduleList.js**, find the following JavaScript code:
    ```javascript
        //TODO: Add Constructor
    ```
4. [ ] Replace the code with the following JavaScript code:
    ```javascript
        constructor(listElement, localStarStorage) {
			this.element = listElement;
			this.localStarStorage = localStarStorage;
			this.items = [];
		}
    ```
5. [ ] In **schedule.js**, find and remove the following comment:
    ```javascript
        // TODO: Refactor these variables into properties of the ScheduleList class.
		//		 Assign them in the "initialize" method from arguments
    ```

#### Task 3: Convert functions into methods of the ScheduleList class

1. [ ] In **schedule.js**, find the following JavaScript code:
    ```javascript
        // TODO: Refactor these functions into methods of the ScheduleList class.
    ```
2. [ ] Delete the **startDownload**, **downloadDone**, **downloadFailed**, **addAll**, and **add** functions that follow this comment.
3. [ ] In **ScheduleList.js**, find the following comment:
    ```javascript
        //TODO: Add methods
    ```
3. [ ] Replace the code with the following JavaScript code:
    ```javascript
		async startDownload() {
			// await response of fetch call
			let response = await fetch("/schedule/list")
			// transform body to json
			let data = await response.json();
	
			// checking response is ok
			if (response.ok) {
				this.downloadDone(data);
			} else {
				this.downloadFailed();
			}
		}

		downloadDone(responseData) {
			this.addAll(responseData.schedule);
		}

		downloadFailed() {
			alert("Could not retrieve schedule data at this time. Please try again later.");
		}

		addAll(itemsArray) {
			itemsArray.forEach(this.add, this);
		}

		add(itemData) {
			const item = new ScheduleItem(itemData, this.localStarStorage);
		this.items.push(item); // Store item object in our array
		this.element.appendChild(item.element); // Also add the item element to the UI.
	}
    ```
4. [ ] In **schedule.js**, find and remove the following comment:
    ```javascript
        // TODO: Refactor these functions into methods of the ScheduleList class.
    ```

#### Task 4: Create and use a ScheduleList object

1. [ ] In **schedule.js**, find the following JavaScript code:
    ```javascript
        // TODO: Replace the following code by creating a ScheduleList object 
        //       and calling the startDownload method.
        element = document.getElementById("schedule");
        localStarStorage = new LocalStarStorage(localStorage);
        startDownload();
    ```
2. [ ] Delete this block of JavaScript code, including the TODO comment, and then replace it with the following code:
    ```javascript
		const scheduleListElement = document.getElementById("schedule");
		const scheduleList = new ScheduleList(
			scheduleListElement,
			new LocalStarStorage(localStorage)
		);
		scheduleList.startDownload();
    ```
3. [ ] Find the following JavaScript code at the top of the file:
    ```javascript
		//TODO: Import objects/functions from the modules/classes.
		import { LocalStarStorage } from "../LocalStarStorage.js";
		import { ScheduleItem } from "../ScheduleItem.js";
    ```
4. [ ] Delete this block of JavaScript code, including the TODO comment, and then replace it with the following code:
    ```javascript
		import { ScheduleList } from "../ScheduleList.js";
		import { LocalStarStorage } from "../LocalStarStorage.js";
    ```

#### Task 5: Test the application

1. [ ] In **Solution Explorer**, on the **Debug** menu, click **Start Without Debugging**.
2. [ ] In Microsoft Edge, navigate to the **Schedule** page.
3. [ ] In Microsoft Edge, if the **Intranet settings are turned off by default** message appears, click **Don't show this message again**.
4. [ ] Verify that the page looks similar to the image below:

   ![Screenshot](./Images/Lab7_Schedule-Refactored.png "The Schedule page")

5. [ ] Close Microsoft Edge.

6. [ ] Close all open windows.

::: success
**Results**: On completing this exercise, you have used objects to refactor the JavaScript code for the **Schedule** page to be more maintainable.

After completing this exercise, you will have refactored the JavaScript code for the **Schedule** page to be more maintainable by using objects.
:::

©2026 Specialist Courseware Ltd


