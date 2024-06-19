import Link from "next/link";
import Image from "next/image";

function ContactsComponent() {
  return (
    <div className="items-start md:items-center gap-6 flex flex-col md:flex-row">
      <button className="px-8 py-6 bg-black text-white text-xl font-medium rounded-[60px] justify-start items-center flex">
        Contact me
      </button>
      <div className="items-center gap-6 flex">
        {" "}
        <Link
          href={""}
          className="justify-center items-center p-4 flex rounded-full border border-black"
        >
          <img
            height={25}
            width={25}
            className="w-[24.93px] h-[24.93px]"
            src="https://via.placeholder.com/25x25"
            alt=""
          />
        </Link>
        <Link
          href={""}
          className="justify-center items-center p-4 flex rounded-full border border-black"
        >
          <img
            height={25}
            width={25}
            className="w-[24.93px] h-[24.93px]"
            src="https://via.placeholder.com/25x25"
            alt=""
          />
        </Link>
        <Link
          href={""}
          className="justify-center items-center p-4 flex rounded-full border border-black"
        >
          <img
            height={25}
            width={25}
            className="w-[24.93px] h-[24.93px]"
            src="https://via.placeholder.com/25x25"
            alt=""
          />
        </Link>
        <Link
          href={""}
          className="justify-center items-center p-4 flex rounded-full border border-black"
        >
          <img
            height={25}
            width={25}
            className="w-[24.93px] h-[24.93px]"
            src="https://via.placeholder.com/25x25"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default ContactsComponent;
