import { urls } from "@/constants";
import ActiveLinkStyle from "./ActiveLinkStyle";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
function Header() {
  return (
    <header className="section-container flex justify-between">
      <Link href={"/"} className="header-name group">
        <span className="text-violet-600 hover:transition hover:duration-100 hover:ease-linear group-hover:text-violet-400">
          LouayJrad
        </span>

        <span className="text-teal-500 hover:transition hover:duration-100 hover:ease-linear group-hover:text-teal-300">
          _
        </span>
      </Link>
      <nav className="hidden items-center lg:flex">
        <ul className="header-link flex items-center gap-11">
          {urls.map(({ text, href }) => (
            <li key={text}>
              <ActiveLinkStyle href={href}>{text}</ActiveLinkStyle>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenu />
    </header>
  );
}

export default Header;
