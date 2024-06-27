// "use client";

import Link from "next/link";

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
    <Link
      // onClick={handleDownload}
      target="_blank"
      href={"/Louay_Jrad_CV.pdf"}
      className="text-gray-700 text-[26px] font-semibold underline hover:text-violet-400"
    >
      Download my cv
    </Link>
  );
}

export default DownloadCV;
