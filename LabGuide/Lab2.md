### Module 2: Creating and Styling HTML5 Pages

::: secondary
Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the labfiles repository resides. For example, if you cloned or extracted the labfiles repository to **C:\M55613A_Allfiles**, change the path: **[Repository Root]\AllFiles\Mod01** to **C:\M55613A_AllFiles\Mod01**.
:::

### Lab: Creating and Styling HTML5 Pages

::: secondary
###### Preparation Steps

Ensure that you have cloned the M55613A_Allfiles directory from GitHub
 (**https://github.com/SPDoctor/M55613A_Allfiles**). It contains the code segments for the labs and demos in this course. 
:::

#### Exercise 1: Creating HTML5 Pages

#### Task 1: Create a new ASP.NET Core web application
 
1. [ ] Open Microsoft Visual Studio. If you get the **Open Recent** dialog, click on **Continue without code**.
2. [ ] In Microsoft Visual Studio, on the **File** menu, point to **New**, and then click **Project**.
3. [ ] In the **Create a new Project** dialog box, in the right pane, select the **C#**, **All platforms**, and **Web** filters.
4. [ ] Choose the **ASP.NET Core Empty** project template (you can also search for the template), and click **Next**.
5. [ ] In the **Name** box, enter **ContosoConf**.
6. [ ] In the **Location** box, enter **[Repository Root]\AllFiles\Mod02\Labfiles\Starter\Exercise 1**, and then click **Next**.
7. [ ] On the **Additional information** page, leave the default settings, and then click **Create**.

![Screenshot of Additional information page](./Images/Lab2_Additional_information.png "Additional information page")

#### Task 2: Add the Home page

1. [ ] In Microsoft Visual Studio, Solution Explorer, right-click on the **ContosoConf** project, and click **Add** and then  **New Folder**.
1. [ ] Rename the folder to **wwwroot**.
2. [ ] Right click the **wwwroot** folder, and click on **Add** then **New Item...**, then choose **HTML Page**.
3. [ ] In the **Name** box, enter **index.htm**.
4. [ ] Click **Add**.
5. [ ] From the **[Repository Root]\Allfiles\Mod02\Labfiles\Starter\Exercise 1\Resources** folder, open the **index.txt** file in Notepad.
6. [ ] In Visual Studio, the **index.htm** file should be open, and showing a simple HTML file (if not, you can double click on the file in Solution Exporer).
7. [ ] Inside the **&lt;title&gt;** element, add the following text from the header section of the **index.txt** file:

    ```html
    ContosoConf
    ```
8. [ ] Inside the **&lt;body&gt;** element, add the following HTML markup, with the text taken from the header section of the **index.txt** file:

    ```html
        <header>
            <h1>ContosoConf</h1>
            <p>A two-track conference on the latest HTML5 developments</p>
        </header>
    ```
9. [ ] After the **&lt;/header&gt;** element and before the **&lt;/body&gt;** element, add the following HTML markup, with the text taken from the content section of the **index.txt** file:

    ```html
        <section>
            <p>
                The web keeps evolving. There's a wealth of new technologies to keep up with! ContosoConf is an in-depth exploration of HTML5, CSS, and JavaScript, in the heart of Seattle, WA.

            </p>
            <p>
                Don't miss the best speakers in the business, talking about the future of the web.
            </p>
        </section>
    ```
10. [ ] After the body text that you have just added but before the **&lt;/body&gt;** element, add the following HTML markup, with the text taken from the content section of the **index.txt** file:

    ```html
        <section>
            <h2>Featuring these excellent speakers</h2>
            <ul>
                <li>Melissa Kerr</li>
                <li>David Alexander</li>
                <li>Mark Hanson</li>
                <li>April Meyer</li>
            </ul>
        </section>
    ```

11. [ ] After the body text that you have just added but before the **&lt;/body&gt;** element, add the following HTML markup, with the text taken from the content section of the **index.txt** file:

    ```html
        <section>
            <h2>Thanks to our sponsors</h2>
            <ul>
                <li>Trey Research</li>
                <li>Litware, Inc</li>
                <li>Fourth Coffee</li>
                <li>Graphic Design Institute</li>
                <li>Southridge Video</li>
            </ul>
        </section>
    ```

12. [ ] After the body text that you have just added but before the **&lt;/body&gt;** element, add the following HTML markup, with the text taken from the footer section of the **index.txt** file:

    ```html
        <footer>
            <p>
                Hosted by Contoso
            </p>
            <address>
                Conference Center<br />
                3 Somewhere Street<br />
                Seattle<br />
                WA 98999
            </address>
            <p>
                &#169; 2024 Contoso
            </p>
        </footer>
    ```

    ::: warning
    **Note**: Be sure to replace the © symbol with the value `&#169;`
    :::
13. [ ] Save **index.htm**.
13. [ ] Close Notepad.

#### Task 3: Add images to the Home page

1. [ ] On the Windows Taskbar, click **File Explorer**.
2. [ ] In File Explorer, browse to the **[Repository Root]\Allfiles\Mod02\Labfiles\Starter\Exercise 1\Resources** folder.
3. [ ] In Solution Explorer, drag and drop the **images** folder from File Explorer onto the ContosoConf project **wwwroot** folder.
4. [ ] In **index.htm** file, replace the text **Melissa Kerr** with the following HTML markup: 

    ```html
        <img src="/images/speakers/melissa-kerr.jpg" alt="Melissa Kerr">
        Melissa Kerr
    ```

5. [ ] Replace the text **David Alexander** with the following HTML markup:

    ```html
        <img src="/images/speakers/david-alexander.jpg" alt="David Alexander">
        David Alexander
    ```

6. [ ] Replace the text **Mark Hanson** with the following HTML markup:

    ```html
        <img src="/images/speakers/mark-hanson.jpg" alt="Mark Hanson">
        Mark Hanson
    ```

7. [ ] Replace the text **April Meyer** with the following HTML markup:

    ```html
        <img src="/images/speakers/april-meyer.jpg" alt="April Meyer">
        April Meyer
    ```

8. [ ] Replace the text **Trey Research** with the following HTML markup:

    ```html
        <img src="/images/sponsors/sponsor1.png" alt="Trey Research">
    ```

9. [ ] Replace the text **Litware, Inc** with the following HTML markup:

    ```html
        <img src="/images/sponsors/sponsor2.png" alt="Litware, Inc">
    ```

10. [ ] Replace the text **Fourth Coffee** with the following HTML markup:

    ```html
        <img src="/images/sponsors/sponsor3.png" alt="Fourth Coffee">
    ```

11. [ ] Replace the text **Graphic Design Institute** with the following HTML markup:

    ```html
        <img src="/images/sponsors/sponsor4.png" alt=" Graphic Design Institute ">
    ```

12. [ ] Replace the text **Southridge Video** with the following HTML markup:

    ```html
        <img src="/images/sponsors/sponsor5.png" alt=" Southridge Video ">
    ```

#### Task 4: Add the About page


1. [ ] Right click the **wwwroot** folder, and click on **Add** then **New Item...**, then choose **HTML Page**.
3. [ ] In the **Name** box, enter **about.htm**.
4. [ ] Click **Add**.
5. [ ] From the **[Repository Root]\Allfiles\Mod02\Labfiles\Starter\Exercise 1\Resources** folder, open the **about.txt** file in Notepad.
6. [ ] Go to the **about.htm** file in Visual Studio.
7. [ ] Inside the **&lt;title&gt;** element, add the following text from the header section of the **about.txt** file:

    ```html
        About ContosoConf
    ```

8. [ ] Inside the **&lt;body&gt;** element, add the following HTML markup copied from the **index.htm** page:

    ```html
        <header>
            <h1>ContosoConf</h1>
            <p>A two-track conference on the latest HTML5 developments</p>
        </header>
    ```

9. [ ] After the **&lt;/header&gt;** element and before the **&lt;/body&gt;** element, add the following HTML markup, with the text taken from the **about.txt** file:

    ```html
        <article>
            <h1>ContosoConf brings web designers and developers together</h1>
            <section>
                <p>
                    Since the very first Contoso Conf back in 2009, we've been guided by three principles:
                </p>
                <ol>
                    <li>Community Matters</li>
                    <li>Never Stop Learning</li>
                    <li>Have fun!</li>
                </ol>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae enim arcu, vitae aliquet purus. 
                    Aenean rhoncus diam et orci porttitor fringilla. In porta lacus a turpis pretium placerat. Cras viverra 
                    enim eu nibh pretium ornare. Praesent et adipiscing turpis. Duis mi risus, ornare at bibendum a, 
                    ullamcorper vel tellus. Nulla in egestas velit. Aenean consequat mi sed tellus iaculis laoreet. Donec et odio vel felis commodo porttitor.
                </p>
                <p>
                    Aenean id ligula est. Pellentesque ut magna ligula. Donec nunc eros, tincidunt sit amet sollicitudin 
                    in, semper id mauris. Phasellus odio nulla, molestie ac gravida sed, dignissim in nisl. Nunc luctus 
                    lobortis massa at dapibus. Aenean turpis nibh, hendrerit nec congue et, elementum a justo. Aenean sit 
                    amet nulla odio. Cras feugiat porta risus nec pretium.
                </p>

                <h2>What's It All About?</h2>
                <p>
                    Donec vel sem ut dui vulputate porta. Phasellus imperdiet sapien a arcu adipiscing vitae adipiscing 
                    elit pharetra. Donec sed ante ut eros mattis bibendum non in erat. Donec sagittis, massa eu accumsan 
                    eleifend, eros justo cursus justo, id consequat mauris diam id magna. Vivamus quis tortor massa. Nam ipsum metus, dapibus ac facilisis sit amet, ullamcorper quis risus. Integer aliquet eleifend accumsan.
                </p>
                <blockquote>I had a fantastic time and learnt so much!</blockquote>
                <p>
                    Pellentesque facilisis blandit augue id rhoncus. Sed facilisis varius lectus, eget commodo purus dapibus 
                    nec. In hac habitasse platea dictumst. Etiam imperdiet facilisis malesuada. Nunc semper venenatis elit ac lobortis. Duis lorem lorem, pharetra ut scelerisque nec, consequat sed risus. Morbi rutrum nisl ut ipsum consectetur porttitor. Phasellus sed nunc id diam tempus congue in a leo.
                </p>
                <p>
                    Proin feugiat, turpis id tempor tempor, lorem libero malesuada.
                </p>
            </section>
        </article>
    ```

10. [ ] After the body text that you have just added but before the **&lt;body&gt;** element, add the following HTML markup copied from the **index.htm** page:

    ```html
        <footer>
            <p>
                Hosted by Contoso
            </p>
            <address>
                Conference Center<br />
                3 Somewhere Street<br />
                Seattle<br />
                WA 98343
            </address>
            <p>
                &#169; 2024 Contoso
            </p>
        </footer>
    ```

11. [ ] Close Notepad. 

#### Task 5: Add navigation links

1. [ ] In Solution Explorer, double-click **index.htm**.
2. [ ] In the **&lt;body&gt;** element, before the **&lt;header&gt;** element, insert the following HTML markup:

    ```html
        <nav>
            <a href="/index.htm">Home</a>
            <a href="/about.htm">About</a>
        </nav>
    ```

3. [ ] In Solution Explorer, double-click **about.htm**. 
4. [ ] In the **&lt;body&gt;** element, before the **&lt;header&gt;** element, insert the following HTML markup:

    ```html
        <nav>
            <a href="/index.htm">Home</a>
            <a href="/about.htm">About</a>
        </nav>
    ```

#### Task 6: Build and run a simple ASP.NET Core web application

1. [ ] In Solution Explorer, double-click **Program.cs**.
1. [ ] Replace the line:
  ```csharp
  app.MapGet("/", () => "Hello World!");
  ```
with the following:
  ```csharp
  app.UseHttpsRedirection();
  app.UseDefaultFiles();
  app.UseStaticFiles();
  ```
1. [ ] You should now have a minimal ASP.NET Core web application in **Program.cs**:
  ```csharp
  var builder = WebApplication.CreateBuilder(args);
  var app = builder.Build();

  app.UseHttpsRedirection();
  app.UseDefaultFiles();
  app.UseStaticFiles();

  app.Run();
  ```
2. [ ] On the **Debug** menu, click **Start Debugging**.

3. [ ] In Microsoft Edge, if the **Intranet settings are turned off by default** message appears, click **Don’t show this message again**. Similarly, if you see certificate warnings, you can accept them.
4. [ ] Verify that the **Home** page is displayed.
5. [ ] Click the **About** link.
6. [ ] Verify that the **About** page is displayed.
7. [ ] Click the **Home** link.
8. [ ] Verify that the **Home** page is displayed.
9. [ ] Close Microsoft Edge, and then return to Visual Studio.
10. [ ] On the **Debug** menu, click **Stop Debugging** (if needed).

::: success
**Results**: After completing this exercise, you will have built a simple HTML5 web application with a **Home** page and an **About** page. For convenience, we have used ASP.NET Core as our hosting solution, but ASP.NET Core is not the focus of this course.
:::

#### Exercise 2: Styling HTML pages

#### Task 1: Create a new style sheet

1. [ ] In Solution Explorer, click the **wwwroot** project folder.
2. [ ] On the **Project** menu, click **New Folder** (this is just another way of doing the same thing we did earlier).
3. [ ] In Solution Explorer, change the name of the folder to **styles**.
4. [ ] On the **Project** menu, click **Add New Item**.
5. [ ] In the **Add New Item – ContosoConf** dialog box, click **Style Sheet**.
6. [ ] In the **Name** box, enter **site.css**.
7. [ ] Click **Add**.
8. [ ] In Solution Explorer, double-click **index.htm**.
9. [ ] After the title but before the **&lt;/head&gt;** element, insert the following HTML markup:

    ```html
        <link href="/styles/site.css" rel="stylesheet" type="text/css" />
    ```

10. [ ] In Solution Explorer, double-click **about.htm**.
11. [ ] After the title but before the **&lt;/head&gt;** element, insert the following HTML markup:

    ```html
        <link href="/styles/site.css" rel="stylesheet" type="text/css" />
    ```
1. [ ] Click on **File -> Save All** on the menu.

#### Task 2: Add CSS rules to style the pages

1. [ ] In Solution Explorer, double-click **site.css**.
2. [ ] Delete any existing CSS content.
3. [ ] Insert the following CSS code:

    ```css
        html {
            /* font-size 62.5% makes 1rem equal 10px for easy size calculations. */
            font-size: 62.5%;
            font-family: Calibri, Arial, sans-serif;
            background-color: #EAEEFA;
        }

        body {
            margin: 0;
            /* Default font-size to about 18px */
            font-size: 1.8rem;
        }

        .container {
            padding: 0 1rem;
            max-width: 94rem;
            /* Horizontally center containers */
            margin: 0 auto;
        }

        nav {
            background-color: #1d1d1d;
            line-height: 6rem;
            font-size: 1.7rem;
        }

        nav a {
            color: #fff;
            padding: 1rem;
        }

        h1 {
            font-size: 4rem;
            letter-spacing: -1px;
            margin: 1em 0 .25em 0;
        }
    ```

4. [ ] In Solution Explorer, double-click **index.htm**.
5. [ ] Modify the contents of the **&lt;nav&gt;** element with the following HTML markup to wrap the contents with a div with a class of **container**:

    ```html
        <div class="container">
            <a href="/index.htm">Home</a>
            <a href="/about.htm">About</a>
        </div>
    ```

6. [ ] After the **&lt;/nav&gt;** element and before the **&lt;header&gt;** element, insert the following HTML markup to wrap another div around the rest of the content:

    ```html
        <div class="container">
    ```

7. [ ] To close the **&lt;div&gt;** element, before the **&lt;/body&gt;** element, insert the following HTML markup:

    ```html
        </div>
    ```

8. [ ] In Solution Explorer, double-click **about.htm** to make the same changes.
9. [ ] Replace the contents of the **&lt;nav&gt;** element with the following HTML markup:

    ```html
        <div class="container">
            <a href="/index.htm">Home</a>
            <a href="/about.htm">About</a>
        </div>
    ```

10. [ ] After the **&lt;/nav&gt;** element and before the **&lt;header&gt;** element, insert the following HTML markup:

    ```html
        <div class="container">
    ```

11. [ ] To close the **&lt;div&gt;** element, before the **&lt;/body&gt;** element, insert the following HTML markup:

    ```html
        </div>
    ```
    
#### Task 3: Run the web application

1. [ ] On the **Debug** menu, click **Start Without Debugging**.

1. [ ] In Microsoft Edge, verify that the **Home** page styling has been updated. You may need to use a hard browser refresh (Ctrl-F5) to ensure that a stale version of the page isn't shown from the browser cache. The styled Home page should look similar to this:

    ![Screenshot](./Images/Lab2_Home.png "The styled Home page")

1. [ ] Move to the **About** page and verify that it matches the styling of the home page.
1. [ ] Close Microsoft Edge and any open windows.


::: success
**Results**: After completing this exercise, you will have used CSS rules to style the **Home** and **About** pages.
:::

©2026 Specialist Courseware Ltd


