import fs from "fs";
import path from "path";

const currentPath = "D:\\BatchesBMPL\\Mern-24\\Node\\one.js";

console.log("path name is ", currentPath);
console.log("The base name is ", path.basename(currentPath));
console.log("The dir name is ", path.dirname(currentPath));
console.log("The Parsed Path is  ", path.parse(currentPath));
console.log("The Extension  is  ", path.extname(currentPath));

console.log("The Joined PATH IS  ", path.join(currentPath, "hello", "one.ts"));
console.log(
  "The resolved PATH IS  ",
  path.resolve(currentPath, "hello", "one.ts")
);
