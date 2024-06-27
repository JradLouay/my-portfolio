import React from "react";

function Button({ text, ...rest }) {
  return (
    <button
      className="outline-none self-end text-gray-700 text-xl w-fit font-semibold py-[10px] border-b-[3px] border-teal-500 hover:text-teal-500 focus:text-teal-500 hover:transition hover:duration-100 hover:ease-linear justify-center items-center flex"
      {...rest}
    >
      {text}
    </button>
  );
}

export default Button;
