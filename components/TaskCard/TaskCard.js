import { useState } from "react";
export const TaskCard = ({ project, index }) => {
  return (
    <li key={project.id} onClick={() => setVisible((prev) => !prev)}>
      {`P${++index}: `}
      {project.projectTitle}
    </li>
  );
};
