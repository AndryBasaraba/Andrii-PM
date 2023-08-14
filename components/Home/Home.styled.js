import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px 0 40px;
  background-color: #000000;
  border-bottom: 1px solid gray;
`;

export const Title = styled.h1`
  text-shadow: 3px 3px 3px #9370db, -1px 1px 1px #9370db;
  color: white;
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
  line-height: 2;
`;
