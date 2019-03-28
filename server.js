//Install express server
const express = require('express');
const path = require('path');
var proxy = require('http-proxy-middleware')

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/advertisement-report'));
app.use('/api', proxy({
    target: process.env.BACKEND, changeOrigin: true, pathRewrite: {
        "^/api": ""
    }
}))
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/job-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080); 