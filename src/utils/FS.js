import fs from "fs";
import path from "path";

export const read = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(process.cwd(), "src", "model", dir), (err, data) => {
      if (!fs.existsSync(path.join(process.cwd(), "src", "model", dir))) {
        return reject("Path not found " + dir);
      }
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
};

export const write = (dir, data) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path.join(process.cwd(), "src", "model", dir))) {
      return reject("Path not found " + dir);
    }

    fs.writeFile(
      path.join(process.cwd(), "src", "model", dir),
      JSON.stringify(data, null, 2),
      (err) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
};
