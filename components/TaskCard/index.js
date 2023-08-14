import { useState } from "react";

import { Tasks, Task, TaskListItem } from "./TaskCard.styled";

export const TaskCard = ({ project, index }) => {
  const [visible, setVisible] = useState(false);
  const projectClickHandler = () => {
    setVisible(!visible);
  };
  return (
    <TaskListItem onClick={projectClickHandler}>
      <b>
        {`P${index + 1}: `}
        {project.projectTitle}
      </b>
      {visible && (
        <Tasks>
          {project.tasks.map((task, index) => (
            <Task key={index}>{task}</Task>
          ))}
        </Tasks>
      )}
    </TaskListItem>
  );
};
