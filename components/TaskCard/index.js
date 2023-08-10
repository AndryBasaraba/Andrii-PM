import { useState } from "react";
import styles from "./Card.module.css";

export const TaskCard = ({ project, index }) => {
  const [visible, setVisible] = useState(false);
  const projectClickHandler = () => {
    setVisible(!visible);
  };
  return (
    <li onClick={projectClickHandler} className={styles.card}>
      <b>
        {`P${index + 1}: `}
        {project.projectTitle}
      </b>
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
