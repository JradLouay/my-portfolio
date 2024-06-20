import Link from "next/link";
import SocialMediaIconList from "./SocialMediaIconList";
import { urls } from "@/constants";
import ActiveLinkHide from "./ActiveLinkHide";

function Footer() {
  return (
    <footer className="bg-black py-6">
      <div className="section-container flex flex-col gap-14 text-white ">
        <div className="">
          {" "}
          <span className="max-w-6xl title-big">
            Got a Project to work with?&nbsp;
          </span>{" "}
          <span className="hover:text-violet-400">
            {" "}
            <Link href={"/contact"} className="underline title-big">
              Contact me!
            </Link>
          </span>
        </div>
        <div className="flex justify-center sm:justify-between items-center">
          <ul className="items-center gap-4 md:gap-11 flex footer-link">
            {urls.map(({ text, href }) => (
              <li key={text}>
                <ActiveLinkHide href={href}>{text}</ActiveLinkHide>
              </li>
            ))}
          </ul>
          <div className="md:block hidden">
            <SocialMediaIconList />
          </div>{" "}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-medium">©2024 Louay Jrad</div>
          <div className="md:hidden block">
            <SocialMediaIconList />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
