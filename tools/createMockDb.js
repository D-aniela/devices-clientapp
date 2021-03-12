/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { devices, typeDevice } = mockData;
const data = JSON.stringify({ devices, typeDevice });
const filepath = path.join(__dirname, "devices.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
