import { projects } from "@/constants";
import Project from "./projectItem/Project";
import Button from "./Button";

function Projects({ showAll }) {
  return (
    <section id="projects" className="mt-40 flex flex-col gap-24">
      <h4 className="heading-xl text-gray-700">My Projects</h4>
      <div className="projects-grid mb-52 grid gap-20 gap-x-16">
        {projects
          .filter((_, index) => (!showAll ? index < 4 : true))
          .map((project, index) => {
            return <Project key={index} index={index} project={project} />;
          })}
        {!showAll && (
          <div className="flex justify-center lg:!col-span-12">
            {" "}
            <Button
              text="See all Projects"
              navigation
              href="/work#projects"
            />{" "}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
