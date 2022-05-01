import { IPath, IDir } from "../App";
import FolderEntity from "./Styles/FolderEntity";

interface IProps extends IDir {
  onClick: (path: IPath) => void;
}

const Folder: React.FC<IProps> = ({ name, id, onClick }) => {
  return (
    <FolderEntity onClick={() => onClick({ name, id })}>
      <img src={require("../assets/icons/FolderIcon.png")} alt="Folder" />
      <p>{name}</p>
    </FolderEntity>
  );
};

export default Folder;
