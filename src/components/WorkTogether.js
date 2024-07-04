import LinkHoverEffect from "./LinkHoverEffect";

function WorkTogether() {
  return (
    <section className="mb-[366px] rounded-[20px] bg-white px-6 py-10 shadow-custom-black md:px-12 lg:px-28">
      <div className="flex flex-col gap-6">
        {" "}
        <div className="flex flex-col justify-start gap-[5px]">
          <h4 className="heading-l text-gray-700">Want to work together?</h4>
          <p className="heading-m max-w-[746px] !font-normal text-gray-700">
            Feel free to reach out for collaborations.
          </p>
        </div>
        <LinkHoverEffect href={"mailto:jrad.louay@gmail.com"}>
          jrad.louay@gmail.com
        </LinkHoverEffect>
      </div>
    </section>
  );
}

export default WorkTogether;
