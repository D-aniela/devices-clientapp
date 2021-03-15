/* eslint-disable no-console */
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "devices.json"));

// Can pass a limited number of options to this to override (some)
const middlewares = jsonServer.defaults({
  // Display json-server's built in homepage when json-server starts.
  static: "node_modules/json-server/dist",
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function (req, res, next) {
  setTimeout(next, 0);
});

// Declaring custom routes below. Add custom routes before JSON Server router

// Add createdAt to all POSTS
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.post("//", function (req, res, next) {
  const error = validateDevice(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    console.log(req.body);
    req.body.system_name = createSlug(req.body.system_name); // Generate a system name url for new devices
    next();
  }
});

// Use default router
server.use(router);

// Start server
const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

// Returns a URL friendly slug
function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function validateDevice(device) {
  if (!device.system_name) return "Device name is required.";
  if (!device.type) return "Device type is required.";
  if (!device.hdd_capacity) return "Device capacity is required.";
  if (isNaN(device.hdd_capacity)) return "Must input numbers";
  return "";
}
