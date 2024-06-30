import Image from "next/image";
import Link from "next/link";
import iconTwitter from "../../public/icon-twitter-white.svg";
import iconInstagram from "../../public/icon-instagram-white.svg";
import iconGithub from "../../public/icon-github-white.svg";
import iconLinkedin from "../../public/icon-linkedin-white.svg";

function SocialMediaIconList() {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link
          target="_blank"
          href={""}
          className="flex items-center justify-center"
        >
          <Image src={iconLinkedin} alt="linkedIn icon" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href={""}
          className="flex items-center justify-center"
        >
          <Image src={iconTwitter} alt="Twitter Icon" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href={""}
          className="flex items-center justify-center"
        >
          <Image src={iconInstagram} alt="instagram icon" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href={""}
          className="flex items-center justify-center"
        >
          <Image src={iconGithub} alt="github icon" />
        </Link>
      </li>
    </ul>
  );
}

export default SocialMediaIconList;
