import { IDir } from "../App";
import FolderEntity from "./Styles/FolderEntity";

const Folder: React.FC<IDir> = ({ name }) => {
  return (
    <FolderEntity>
      <img src={require("../assets/icons/FolderIcon.png")} alt="Folder" />
      <p>{name}</p>
    </FolderEntity>
  );
};

export default Folder;
