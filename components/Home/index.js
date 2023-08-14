import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TaskCard } from "@/components/TaskCard";

import { Header, Title, NewProjectBtn, ProjectsList } from "./Home.styled";

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
      <Header>
        <Title>Andrii PM</Title>
        <NewProjectBtn
          onClick={() => {
            router.push("/new");
          }}
        >
          +
        </NewProjectBtn>
      </Header>
      <ProjectsList>
        {projects.map((project, index) => (
          <TaskCard key={project.id} project={project} index={index} />
        ))}
      </ProjectsList>
    </>
  );
};
