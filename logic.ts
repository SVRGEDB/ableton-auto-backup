import chalk from "chalk";
import fs from "fs";
import path from "path";

export const copyRecursiveSync = (src: string, dest: string) => {
  if (fs.existsSync(src) && fs.statSync(src).isDirectory()) {
    fs.existsSync(dest) || fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    console.log(`Copying: ${chalk.cyan(src)} to ${chalk.blue(dest)}`);
    fs.copyFileSync(src, dest);
  }
};
