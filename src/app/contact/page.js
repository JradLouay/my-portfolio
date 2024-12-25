import CustomInput from "@/components/custom-input";
import CustomTextArea from "@/components/custom-text-area";
import SubmitButton from "@/components/submit-button";
import supabase from "@/utils/supabaseClient";

function Contact() {
  async function sendEmail(formData) {
    "use server";
    const message = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    const { data, error } = await supabase
      .from("messages")
      .insert([
        { Name: message.name, email: message.email, message: message.message },
      ])
      .select();
    if (error) {
      console.log(error);
    }
  }
  return (
    <section className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-2">
      <h1 className="text-[14vw] font-medium leading-[1em] text-gray-700">
        Hello.
      </h1>
      <form
        className="mb-72 flex flex-col items-stretch gap-8"
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
          placeholder={"Say hello!"}
          required={true}
          type="text"
        />
        <SubmitButton />
      </form>
    </section>
  );
}

export default Contact;
