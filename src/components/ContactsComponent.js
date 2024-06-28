import Link from "next/link";
import Image from "next/image";
import iconTwitter from "../../public/icon-twitter.svg";
import iconInstagram from "../../public/icon-instagram.svg";
import CustomLink from "./Link";

function ContactsComponent() {
  return (
    <div className="flex flex-row items-center gap-6">
      <CustomLink href="/contact">Contact me</CustomLink>
      <div className="flex items-center gap-6">
        {" "}
        <Link
          target="_blank"
          href={"https://twitter.com/LouayJrad"}
          className="flex items-center justify-center"
        >
          <Image src={iconTwitter} alt="Twitter Icon" />
        </Link>
        {/* <Link
          target="_blank"
          href={"https://www.linkedin.com/in/louay-jrad/"}
          className="justify-center items-center p-4 flex rounded-full border border-black"
        >
          <Image
            height={25}
            width={25}
            src="/Linkedin.png"
            alt="Linkedin Icon"
          />
        </Link> */}
        <Link
          target="_blank"
          href={"https://www.instagram.com/louayjrad/"}
          className="flex items-center justify-center"
        >
          <Image src={iconInstagram} alt="" />
        </Link>
        {/* <Link
          href={""}
          className="justify-center items-center p-4 flex "
        >
          <img
            height={25}
            width={25}
            className="w-[24.93px] h-[24.93px]"
            src="https://via.placeholder.com/25x25"
            alt=""
          />
        </Link> */}
      </div>
    </div>
  );
}

export default ContactsComponent;
