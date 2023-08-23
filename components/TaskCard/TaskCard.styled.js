import styled from "styled-components";

export const Tasks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #e6e6fa;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const Task = styled.li``;

export const TaskListItem = styled.li`
  border: solid 2px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 12px;
  border-color: #9370db;
  box-shadow: 7px 10px 30px 5px rgba(0, 0, 0, 0.75);
  transition: all 300ms;
  &:hover {
    box-shadow: 7px 10px 30px 5px rgba(0, 0, 0, 0.9);
  }
`;

export const Labels = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: flex-start;
`;

export const Label = styled.li`
  background: #dcdcdc;
  color: black;
  padding: 3px;
  border-radius: 12px;
  font-size: 12px;
  border: 5px;
  border-color: #a9a9a9;
  font-weight: serif;
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: white;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  transition: all 300ms;

  &:checked {
    background-color: #9370db;
    border-color: #9370db;
  }

  &:checked::before {
    content: "\u2713";
    font-size: 14px;
    position: absolute;
    left: 4px;
    color: white;
  }
`;

export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  color: #ccc;
  transition: all 300ms;
  &:hover {
    cursor: pointer;
    color: #9370db;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CrossedText = styled.b`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "gray" : "inherit")};
  cursor: pointer;
  transition: all 300ms;
`;
