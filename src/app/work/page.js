import Projects from "@/components/Projects";

function Work() {
  return (
    <>
      <section className="mt-32 flex flex-col gap-8">
        <h3 className="text-black text-[32px] font-semibold">
          Deloitte - Frontend Engineer
        </h3>
        <h3 className="text-black text-[32px] font-semibold">
          Save Your Wardrobe - Frontend Engineer
        </h3>
        <h3 className="text-black text-[32px] font-semibold">
          Umanlink Group - Frontend Engineer
        </h3>
      </section>
      <section className="flex flex-col gap-24 mt-40">
        <h4 className="text-[30.84px] font-semibold">My Projects</h4>
        <Projects />
      </section>
    </>
  );
}

export default Work;
