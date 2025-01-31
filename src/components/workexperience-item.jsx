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
      <div className=" flex body flex-row-reverse flex-wrap-reverse gap-1 [&>*]:rounded-3xl [&>*]:border-2 [&>*]:px-4 [&>*]:py-1">
        {skills.map((skill) => (
          <div className="text-gray-700 border-gray-700"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperienceItem;
