import React from "react";

function WorkExperienceItem({ jobTitle, company, period, skills }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 text-gray-700 xl:flex-row-reverse">
        <h3 className="heading-l font-semibold">
          {jobTitle}, {company}
        </h3>
        <p className="self-end font-semibold">{period}</p>
      </div>
      <div className="flex flex-row-reverse flex-wrap gap-1">
        {skills.map((skill) => (
          <div
            key={skill}
            className="body flex items-center justify-center rounded-3xl border-2 border-gray-700 px-4 py-1"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperienceItem;
