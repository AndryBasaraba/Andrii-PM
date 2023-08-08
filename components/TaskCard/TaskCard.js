import { use, useState } from "react";

export const TaskCard = ({ project, index }) => {
  const [visible, setVisible] = useState(false);
  const projectClickHandler = () => {
    setVisible(!visible);
  };
  return (
    <li onClick={projectClickHandler}>
      {`P${index + 1}: `}
      {project.projectTitle}
      {visible && (
        <ul>
          {project.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </li>
  );
};
