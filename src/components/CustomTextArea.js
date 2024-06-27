import React from "react";

function CustomTextArea({ type, label, title, placeholder, required }) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={title} className="text-gray-700 text-[40px] font-medium">
        {label}
      </label>
      <textarea
        name={title}
        id={title}
        rows={3}
        type={type}
        style={{ resize: "none" }}
        className="outline-none hover:border-violet-500 focus:border-violet-500 hover:transition hover:duration-100 hover:ease-linear border-b-[3px] bg-transparent border-gray-700 rounded-sm text-gray-700 placeholder:text-gray-700 text-[25px] font-medium"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default CustomTextArea;
