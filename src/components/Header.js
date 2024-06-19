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
      </ul>
      <MobileMenu />
    </header>
  );
}

export default Header;
