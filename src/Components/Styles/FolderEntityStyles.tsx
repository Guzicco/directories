import styled from "styled-components";

const FolderEntityStyles = styled.div`
  width: 100px;
  padding: 20px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.33s ease;

  :hover {
    background-color: rgba(200, 200, 200, 0.5);
  }
`;

export default FolderEntityStyles;
