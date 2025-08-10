import fs from "fs";
import path from "path";

type ProjectType = "all" | "programming" | "engineering";

export default function getProjectsOfType(type : ProjectType) {
  const folderPath = path.join(process.cwd(), "data");

  const jsonFiles = fs.readdirSync(folderPath)
    .filter(file => file.endsWith('.json'))
    .map((file) => {
      const filePath = path.join(folderPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    })

  if (type === 'all') return jsonFiles;

  const filteredJsonFiles = jsonFiles.filter(file => file.type === type);
  return filteredJsonFiles;
}