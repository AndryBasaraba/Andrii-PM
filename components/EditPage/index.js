import { useRouter } from "next/router";
import { Header, Title } from "./EditPage.styled";
import { useEffect, useState } from "react";
import { EditForm } from "../EditForm";
import { NavigationBtn } from "../EditForm/EditForm.styled";

export const EditPage = () => {
  const [filteredProject, setFilteredProject] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const storedProjects = localStorage.getItem("projectsData");
    if (storedProjects) {
      const parsedProjects = JSON.parse(storedProjects);

      const foundProject = parsedProjects.find((project) => project.id === id);
      setFilteredProject(foundProject);
    }
  }, [id]);

  console.log(id);
  console.log(filteredProject);

  return (
    <>
      <Header>
        <Title>Make changes</Title>
        <NavigationBtn onClick={() => router.push("/")}>Home</NavigationBtn>
      </Header>
      {filteredProject ? <EditForm filteredProject={filteredProject} /> : null}
    </>
  );
};

