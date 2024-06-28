import Link from "next/link";

function LinkHoverEffect({ children, ...rest }) {
  return (
    <Link
      {...rest}
      className="relative z-10 text-gray-700 w-fit text-[26px] font-semibold link-underline-effect"
    >
      {children}
    </Link>
  );
}

export default LinkHoverEffect;
