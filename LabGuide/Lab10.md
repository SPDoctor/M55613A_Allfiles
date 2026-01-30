## Module 10: Implementing an Adaptive User Interface

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the labfiles repository resides. For example, if you cloned or extracted the labfiles repository to **C:\M55613A_Allfiles**, change the path: **[Repository Root]\AllFiles\Mod01** to **C:\M55613A_AllFiles\Mod01**.

## Lab: Implementing an Adaptive User Interface

::: secondary
###### Preparation Steps

Ensure that you have cloned the M55613A_Allfiles directory from GitHub
 (**https://github.com/SPDoctor/M55613A_Allfiles**). It contains the code segments for the labs and demos in this course.

Also, make sure that you have disabled caching in Microsoft Edge:
* Open Microsoft Edge
* Press F12
* Click on the **Network** tab
* Click **Always refresh from server**

:::

### Exercise 1: Creating a Print-Friendly Style Sheet

#### Task 1: Review the existing application

1.	Start Microsoft Visual Studio, and then from the **[Repository Root]\Allfiles\Mod10\Labfiles\Starter\Exercise 1** folder, open the **ContosoConf.sln** solution.
2.	Run the application, and then view the **about.htm** page.
2.  In Microsoft Edge, if the **Intranet settings are turned off by default** message appears, click **Don’t show this message again**.
3.	On the **About** page press **Ctrl+P**  to open the **Print Preview** window. Notice that the print preview attempts to display the page header and that the text columns are too narrow.

![alt text](./Images/Lab10_Print-Preview.png "The About page in Print Preview mode")

4.	Close the **About ContosoConf - Print** window and then close Microsoft Edge.
5.	In ContosoConf - Microsoft Visual Studio, examine the about.htm page and verify that the **&lt;nav&gt;** element is marked with the **page-nav** class, the **&lt;header&gt;** element is marked with the **page-header** class, and the **&lt;footer&gt;** element is marked with the **page-footer** class, as follows:
```html
    <nav class="page-nav">

    <header class="page-header">

    <footer class="page-footer">
```
You will use these classes to style the elements when the page is printed.

#### Task 2: Create a style sheet for printing web pages

1.	In the ContosoConf project, right-click the **styles** folder, and choose **Add New Item** to add a new style sheet named **print.css**.
- Use the **Add New Item** wizard and the **Style Sheet** template on the **Web** tab, and give it the name **print.css**.
2.	In the **print.css** style sheet, delete the existing content.
2.  Add the following CSS rule to hide the **nav** element that has the **page-nav** class, the **header** element that has the **page-header** class, and the **footer** element that has the **page-footer** class, by setting the **display** property of these elements to **none**:
    ```css
    nav.page-nav,
    header.page-header,
    footer.page-footer {
        display: none;
    }
    ```
3.	When printing, container elements should have no maximum width or padding. Add a CSS rule for the **.container** class, which overrides the CSS from **site.css**:
    ```css
    .container {
        padding: 0;
        max-width: none;
    }    ```
4.	In the **styles/pages** folder, the **about.css** style sheet contains the following CSS rule to display the page text in columns.
    ```css
        .about > article > section {
            text-align: justify;

            /* Columns Layout */
            column-count: 3;
            column-gap: 5rem; ;
        }
    ```
5. In **print.css**, add a CSS rule that removes the columns, so that the text displays as a single block:
    ```css
    .about > article > section {
        column-count: 1;
    }
    ```

#### Task 3: Link the print style sheet to the About page

1. Open the **About** page (**about.htm**), and in the **&lt;head&gt;** section, find the comment:
    ```html
    &lt;!-- TODO: Add print.css &lt;link&gt; here --&gt;
    ```

1. Create a link to **print.css** and set the **media** attribute of the link so that the style sheet is used only when printing:
    ```html
    <link href="/styles/print.css" media="print" rel="stylesheet" type="text/css" />
    ```

#### Task 4: Test the application

1.	Run the application, and then view the **About** page.
2.	Refresh the page to ensure that the most recent version of the **About** page is loaded.
3.	In Microsoft Edge, press **ctrl+P** to open the **Print Preview** window and verify that the preview does not display the navigation, header, or footer and that the text has no columns.

3. Verify that the About - Print window resembles the following image:

![alt text](./Images/Lab10_Print-Preview-Final.png "The Print Preview version of the About page")

4.	Close the **About ContosoConf - Print** window, and then close Microsoft Edge.

>**Results**: After completing this exercise, you will have added a style sheet that implements a print-friendly format for the web pages.

### Exercise 2: Adapting Page Layout to Fit Different Form Factors

#### Task 1: Simulate the web application running on a small device

1.	In Visual Studio, from the **[Repository Root]\Allfiles\Mod10\Labfiles\Starter\Exercise 2** folder, open the **ContosoConf.sln** solution.

::: warning
**Note**: If **Security Warning for ContosoConf** dialog box appears, clear **Ask me for every project in this solution** checkbox and then click **OK**.
:::

2.	Run the application, and then view the **index.htm** page.

3.	Resize Microsoft Edge to **800 x 480**, approximating the form factor of a smartphone device, by using the F12 Developer Tools to change the size of the device viewing the website. The **Resize** command on the **Tools** menu enables you to change the size of the browser.

4.	Notice that the website navigation bar does not fit on the screen and that the big **Register** link overlaps the header text.

![alt text](./Images/Lab10_Home-Narrow.png "The Home page")

5.	Close Microsoft Edge.

#### Task 2: Implement styles for hand-held devices and smartphones

1.	From the styles **folder**, open the **mobile.css** style sheet. This style sheet is referenced in the **&lt;head&gt;** element of each page in the website. This style sheet is currently empty, but you will use it to specify the styles for hand-held devices and smartphones.
2.	Add a CSS media query that targets screens that are less than or equal to 480 pixels in width:
  ```css
  @media screen and (max-width: 480px) {
  }
  ```

3.	In the media query, add a rule for **nav.page-nav .container** that uses a flexbox to display the contents of the navigation bar, as follows:
   ```css
        display: flexbox;
        flex-wrap: wrap;
        flex-pack: center;
        display: -ms-flexbox;
        -ms-flex-wrap: wrap;
        -ms-flex-pack: center;
   ```
4.	Add another rule that hides the **:before** and **:after** pseudo elements of the **.active** navigation link, setting the **display** property to none:
   ```css
        nav.page-nav .active:before,
        nav.page-nav .active:after {
            display: none;
        }
   ```

5.	Add another rule that sets a **.5rem** margin around each navigation link. This rule should also set a **1px** dotted border with the color **#3d3d3d** completely around the link, instead of just on the right:
   ```css
        nav.page-nav a {
            border: 1px dotted #3d3d3d;
            margin: .5rem;
        }
   ```

6.	The default layout of the website header is not suitable for screens less than 720 pixels wide. Add another media query to **mobile.css** that targets screen widths up to 720 pixels:
  ```css
  @media screen and (max-width: 720px) {
  }
  ```

7.	In this media query, add rules that perform the following actions:
- Reduce the height of the page header (set the **height** to **auto**).
- Hide the large **Register** link in the page header.
- Reduce the **font-size** of the **&lt;h1&gt;** element in the page header to **3rem**:
  ```css
    @media screen and (max-width: 720px) {
        header.page-header {
            height: auto;
        }

        header.page-header .register {
            display: none;
        }

        header.page-header h1 {
            font-size: 3rem;
        }
    }
  ```

#### Task 3: Test the application

1.	Run the application, and then view the **Home** page.
1.  In Microsoft Edge, open the F12 Developer Tools.
1.	Resize Microsoft Edge to various sizes to test that the media queries adapt the user interface correctly, by using the **Emulation** option under **Display**.
1. Select **1280x800** from the resolution drop-down list, and verify that the desktop layout is displayed correctly:
![desktop screenshot](./Images/Lab10_Home-Desktop.png "screenshot of home page with desktop size display")
1. Select **1280x800** from the resolution drop-down list, and verify that the desktop layout is displayed correctly:
![smartphone screenshot](./Images/Lab10_Home-Small.png "screenshot of home page in smartphone size display")
1.	Close Microsoft Edge.

::: success
**Results**: After completing this exercise, you will have a website that adapts to different screen sizes.
:::

©2026 Specialist Courseware Ltd
