import Link from "next/link";
import LinkHoverEffect from "./LinkHoverEffect";

function DownloadCV() {
  // async function handleDownload() {
  //   const link = document.createElement("a");
  //   link.href = "/Louay_Jrad_CV.pdf";
  //   link.download = "Louay_Jrad_CV.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }
  return (
    <LinkHoverEffect
      // onClick={handleDownload}
      target="_blank"
      href={"/Louay_Jrad_CV.pdf"}
    >
      Download my cv
    </LinkHoverEffect>
  );
}

export default DownloadCV;
