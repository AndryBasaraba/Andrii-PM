import data from "@/data/tasks.json";
import { useState } from "react";
import { TaskCard } from "@/components/TaskCard";
export default function HomePage() {
  const { projects } = data;
  return (
    <div className="App">
      <h1>Anrii PM</h1>
      <ul>
        {projects.map((project, index) => (
          <TaskCard key={project.id} project={project} index={index} />
        ))}
      </ul>
    </div>
  );
}
