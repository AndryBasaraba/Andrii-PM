import styles from "./Form.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    size: "",
    dueBy: "",
    tasks: "",
  });

  const [projectsData, setProjectsData] = useState([]);
  const [errors, setErrors] = useState({});

  const router = useRouter();

  useEffect(() => {
    const storedProjects = localStorage.getItem("projectsData");
    if (storedProjects) {
      setProjectsData(JSON.parse(storedProjects));
    }
  }, []);

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
      newErrors.dueBy = "Due by must be a valid future date";
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
      const newProject = {
        id: uuidv4(),
        projectTitle: formData.title,
        projectSize: formData.size,
        projectDue: formData.dueBy,
        tasks: formData.tasks.split(",").map((task) => task.trim()),
      };

      localStorage.setItem(
        "projectsData",
        JSON.stringify([...projectsData, newProject])
      );

      setProjectsData([...projectsData, newProject]);

      setFormData({
        title: "",
        size: "",
        dueBy: "",
        tasks: "",
      });

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

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Add new Project</h1>
        <button
          className={styles["navigate-btn"]}
          onClick={() => router.push("/")}
        >
          Home
        </button>
      </header>
      <form className={styles.form}>
        <label>
          Title
          <input
            className={styles.input}
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && <span className={styles.error}>{errors.title}</span>}
        </label>
        <label>
          Size
          <select
            className={styles.select}
            name="size"
            value={formData.size}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Size
            </option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
            <option value="xl">Extra Large</option>
          </select>
          {errors.size && <span className={styles.error}>{errors.size}</span>}
        </label>
        <label>
          Due by
          <input
            className={styles.input}
            type="date"
            name="dueBy"
            value={formData.dueBy}
            onChange={handleInputChange}
          />
          {errors.dueBy && <span className={styles.error}>{errors.dueBy}</span>}
        </label>
        <label>
          Tasks
          <textarea
            className={styles.inputarea}
            type="text"
            name="tasks"
            value={formData.tasks}
            onChange={handleInputChange}
          />
          {errors.tasks && <span className={styles.error}>{errors.tasks}</span>}
        </label>
        <button
          type="submit"
          className={styles.submit}
          onClick={formSubmitHandler}
        >
          Submit
        </button>
      </form>
    </>
  );
};
