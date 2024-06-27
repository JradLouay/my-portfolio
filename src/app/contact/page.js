import Button from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import CustomTextArea from "@/components/CustomTextArea";

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
    <section className="grid lg:grid-cols-2 gap-16 mt-16 lg:mt-24">
      <h1 className="text-gray-700 text-[14vw] leading-[1em] font-medium">
        Hello.
      </h1>
      <form
        className="flex mb-72 flex-col items-stretch gap-8"
        action={sendEmail}
      >
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
        <CustomTextArea
          label="Message"
          title="message"
          placeholder={"Type your message here"}
          required={true}
          type="text"
        />
        <Button type="submit" text={"SEND MESSAGE"} />
      </form>
    </section>
  );
}

export default Contact;
