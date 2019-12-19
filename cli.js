#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const data = `const express = require('express');\n\nconst app = express();\n\n\napp.get('/', (req, res) => { res.send('Hello World');  });\n\napp.listen(3000, () => {console.log('Listening on port 3000')});`;

fs.mkdir(path.resolve("./config"), () => {
  console.log("Creating config folder");
});

fs.mkdir(path.resolve("./routes"), () => {
  console.log("Creating routes folder");
});

fs.mkdir(path.resolve("./controllers"), () => {
  console.log("Creating controllers folder");
});

fs.mkdir(path.resolve("./models"), () => {
  console.log("Creating models folder");
});

fs.writeFile(path.resolve("./index.js"), data, () => {
  console.log("Created index.js");
});

exec("npm init -y", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
  }

  console.log("Created package.json");
});

exec("npm i express", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
  }

  console.log("Installed express");
});
