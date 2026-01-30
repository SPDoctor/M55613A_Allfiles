### Module 14: Packaging JavaScript for Production Deployment

::: secondary
Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the labfiles repository resides. For example, if you cloned or extracted the labfiles repository to **C:\M55613A_Allfiles**, change the path: **[Repository Root]\AllFiles\Mod01** to **C:\M55613A_AllFiles\Mod01**.
:::

### Lab: Setting Up Webpack Bundle for Production

::: secondary
###### Preparation Steps

1. Ensure that you have cloned the M55613A_Allfiles directory from GitHub
. It contains the code segments for the labs and demos in this course. (**https://github.com/SPDoctor/M55613A_Allfiles**)
:::

### Exercise 1: Creating a Deploy Package Using webpack

#### Task 1: Install and configure Babel and webpack

1. [ ] Open Microsoft Visual Studio.

2. [ ] In Microsoft Visual Studio, on the **File** menu, point to **Open**, and then click **Project/Solution**.
3. [ ] In the **Open Project** dialog box, browse to **[Repository Root]\Allfiles\Mod15\Labfiles\Starter**, click **ContosoConf.sln**, and then click **Open**.

    ::: warning
    **Note**: If **Security Warning for ContosoConf** dialog box appears clear **Ask me for every project in this solution** and then click **OK**.
    :::

4. [ ] In ContosoConf - Microsoft Visual Studio, on the **Project** menu, right-click **Add New Item**.
5. [ ] In the **Add New Item – ContosoConf** dialog box, click **npm Configuration File**.
6. [ ] In the **Name** box, type **package.json**.
7. [ ] Click **Add**.
8. [ ] Open the command prompt and navigate to the project folder **ContosoConf**.
9. [ ] To install **babel-core**, **babel-loader**, **babel-preset**, and **webpack**, run the following command at the command prompt:

   ```bash
        npm install @babel/core babel-loader @babel/preset-env webpack webpack-cli --save-dev
   ```

10. [ ] In ContosoConf - Microsoft Visual Studio, on the **Project** menu, right-click **Add New Item**.
11. [ ] In the **Add New Item – Solution Items** dialog box, click **JavaScript File**.
12. [ ] In the **Name** box, type **webpack.config.js**.
13. [ ] Click **Add**.
14. [ ] In the **webpack.config.js** file, to store the **page** and **webpack** packages into variables, use **require**.

    ```javascript
        var path = require('path');
        var webpack = require('webpack');
    ```

15. [ ] To configure the **module.exports** object with the **entry** object that includes an entry for every JavaScript file that was imported into the html file, use the following code:

    ```javascript

        module.exports = {
            entry: {
                video: './wwwroot/scripts/pages/video.js',
                feedback: './wwwroot/scripts/pages/feedback.js',
                live: './wwwroot/scripts/pages/live.js',
                location: './wwwroot/scripts/pages/location.js',
                locationVenue: './wwwroot/scripts/pages/location-venue.js',
                register: './wwwroot/scripts/pages/register.js',
                schedule: './wwwroot/scripts/pages/schedule.js',
                speakerBadge: './wwwroot/scripts/pages/speaker-badge.js',
                offline: './wwwroot/scripts/offline.js'
            },
        }
    ```

16. [ ] Add the **output** object to **module.exports**, configure the **path** property to indicate where to save the **bundle** files, the **filename** property with the **name** placeholder, and **publicPath** with the **dist** value.

    ```javascript
   
        output: {
            path: path.resolve(__dirname,'wwwroot/dist'),
            filename: '[name].bundle.js',
            publicPath: '/dist/'
        },
    ```

17. [ ] Add the **module** object to **module.exports**. Inside the object, add the **rules** array with the **babel-loader** configuration object.

    ```javascript

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
    ```

18. [ ] To **module.exports**, add the **stats**, **devtool**, and **mode** objects.

    ```javascript

        stats: {
            colors: true
        },
        devtool: 'source-map',
        mode: 'production'
    ```

19. [ ] In Visual Studio, click on File->Save All.

#### Task 2: Create bundle files and replace JavaScript

1. [ ] In the Command Prompt window, run the following command.

    ```bash
        npx webpack
    ```

2. [ ] For every html file, replace all **script src** to load the new bundle files from the **dist** folder. For example:

    ```html
        <script src="/scripts/offline.js" type="module"></script>
        <script src="/scripts/pages/video.js" type="module"></script>
    ```

    should be changed to:

    ```html
        <script src="/dist/offline.bundle.js" type="module"></script>
        <script src="/dist/video.bundle.js" type="module"></script>
    ```
3. [ ] Run the application. The application should work as before and support older versions of Internet Explorer.

::: success
**Results**: After completing this exercise, you will have a new **bundle.js** file which supports ECMAScript 5 for older browsers. As a further exercise, you can add a build step in Visual Studio to call webpack automatically with every build.
:::

©2026 Specialist Courseware Ltd


