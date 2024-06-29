import ContactsComponent from "./ContactsComponent";

function HeroSection() {
  return (
    <header className="mb-52 mt-28 pb-14 pt-1">
      <div className="mb-8 flex flex-col items-start justify-center gap-5 text-gray-700">
        <h2 className="heading-2xl">Hi. I&apos;m Louay.</h2>
        <p className="body">
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
