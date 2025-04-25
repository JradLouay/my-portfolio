import ContactsComponent from "./contacts";
import CustomLink from "./link";

function HeroSection() {
  return (
    <header className="mb-52 mt-36 pb-14">
      <div className="flex flex-col items-start justify-center gap-5 text-gray-700">
        <h2 className="heading-2xl">Hi. I&apos;m Louay.</h2>
        <p className="body max-w-[500px]">
          Frontend Engineer with 4+ years of experience building web apps across diverse industries.
          Proficient in React and modern JavaScript ecosystems, with a strong focus on performance optimization,
          component reusability, and user-centered development.
        </p>
        <div className="mt-4 flex items-center gap-6">
          <CustomLink href="/contact">Contact me</CustomLink>
          <ContactsComponent />
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
