import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10px;
  background-color: #000000;
  border-bottom: 1px solid gray;
`;

export const Title = styled.h1`
  text-shadow: 3px 3px 3px #9370db, -1px 1px 1px #9370db;
  color: white;
  font-size: 40px;
  margin: 0;
`;

export const NewProjectBtn = styled.button`
  border: 0;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  &:hover {
    transform: translateY(5%);
  }
  background-color: white;
  text-shadow: 1px 1px 1px #9370db, 1px 1px 1px #9370db;
`;

export const ProjectsList = styled.ul`
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  line-height: 2;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
