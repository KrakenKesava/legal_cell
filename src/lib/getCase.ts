import fs from "fs";
import path from "path";

export function getCase(urlCaseNo: string) {
  // Convert AO-123 → AO/123
  const formattedCaseNo = urlCaseNo.replace("-", "/");

  // Path to JSON case folder
  const casesDir = path.join(process.cwd(), "src/data/cases");

  // Get all JSON filenames
  const files = fs.readdirSync(casesDir);

  // Read each JSON file
  const caseDataArray = files.map((file) => {
    const filePath = path.join(casesDir, file);
    const json = fs.readFileSync(filePath, "utf8");
    return JSON.parse(json);
  });

  // Find case with matching caseNo
  const match = caseDataArray.find((c) => c.caseNo === formattedCaseNo);

  return match || null;
}
