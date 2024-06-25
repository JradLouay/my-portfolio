import React from "react";

function CustomInput({ type, label, title, placeholder, required }) {
  return (
    <label
      for={title}
      className="cursor-pointer pl-[15px] pr-[35px] pb-[23px] bg-white rounded-xl border border-black flex-col justify-center items-start inline-flex"
    >
      <div className="flex-col justify-center items-start gap-11 flex">
        <div className="flex-col justify-center items-start gap-2 flex">
          <div className="pl-2.5 py-2.5 justify-start items-center gap-2.5 inline-flex">
            <label className="text-black text-[40px] font-medium font-['Clash Display']">
              {label}
            </label>
          </div>
        </div>
        <div className="pl-2.5 py-2.5 justify-start items-center gap-2.5 inline-flex">
          <input
            name={title}
            id={title}
            type={type}
            className="outline-none text-neutral-400 text-[25px] font-medium"
            placeholder={placeholder}
            required={required}
          />
        </div>
      </div>
    </label>
  );
}

export default CustomInput;
