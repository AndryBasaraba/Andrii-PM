import { useState } from "react";

import { Tasks, Task, TaskListItem, Label, Labels } from "./TaskCard.styled";

export const TaskCard = ({ project, index }) => {
  const [visible, setVisible] = useState(false);
  const projectClickHandler = () => {
    setVisible(!visible);
  };
  console.log(project, index);
  const { projectTitle, tasks, projectDue, projectSize } = project;
  return (
    <TaskListItem onClick={projectClickHandler}>
      <b>
        {`P${index + 1}: `}
        {projectTitle}
      </b>
      {visible && (
        <Tasks>
          {tasks.map((task, index) => (
            <Task key={index}>{task}</Task>
          ))}
        </Tasks>
      )}
      <Labels>
        <Label>Deadline: {projectDue}</Label>
        <Label>Size: {projectSize}</Label>
      </Labels>
    </TaskListItem>
  );
};
