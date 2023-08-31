import styled from "styled-components";

export const ListItem = styled.li`
  background-color: crimson;
`;

export const StyledList = styled.ul`
  list-style-type: none;
`;

export const ProjectForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  max-width: 600px;

  margin: auto;
  padding: 20px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 700;
  }
`;

export const H1 = styled.h1`
  display: inline;
  margin: 0;
  text-shadow: 3px 3px 3px #9370db, -1px 1px 1px #9370db;
  color: white;

  font-size: 40px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 40px 10px;

  margin: auto;
  background: black;
  border-bottom: 1px solid gray;
`;

export const Select = styled.select`
  background: black;
  color: white;
`;
export const Option = styled.option`
  background: black;
  color: white;
`;
export const Input = styled.input`
  padding: 12px;

  border: 0;
  border-bottom: 2px solid black;
`;
export const SubmitButton = styled.button`
  background: black;
  color: white;

  padding: 12px;

  border: 0;
  border-radius: 8px;

  transition-duration: 300ms;

  width: 100%;

  &:hover,
  :focus {
    opacity: 75%;
  }
  text-shadow: 3px 3px 3px #9370db, -1px 1px 1px #9370db;
  color: white;
`;

export const NavigationBtn = styled.button`
  background: white;
  color: black;

  padding: 12px;

  border: 0;
  border-radius: 8px;

  flex-shrink: 0;

  transition-duration: 300ms;

  &:hover,
  :focus {
    opacity: 75%;
    color: #9370db;
  }
  border: 2px solid black;
  outline-style: outset;
  outline-color: #9370db;
`;

export const Error = styled.span`
  color: red;
`;

export const Inputarea = styled.textarea`
  padding: 12px;
  border: 0;
  border-bottom: 2px solid black;

  max-width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
