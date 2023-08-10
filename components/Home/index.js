import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TaskCard } from "@/components/TaskCard";

export const Home = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projectsData");
    if (storedProjects) {
      console.log(localStorage.getItem);
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  return (
    <>
      <header>
        <h1>Anrii PM</h1>
        <button
          onClick={() => {
            router.push("/new");
          }}
        >
          +
        </button>
      </header>
      <ul>
        {projects.map((project, index) => (
          <TaskCard key={project.id} project={project} index={index} />
        ))}
      </ul>
    </>
  );
};
