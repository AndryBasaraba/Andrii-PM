import { useEffect, useState } from "react";

import { Tasks, Task, TaskListItem, Label, Labels } from "./TaskCard.styled";

export const TaskCard = ({ project, index }) => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projectsData");
    if (storedProjects) {
      setProjectsData(JSON.parse(storedProjects));
    } else {
      setProjectsData([]);
    }
  }, []);

  console.log(project, index);
  const { projectTitle, tasks, projectDue, projectSize, status, id } = project;

  useEffect(() => {
    setChecked(status);
  }, [status]);

  const projectClickHandler = () => {
    setVisible(!visible);
  };

  const onChangeCheckboxHandler = async () => {
    const newChecked = !checked;
    setChecked(newChecked);

    const updatedProjectsData = projectsData.map((p) =>
      p.id === id ? { ...p, status: newChecked } : p
    );

    setProjectsData(updatedProjectsData);
    localStorage.setItem("projectsData", JSON.stringify(updatedProjectsData));
  };

  return (
    <TaskListItem>
      <b onClick={projectClickHandler}>
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
      <label>
        <input
          type="checkbox"
          id="scales"
          name="scales"
          checked={checked}
          onChange={onChangeCheckboxHandler}
        />
      </label>
    </TaskListItem>
  );
};
