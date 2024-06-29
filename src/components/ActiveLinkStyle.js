"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function ActiveLinkStyle({ children, href, className, ...rest }) {
  const pathname = usePathname();
  const active = pathname == href;
  return (
    <Link
      href={href}
      className={`text-gray-500 hover:text-gray-700 hover:transition hover:duration-100 hover:ease-linear ${
        active && "text-gray-700 underline transition duration-500 ease-in-out"
      } capitalize ${className !== undefined ? className : ""}`}
      {...(rest !== undefined && rest)}
    >
      {children}
    </Link>
  );
}

export default ActiveLinkStyle;
