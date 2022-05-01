import { IDir } from "../App";
import FolderEntity from "./Styles/FolderEntity";

interface IProps extends IDir {
  onClick: (id: string) => void;
}

const Folder: React.FC<IProps> = ({ name, id, onClick }) => {
  return (
    <FolderEntity onClick={() => onClick(id)}>
      <img src={require("../assets/icons/FolderIcon.png")} alt="Folder" />
      <p>{name}</p>
    </FolderEntity>
  );
};

export default Folder;
