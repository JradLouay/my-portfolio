import { urls } from "@/constants";
import ActiveLinkStyle from "./active-link-style";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
function Header() {
  return (
    <header className="section-container flex items-center justify-between">
      <Link href={"/"} className="header-name group">
        <span className="text-violet-600 hover:transition hover:duration-100 hover:ease-linear group-hover:text-violet-400">
          LouayJrad
        </span>

        <span className="text-teal-500 hover:transition hover:duration-100 hover:ease-linear group-hover:text-teal-300">
          _
        </span>
      </Link>
      <nav className="hidden items-center lg:flex">
        <ul className="header-links flex items-center gap-11">
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
