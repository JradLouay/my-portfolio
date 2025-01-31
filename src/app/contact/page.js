'use client'
import { useState } from "react";
import CustomInput from "@/components/custom-input";
import CustomTextArea from "@/components/custom-text-area";
import SubmitButton from "@/components/submit-button";
import { sendMessage } from "@/actions";
import { generateRecaptchaToken } from "@/utils/recaptcha";


function Contact() {
  const [loading, setLoading] = useState()
  const [success, setSuccess] = useState()
  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const formData = new FormData(form)
    const recaptchaToken = await generateRecaptchaToken()
    const { status } = await sendMessage(recaptchaToken, formData)
    setLoading(false)

  }

  return (
    <section className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-2">
      <h1 className=" text-[17vw] md:text-[16vw] 2xl:text-[12vw] font-medium leading-[1em] text-gray-700">
        Hello.
      </h1>
      <form
        className="mb-72 flex flex-col items-stretch gap-8"
        onSubmit={onSubmit}
      >
        <CustomInput
          label="Name"
          title="name"
          placeholder={"John Doe"}
          required={true}
          type="text" />
        <CustomInput
          label="Email"
          title="email"
          placeholder={"email@example.com"}
          required={true}
          type="email" />
        <CustomTextArea
          label="Message"
          title="message"
          placeholder={"Say hello!"}
          required={true}
          type="text" />
        <SubmitButton loading={loading} />
      </form>
    </section>
  );
}

export default Contact;
