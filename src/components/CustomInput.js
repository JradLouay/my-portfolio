import React from "react";

function CustomInput({ label, id, placeholder }) {
  return (
    <label
      for="email"
      className="cursor-pointer pl-[15px] pr-[35px] pb-[23px] bg-white rounded-xl border border-black flex-col justify-center items-start inline-flex"
    >
      <div className="flex-col justify-center items-start gap-11 flex">
        <div className="flex-col justify-center items-start gap-2 flex">
          <div className="pl-2.5 py-2.5 justify-start items-center gap-2.5 inline-flex">
            <label
              for="email"
              className="text-black text-[40px] font-medium font-['Clash Display']"
            >
              Email address
            </label>
          </div>
        </div>
        <div className="pl-2.5 py-2.5 justify-start items-center gap-2.5 inline-flex">
          <input
            id="email"
            className="outline-none text-neutral-400 text-[25px] font-medium"
            placeholder="example@email.com"
          />
        </div>
      </div>
    </label>
  );
}

export default CustomInput;
