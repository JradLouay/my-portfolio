import { workExperience } from "@/constants";
import DownloadCV from "./DownloadCV";
import WorkExperienceItem from "./WorkExperienceItem";
// origin-top-right -rotate-90
function WorkExperience() {
  return (
    <section className="mt-32 flex flex-col items-end gap-8 text-end">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-sm bg-slate-700" />
        <h4 className="heading-m font-bold text-gray-700">
          Professional Experience
        </h4>
      </div>
      {workExperience.map((item) => (
        <WorkExperienceItem key={item.company} {...item} />
      ))}

      <DownloadCV />
    </section>
  );
}

export default WorkExperience;
