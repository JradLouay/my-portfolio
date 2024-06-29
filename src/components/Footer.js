import Link from "next/link";
import SocialMediaIconList from "./SocialMediaIconList";
import { urls } from "@/constants";
import ActiveLinkHide from "./ActiveLinkHide";

function Footer() {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="section-container flex flex-col gap-14 text-white">
        <div className="">
          {" "}
          <span className="title-big max-w-6xl">
            Got a Project to work with?&nbsp;
          </span>{" "}
          <span className="hover:text-violet-400">
            {" "}
            <Link href={"/contact"} className="title-big underline">
              Contact me!
            </Link>
          </span>
        </div>
        <div className="flex items-center justify-center sm:justify-between">
          <nav className="flex items-center">
            <ul className="footer-link flex items-center gap-4 md:gap-11">
              {urls.map(({ text, href }) => (
                <li key={text}>
                  <ActiveLinkHide href={href}>{text}</ActiveLinkHide>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block">
            <SocialMediaIconList />
          </div>{" "}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-medium text-white">
            ©2024 Louay Jrad
          </div>
          <div className="block md:hidden">
            <SocialMediaIconList />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
