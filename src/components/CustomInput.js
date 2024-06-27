import React from "react";

function CustomInput({ type, label, title, placeholder, required }) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={title} className="text-gray-700 text-[40px] font-medium">
        {label}
      </label>
      <input
        name={title}
        id={title}
        row
        type={type}
        className="outline-none border-b-[3px] py-3 bg-transparent border-gray-700 text-gray-700 placeholder:text-gray-700 text-[25px] font-medium hover:border-violet-500 focus:border-violet-500 hover:transition hover:duration-100 hover:ease-linear"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default CustomInput;
