const fs = require("fs");
const path = require("path");

export function GET(req, res) {
  const filePath = path.join(process.cwd(), "public", "Louay_Jrad_CV.pdf"); // Path to your file
  // Filename for the downloaded file
  const fileName = "louay_jrad_CV.pdf";

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }

  // Determine the content type based on the file extension
  const contentType = "application/pdf";

  // Set headers to force download
  res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
  res.setHeader("Content-Type", contentType);

  // Stream the file
  const fileStream = fs.createReadStream(filePath);
  return fileStream.pipe(res);
}
