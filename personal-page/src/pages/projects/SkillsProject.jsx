import React from "react";

const SkillsProject = ({ tech }) => {
  return (
    <div>
      <img src={tech.url} alt={tech.alt} />
      <span>{tech.name}</span>
    </div>
  );
};

export default SkillsProject;
