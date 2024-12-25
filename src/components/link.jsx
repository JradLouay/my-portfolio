import Link from "next/link";

function CustomLink({ children, href, style }) {
  return (
    <Link
      href={href}
      className={`flex w-fit items-center justify-center border-b-[3px] border-teal-500 pb-[6px] text-xl font-semibold text-gray-700 outline-none hover:text-teal-500 hover:transition hover:duration-100 hover:ease-linear focus:text-teal-500 ${style}`}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
