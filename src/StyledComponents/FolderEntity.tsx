import styled from "styled-components";

const FolderEntity = styled.button`
  width: 100px;
  padding: 20px;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  background-color: inherit;
  color: white;
  transition: background-color 0.33s ease;

  :hover,
  :focus {
    background-color: rgba(232, 234, 237, 0.04);
    outline: none;
  }
`;

export default FolderEntity;
