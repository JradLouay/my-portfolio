import Link from "next/link";
import Image from "next/image";
import iconTwitter from "../../public/icon-twitter.svg";
import iconInstagram from "../../public/icon-instagram.svg";
import iconGithub from "../../public/icon-github.svg";
import iconLinkedin from "../../public/icon-linkedin.svg";
// import iconFMentor from "../../public/icon-frontend-mentor.svg";
import CustomLink from "./Link";

function ContactsComponent() {
  return (
    <div className="flex items-center gap-6">
      <Link
        target="_blank"
        href={""}
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
        href={""}
        className="flex items-center justify-center"
      >
        <Image src={iconGithub} alt="github icon" />
      </Link>
    </div>
  );
}

export default ContactsComponent;
