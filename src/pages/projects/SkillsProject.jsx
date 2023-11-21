import React from "react";

const SkillsProject = ({ tech }) => {
  return (
    <div className=" bg-my-yellow flex p-1 w-fit items-center rounded-xl mr-2 border-2 justify-self-center">
      <div>
        <img className="w-5 mr-2" src={tech.url} alt={tech.alt} />
      </div>
      <div>
        <span>{tech.name}</span>
      </div>
    </div>
  );
};

export default SkillsProject;
