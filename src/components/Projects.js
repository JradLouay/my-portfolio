import { projects } from "@/constants";
import Project from "./projectItem/Project";

function Projects() {
  return (
    <section className="grid gap-x-16 gap-20 md:grid-cols-12 mb-52">
      {projects.map(function (project, index) {
        return <Project key={index} project={project} odd={index % 2} />;
      })}
    </section>
  );
}

export default Projects;
