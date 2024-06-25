import CustomInput from "@/components/CustomInput";

function Contact() {
  async function sendEmail(formData) {
    "use server";
    const message = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log(message);
  }
  return (
    <>
      <div className="mt-32 text-black text-[37.88px] font-medium">
        Say hello!
      </div>
      <section className="mt-32 mb-72 grid grid-cols-2">
        {" "}
        <form className="flex flex-col gap-16" action={sendEmail}>
          <CustomInput
            label="Name"
            title="name"
            placeholder={"John Doe"}
            required={true}
            type="text"
          />
          <CustomInput
            label="Email"
            title="email"
            placeholder={"email@example.com"}
            required={true}
            type="email"
          />
          <CustomInput
            label="Message"
            title="message"
            placeholder={"Type your message here"}
            required={true}
            type="text"
          />
          <button
            type="submit"
            className="text-white text-xl w-fit font-semibold px-[53px] py-[25px] bg-violet-400 rounded-lg border border-black justify-center items-center flex"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
