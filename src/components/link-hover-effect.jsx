import Link from "next/link";

function LinkHoverEffect({ children, ...rest }) {
  return (
    <Link
      {...rest}
      className="heading-m link-underline-effect relative z-10 w-fit text-gray-700"
    >
      {children}
    </Link>
  );
}

export default LinkHoverEffect;
