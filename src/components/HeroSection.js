import ContactsComponent from "./ContactsComponent";

function HeroSection() {
  return (
    <section className="mt-28 px-6 md:px-14 pt-1 pb-14 mb-52">
      <div className="flex-col mb-28 justify-center items-start gap-5 flex max-w-[32rem]">
        <h2 className="">
          Hey, I’m Louay jrad, a Frontend Developer with 4 years of experience.
        </h2>
        <p className="">
          I care a lot about using design for positive impact, and
          <br />
          enjoy creating user-centric, delightful, and human
          <br />
          experiences.ferfer
        </p>
      </div>
      <ContactsComponent />
    </section>
  );
}

export default HeroSection;
