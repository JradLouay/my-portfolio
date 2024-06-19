"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function ActiveLinkStyle({ children, href, className, ...rest }) {
  const pathname = usePathname();
  const active = pathname == href;
  return (
    <Link
      href={href}
      className={`hover:text-black ${
        active && "underline text-black"
      } capitalize ${className !== undefined ? className : ""}`}
      {...(rest !== undefined && rest)}
    >
      {children}
    </Link>
  );
}

export default ActiveLinkStyle;
