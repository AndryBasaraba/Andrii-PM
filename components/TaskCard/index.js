import { useEffect, useState } from "react";

import {
  Tasks,
  Task,
  TaskListItem,
  Label,
  Labels,
  Checkbox,
  Wrapper,
  CrossedText,
} from "./TaskCard.styled";

export const TaskCard = ({ project, index }) => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const { projectTitle, tasks, projectDue, projectSize, id } = project;

  useEffect(() => {
    setChecked(project.status);
  }, [project.status]);

  const projectClickHandler = () => {
    setVisible(!visible);
  };

  const onChangeCheckboxHandler = () => {
    const newChecked = !checked;
    setChecked(newChecked);

    const updatedProjects = JSON.parse(
      localStorage.getItem("projectsData")
    ).map((p) => {
      if (p.id === id) {
        return { ...p, status: newChecked };
      }
      return p;
    });

    localStorage.setItem("projectsData", JSON.stringify(updatedProjects));
  };

  return (
    <TaskListItem>
      <Wrapper>
        <CrossedText onClick={projectClickHandler} checked={checked}>
          {`P${index + 1}: `}
          {projectTitle}
        </CrossedText>
        <label>
          <Checkbox
            type="checkbox"
            id={`checkbox-${id}`}
            checked={checked}
            onChange={onChangeCheckboxHandler}
          />
        </label>
      </Wrapper>
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
