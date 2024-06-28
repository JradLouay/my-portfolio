import React from "react";

function Button({ text, ...rest }) {
  return (
    <button
      className="flex w-fit items-center justify-center self-end border-b-[3px] border-teal-500 pb-[6px] text-xl font-semibold text-gray-700 outline-none hover:text-teal-500 hover:transition hover:duration-100 hover:ease-linear focus:text-teal-500"
      {...rest}
    >
      {text}
    </button>
  );
}

export default Button;
