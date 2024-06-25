import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";

function Work() {
  return (
    <>
      <WorkExperience />
      <section className="flex flex-col gap-24 mt-40">
        <h4 className="text-[30.84px] font-semibold">My Projects</h4>
        <Projects />
      </section>
    </>
  );
}

export default Work;
