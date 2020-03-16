/**
 * Template for index.html
 * @param {*} projectName - Name of the project
 */
const indexHTMLContent = projectName => `<!DOCTYPE html>
<html lang="en-US">
    <head>
        <!-- General meta tags needed-->
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <!-- Needed for responsive design -->
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- If you want custom browser colors on mobile -->
        <meta name="theme-color" content="#1843c1" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#1843c1">

        <title></title>

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet"> 
    </head>
    <body>

        <main>
            <section class="content">
                <h1>${projectName} - ${new Date().toISOString().slice(0, 10).split('-').reverse().join('/')}</h1>
                <h2>Web animation based project</h2>

                <p>
                    Here's a quick set-up guide:
                </p>

                <ul>
                    <li>Clone Git repo</li>
                    <li>Install by running "npm install" on the commmand line</li>
                    <li>Run "npm start" on the command line.</li>
                </ul>

            </section>
            
            <aside>
                <h3>Project Info</h3>
                <p>
                    This is a starter front-end project which will compile SCSS and JS files using Webpack 4.
                </p>
            </aside>
            
        </main>

    </body>
</html>`;

module.exports = {
    indexHTMLContent,
};
