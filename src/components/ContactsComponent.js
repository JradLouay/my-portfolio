import Link from "next/link";
import Image from "next/image";
import iconTwitter from "../../public/icon-twitter.svg";
import iconInstagram from "../../public/icon-instagram.svg";
import iconGithub from "../../public/icon-github.svg";
import iconLinkedin from "../../public/icon-linkedin.svg";

function ContactsComponent() {
  return (
    <div className="flex items-center gap-6">
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/louay-jrad/"}
        className="flex items-center justify-center"
      >
        <Image src={iconLinkedin} alt="linkedIn icon" />
      </Link>
      <Link
        target="_blank"
        href={"https://twitter.com/LouayJrad"}
        className="flex items-center justify-center"
      >
        <Image src={iconTwitter} alt="Twitter Icon" />
      </Link>
      <Link
        target="_blank"
        href={"https://www.instagram.com/louayjrad/"}
        className="flex items-center justify-center"
      >
        <Image src={iconInstagram} alt="instagram icon" />
      </Link>
      <Link
        target="_blank"
        href={"https://github.com/JradLouay"}
        className="flex items-center justify-center"
      >
        <Image src={iconGithub} alt="github icon" />
      </Link>
    </div>
  );
}

export default ContactsComponent;
