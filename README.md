# What is my User Agent?

Shows a page containing the User Agent string of the client that performed the request.

This is a very simple project I built to test my production server.

To use:
- Clone this repository
- run "npm install" to install the dependencies
- **Important**: you must specify the port by using the PROJECT_PORT environment variable
- Remember to also set NODE_ENV=production: this alone should make Express at least 2 times faster!

Usage example:
`PROJECT_PORT=3000 NODE_ENV=production node index.js`