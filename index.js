//////////////////////////////
// Requires
//////////////////////////////
var express = require('express'),
    path = require('path');

var appcasts = [
  {
    url: "/status_cast.xml",
    file: "./src/status_cast.xml"
  },
  {
    url: "/visualization_cast.xml",
    file: "./src/visualization_cast.xml"
  },
  {
    url: "/data_cast.xml",
    file: "./src/data_cast.xml"
  },
  {
    url: "/appdynamics-visualizations.sketchplugin-1.0.0.zip",
    file: "./src/appdynamics-visualizations.sketchplugin-1.0.0.zip"
  },
  {
    url: "/appdynamics-visualizations.sketchplugin-1.1.0.zip",
    file: "./src/appdynamics-visualizations.sketchplugin-1.1.0.zip"
  },
  {
    url: "/appdynamics-status.sketchplugin-1.0.0.zip",
    file: "./src/appdynamics-status.sketchplugin-1.0.0.zip"
  },
  {
    url: "/appdynamics-status.sketchplugin-1.1.0.zip",
    file: "./src/appdynamics-status.sketchplugin-1.1.0.zip"
  },
  {
    url: "/appdynamics-status.sketchplugin-1.1.1.zip",
    file: "./src/appdynamics-status.sketchplugin-1.1.1.zip"
  },
  {
    url: "/appdynamics-data.sketchplugin-1.0.0.zip",
    file: "./src/appdynamics-data.sketchplugin-1.0.0.zip"
  },
  {
    url: "/appdynamics-data.sketchplugin-1.1.0.zip",
    file: "./src/appdynamics-data.sketchplugin-1.1.0.zip"
  },
  {
    url: "/appdynamics-data.sketchplugin-1.2.0.zip",
    file: "./src/appdynamics-data.sketchplugin-1.2.0.zip"
  },
  {
    url: "/appdynamics-data.sketchplugin-1.3.0.zip",
    file: "./src/appdynamics-data.sketchplugin-1.3.0.zip"
  }
]

//////////////////////////////
// App Variables
//////////////////////////////
var app = module.exports = express();
app.use(express.static(path.join(__dirname, 'src')));

appcasts.forEach(a => {
  app.get(a.url, (req, res, next) => {
    res.send(a.file)
  })
})

//////////////////////////////
// Start the server
//////////////////////////////
app.listen(3000, function () {
  console.log('Server starting on ' + 3000);
});