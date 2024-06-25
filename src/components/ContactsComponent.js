import Link from "next/link";
import Image from "next/image";

function ContactsComponent() {
  return (
    <div className="items-start md:items-center gap-6 flex flex-col md:flex-row">
      <Link
        href="/contact"
        className="p-[10px] bg-black text-white text-[16.94px] font-medium rounded-[60px] justify-start items-center flex"
      >
        Contact me
      </Link>
      <div className="items-center gap-6 flex">
        {" "}
        <Link
          target="_blank"
          href={"https://twitter.com/LouayJrad"}
          className="justify-center items-center p-4 flex rounded-full border border-black"
        >
          <Image height={25} width={25} src="/Twitter.png" alt="Twitter Icon" />
        </Link>
        <Link
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
        </Link>
        <Link
          target="_blank"
          href={"https://www.instagram.com/louayjrad/"}
          className="justify-center items-center p-4 rounded-full border border-black  fle"
        >
          <Image height={25} width={25} src="/Instagram.png" alt="" />
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
