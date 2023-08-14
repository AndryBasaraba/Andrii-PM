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
