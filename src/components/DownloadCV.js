"use client";

function DownloadCV() {
  async function downloadCV() {
    try {
      const response = await fetch("/api", {
        responseType: "blob", // Important for binary data
      });

      // Extract filename from content-disposition header
      const contentDisposition = response.headers["content-disposition"];
      const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
      const fileName = fileNameMatch ? fileNameMatch[1] : "downloadedFile";

      // Create a temporary anchor element to trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      // Setting filename received in response
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }
  return (
    <button
      onClick={downloadCV}
      className="self-start text-black text-[26px] font-semibold underline hover:text-violet-400"
    >
      Download my cv
    </button>
  );
}

export default DownloadCV;
