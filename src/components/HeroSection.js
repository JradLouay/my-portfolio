import ContactsComponent from "./ContactsComponent";

function HeroSection() {
  return (
    <header className="mt-28 px-0 md:px-14 pt-1 pb-14 mb-52">
      <div className="flex-col mb-8 justify-center items-start gap-5 flex">
        <h2 className="text-7xl">Hi. I&aposm Louay.</h2>
        <p className="leading-[1.9em]">
          Software Engineer / Frontend Developer
          <br />
          Currently working Full-time as a Frontend Developer at Deloitte.
        </p>
        {/* <p className="">
          I am deeply committed to leveraging technology to create a positive
          impact, and I find great joy in developing user-centric and delightful
          web applications.
        </p> */}
      </div>
      <ContactsComponent />
    </header>
  );
}

export default HeroSection;
