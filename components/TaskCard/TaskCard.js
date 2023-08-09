export const TaskCard = ({ project, index }) => {
  return (
    <li key={project.id}>
      {`P${index + 1}: `}
      {project.projectTitle}
    </li>
  );
};
