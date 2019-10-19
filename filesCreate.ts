import * as inlineCss from "inline-css";
import * as fs from "fs";

const isHtmlFile = (file: string) => file.endsWith(".html");

// Find all HTML files in root directory
fs.readdirSync("./")
  .filter(isHtmlFile)
  .forEach(async filePath => {
    try {
      // File HTML markup
      const fileHtml = fs.readFileSync(filePath, { encoding: "utf-8" });
      // File HTML markup with css inlined
      const fileHtmlCssInline = await inlineCss(fileHtml, { url: "/" });
      // Write inlined file to '/templates'
      fs.writeFileSync(`templates/${filePath}`, fileHtmlCssInline);
      console.log(`✅  ${filePath} has been created or modified`);
    } catch (error) {
      console.log(
        // prettier-ignore
        `❌  ${filePath} could not be created or modified because of error: \n\n > ${error} \n\n`
      );
    }
  });
