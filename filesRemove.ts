import * as fs from "fs";

// Remove all files in `templates`
fs.readdirSync("./templates").forEach(filePath => {
  fs.unlinkSync(`./templates/${filePath}`);
});
