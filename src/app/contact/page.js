import CustomInput from "@/components/CustomInput";

function Contact() {
  return (
    <>
      <div className="mt-32 text-black text-[37.88px] font-medium">
        Say hello!
      </div>
      <section className="mt-32 mb-72 grid grid-cols-2">
        {" "}
        <div className="flex flex-col gap-16">
          <CustomInput />
          <CustomInput />
          <CustomInput />
          <button className="text-white text-xl w-fit font-semibold px-[53px] py-[25px] bg-violet-400 rounded-lg border border-black justify-center items-center flex">
            Submit
          </button>
        </div>
      </section>
    </>
  );
}

export default Contact;
