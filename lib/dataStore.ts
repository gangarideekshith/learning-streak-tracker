import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "studyData.json");

export function readData() {
  const file = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(file);
}

export function writeData(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
