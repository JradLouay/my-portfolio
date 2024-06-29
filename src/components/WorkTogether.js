import Link from "next/link";
import ContactsComponent from "./ContactsComponent";
import LinkHoverEffect from "./LinkHoverEffect";
import CustomLink from "./Link";

function WorkTogether() {
  return (
    <section className="mb-[366px] flex flex-col gap-8 rounded-[20px] bg-white px-6 py-10 shadow-custom-black md:px-12 lg:px-28">
      <div className="flex flex-col justify-start gap-[5px]">
        <h4 className="text-[40.80px] font-medium text-gray-700">
          Want to work together?
        </h4>
        <p className="max-w-[746px] text-[25.69px] font-normal text-gray-700">
          Feel free to reach out for collaborations or just a friendly hello{" "}
          <br />
          <LinkHoverEffect href={"mailto:jrad.louay@gmail.com"}>
            jrad.louay@gmail.com
          </LinkHoverEffect>
        </p>
      </div>
      {/* <ContactsComponent /> */}
      <CustomLink href="/contact">Contact me</CustomLink>
    </section>
  );
}

export default WorkTogether;
