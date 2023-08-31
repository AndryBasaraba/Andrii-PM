import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Error,
  Input,
  Inputarea,
  Option,
  ProjectForm,
  Select,
  SubmitButton,
  ButtonsWrapper,
} from "./EditForm.styled";

export const EditForm = ({ filteredProject }) => {
  const [formData, setFormData] = useState({
    title: "",
    size: "",
    dueBy: "",
    tasks: "",
  });

  const [projectsData, setProjectsData] = useState([filteredProject]);
  const [errors, setErrors] = useState({});

  const router = useRouter();

  useEffect(() => {
    const storedProjects = localStorage.getItem("projectsData");
    if (storedProjects) {
      setProjectsData(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    if (filteredProject) {
      setFormData({
        title: filteredProject.projectTitle,
        size: filteredProject.projectSize,
        dueBy: filteredProject.projectDue,
        tasks: filteredProject.tasks.join(", "),
      });
    }
  }, [filteredProject]);

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Title validation
    if (!formData.title || formData.title.length > 20) {
      newErrors.title = "Title is required and must be at most 20 characters";
      isValid = false;
    }

    // Size validation
    const validSizes = ["s", "m", "l", "xl"];
    if (!validSizes.includes(formData.size.toLowerCase())) {
      newErrors.size = "Size must be one of s, m, l, or xl";
      isValid = false;
    }

    // Due by validation
    const dueDate = new Date(formData.dueBy);
    if (isNaN(dueDate) || dueDate < new Date()) {
      newErrors.dueBy = "Pick a valid future date";
      isValid = false;
    }

    // Tasks validation
    if (!formData.tasks) {
      newErrors.tasks = "Tasks are required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const editedProject = {
        id: filteredProject.id,
        projectTitle: formData.title,
        projectSize: formData.size,
        projectDue: formData.dueBy,
        tasks: formData.tasks.split(",").map((task) => task.trim()),
        status: false,
      };

      const updatedProjects = projectsData.map((project) =>
        project.id === editedProject.id ? editedProject : project
      );

      localStorage.setItem("projectsData", JSON.stringify(updatedProjects));
      setProjectsData(updatedProjects);

      router.push("/");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDelete = () => {
    const updatedProjects = projectsData.filter(
      (project) => project.id !== filteredProject.id
    );

    localStorage.setItem("projectsData", JSON.stringify(updatedProjects));
    setProjectsData(updatedProjects);

    router.push("/");
  };

  return (
    <>
      <ProjectForm onSubmit={formSubmitHandler}>
        <label>
          Title
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          ></Input>
          {errors.title && <Error>{errors.title}</Error>}
        </label>
        <label>
          Size
          <Select
            name="size"
            value={formData.size}
            onChange={handleInputChange}
          >
            <Option>Select Size</Option>
            <Option value="s">Small</Option>
            <Option value="m">Medium</Option>
            <Option value="l">Large</Option>
            <Option value="xl">Extra Large</Option>
          </Select>
          {errors.size && <Error>{errors.size}</Error>}
        </label>
        <label>
          Due by
          <Input
            type="date"
            name="dueBy"
            value={formData.dueBy}
            onChange={handleInputChange}
          ></Input>
          {errors.dueBy && <Error>{errors.dueBy}</Error>}
        </label>
        <label>
          Tasks
          <Inputarea
            type="text"
            name="tasks"
            value={formData.tasks}
            onChange={handleInputChange}
          />
          {errors.tasks && <Error>{errors.tasks}</Error>}
        </label>
        <ButtonsWrapper>
          <SubmitButton type="submit">Save</SubmitButton>
          <SubmitButton type="button" onClick={handleDelete}>
            Delete
          </SubmitButton>
        </ButtonsWrapper>
      </ProjectForm>
    </>
  );
};
