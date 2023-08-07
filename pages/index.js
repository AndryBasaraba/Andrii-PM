import data from "@/data/tasks.json";
import { useState } from "react";
import { TaskCard } from "@/components/TaskCard";
export default function HomePage() {
  const [visible, setVisible] = useState(true);
  console.log(data);
  //диструктуризация
  const { projects } = data;
  return (
    <div className="App">
      <header>
        <button>+</button>
        <a href="/new">Link</a>
      </header>
      <h1>Anrii PM</h1>
      <ul>
        {projects.map((project, index) => (
          <TaskCard key={project.id} project={project} index={index} />
          // <li key={project.id} onClick={() => setVisible((prev) => !prev)}>
          //   {`P${++index}: `}
          //   {project.projectTitle}
          //   {visible && (
          //     <ul>
          //       {project.tasks.map((task, index) => (
          //         <li key={index}>{task}</li>
          //       ))}
          //     </ul>
          //   )}
          // </li>
        ))}
      </ul>
    </div>
  );
}
