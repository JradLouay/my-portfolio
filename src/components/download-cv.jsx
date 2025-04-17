"use client";

function DownloadCV() {
  async function handleDownload() {
    const link = document.createElement("a");
    link.href = "/Louay_Jrad_CV.pdf";
    link.download = "Louay_Jrad_Frontend.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <button
      onClick={handleDownload}
      className="link-underline-effect relative z-10 w-fit text-[26px] font-semibold text-gray-700"
    >
      Download my cv
    </button>
  );
}

export default DownloadCV;
