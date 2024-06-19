import ActiveLinkStyle from "./ActiveLinkStyle";
import { urls } from "@/constants";
import MobileMenu from "./MobileMenu";
function Header() {
  return (
    <header className="section-container flex justify-between">
      <h3 className="max-w-24 header-name">Louay Jrad.</h3>
      <ul className="hidden items-center gap-11 lg:flex header-link">
        {urls.map(({ text, href }) => (
          <li key={text}>
            <ActiveLinkStyle href={href}>{text}</ActiveLinkStyle>
          </li>
        ))}
        <li>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path>
          </svg>
        </li>
      </ul>
      <MobileMenu />
    </header>
  );
}

export default Header;
