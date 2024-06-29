import { projects } from "@/constants";
import Project from "./projectItem/Project";

function Projects() {
  return (
    <section className="mt-40 flex flex-col gap-24">
      <h4 className="heading-xl text-gray-700">My Projects</h4>
      <div className="projects-grid mb-52 grid gap-20 gap-x-16">
        {projects.map(function (project, index) {
          return <Project key={index} index={index} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
