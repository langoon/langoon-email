"use strict";
exports.__esModule = true;
var fs = require("fs");
// Remove all files in `templates`
fs.readdirSync("./templates").forEach(function (filePath) {
    fs.unlinkSync("./templates/" + filePath);
});
