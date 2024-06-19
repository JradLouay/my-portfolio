"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function ActiveLinkStyle({ children, href }) {
  const pathname = usePathname();
  const active = pathname == href;
  return (
    <Link
      href={href}
      className={`hover:underline hover:text-black ${
        active && "underline text-black"
      } capitalize`}
    >
      {children}
    </Link>
  );
}

export default ActiveLinkStyle;
