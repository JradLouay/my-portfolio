"use client";

import { useRouter } from "next/navigation";

function Button({ text, navigation, href, ...rest }) {
  const router = useRouter();
  function goToAllProjects() {
    router.push(href);
  }
  return (
    <button
      {...(navigation && { onClick: goToAllProjects })}
      className="flex w-fit items-center justify-center self-end border-b-[3px] border-teal-500 pb-[6px] text-xl font-semibold text-gray-700 outline-none hover:text-teal-500 hover:transition hover:duration-100 hover:ease-linear focus:text-teal-500"
      {...rest}
    >
      {text}
    </button>
  );
}

export default Button;
