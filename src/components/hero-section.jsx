import ContactsComponent from "./contacts";
import CustomLink from "./link";

function HeroSection() {
  return (
    <header className="mb-52 mt-36 pb-14">
      <div className="flex flex-col items-start justify-center gap-5 text-gray-700">
        <h2 className="heading-2xl">Hi. I&apos;m Louay.</h2>
        <p className="body">
          Software Engineer / Frontend
          <br />
        </p>
        <p className="max-w-[500px]">
          Self-motivated Frontend Engineer with 4 years of experience creating web applications
          for various industries.
          I enjoy building user-focused, efficient, and intuitive products that make a real difference.
        </p>
        <div className="mt-8 flex items-center gap-6">
          <CustomLink href="/contact">Contact me</CustomLink>
          <ContactsComponent />
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
