"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function ActiveLinkHide({ children, href }) {
  const pathname = usePathname();
  const active = pathname == href;
  return (
    <Link
      href={href}
      className={`hover:underline ${active && "underline"} capitalize`}
    >
      {children}
    </Link>
  );
}

export default ActiveLinkHide;
