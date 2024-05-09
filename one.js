import fs from "fs";

fs.writeFile("two.txt", "Hello ", (err) => {
  if (err) {
    console.log("Cannot Write in the file because of some error ", err);
  } else {
    console.log("Written Successfully ");
  }
});

fs.readFile("two.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Cannot Read File ", err);
  } else {
    console.log("Read file Successfully", data);
  }
});

fs.appendFile("two.txt", "Badhia", (err) => {
  if (err) {
    console.log("Error occurs ", err);
  } else {
    console.log("Appended Successfully");
  }
});

fs.readFile("a.mp4", (err, data) => {
  if (err) {
    console.log("Cannot Read file", err);
  } else {
    console.log(data);
    fs.writeFile("b.mp4", data, (err) => {
      if (err) {
        console.log("Cannot Write in the b.mp4");
      } else {
        console.log("Write Successfull");
      }
    });
  }
});

const readStream = fs.createReadStream("a.mp4");
const writeStream = fs.createWriteStream("b.mp4");

readStream.pipe(writeStream);

readStream.on("data", (chunk) => {
  console.log("The Data is ", chunk);
});

readStream.on("end", () => {
  console.log("Stream Ended");
});

fs.unlink("b.mp4", (err) => {
  if (err) {
    console.log("Cannot Delete File ");
  } else {
    console.log("File Deleted Successfully");
  }
});

try {
  const stats = fs.statSync("a.mp4");
  console.log("The stats is ", stats);
} catch (err) {
  console.log("The error is ", err);
}

fs.copyFile("a.mp4", "b.mp4", (err) => {
  if (err) {
    console.log("The error Occurs ", err);
  } else {
    console.log("File Copied Successfully ");
  }
});
