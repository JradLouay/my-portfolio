import Link from "next/link";
import SocialMediaIconList from "./social-mediaIcon-list";
import { urls } from "@/constants";
import ActiveLinkHide from "./active-link-hide";

function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="section-container flex flex-col gap-14 text-white">
        <div className="">
          {" "}
          <span className="title-big max-w-6xl">
            Got a Project to work with?&nbsp;
          </span>{" "}
          <span className="hover:text-violet-400">
            {" "}
            <Link
              href={"/contact"}
              className="title-big underline hover:transition hover:duration-100 hover:ease-linear"
            >
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
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          {/* <div className="text-xl font-medium text-white">
            ©2024 Louay Jrad
          </div> */}
          <Link href={"/"} className="header-name group">
            <span className="text-violet-400 hover:transition hover:duration-100 hover:ease-linear group-hover:text-violet-300">
              LouayJrad
            </span>

            <span className="text-teal-300 hover:transition hover:duration-100 hover:ease-linear group-hover:text-teal-200">
              _
            </span>
          </Link>
          <div className="block md:hidden">
            <SocialMediaIconList />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
