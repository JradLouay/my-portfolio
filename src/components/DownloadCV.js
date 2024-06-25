"use client";

function DownloadCV() {
  async function handleDownload() {
    const link = document.createElement("a");
    link.href = "/Louay_Jrad_CV.pdf";
    link.download = "Louay_Jrad_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <button
      onClick={handleDownload}
      className="self-start text-black text-[26px] font-semibold underline hover:text-violet-400"
    >
      Download my cv
    </button>
  );
}

export default DownloadCV;
