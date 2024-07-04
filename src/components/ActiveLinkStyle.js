"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function ActiveLinkStyle({ children, href, className, ...rest }) {
  const pathname = usePathname();
  const active = pathname == href;
  return (
    <Link
      href={href}
      className={`text-[#83888F] hover:text-[#333D4B] hover:transition hover:duration-100 hover:ease-linear ${
        active && "!text-gray-700"
      } capitalize ${className !== undefined ? className : ""}`}
      {...(rest !== undefined && rest)}
    >
      {children}
    </Link>
  );
}

export default ActiveLinkStyle;
