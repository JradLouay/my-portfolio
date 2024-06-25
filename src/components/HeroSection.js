import ContactsComponent from "./ContactsComponent";

function HeroSection() {
  return (
    <header className="mt-28 px-0 md:px-14 pt-1 pb-14 mb-52">
      <div className="flex-col mb-28 justify-center items-start gap-5 flex max-w-[32rem]">
        <h2 className="">
          Hey, I’m Louay jrad, a Frontend Developer with 4 years of experience.
        </h2>
        <p className="">
          I am deeply committed to leveraging technology to create a positive
          impact, and I find great joy in developing user-centric, delightful
          web applications.
        </p>
      </div>
      <ContactsComponent />
    </header>
  );
}

export default HeroSection;
