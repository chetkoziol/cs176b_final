We have 3 main files, server.js, index.html, and main.js.
server.js hosts the web server that the html page will make requests to.
web/index.html is the main html page where the user can run the speed tests and see extra information.
web/js/main.js contains all of the javascript code that handles the ajax requests to the server, and calculates the appropriate speeds.

To run this a device must being running the server, then you can open up index.html and use the site.
node server.js //starts the server

We also used a template for our index.html page, and included it in the folder, titled: index_original.html