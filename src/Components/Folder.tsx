import { IPath, IDir } from "../App";
import FolderEntityStyles from "./Styles/FolderEntityStyles";

interface IProps extends IDir {
  onClick: (path: IPath) => void;
}

const Folder: React.FC<IProps> = ({ name, id, onClick }) => {
  return (
    <FolderEntityStyles onClick={() => onClick({ name, id })}>
      <img src={require("../assets/icons/FolderIcon.png")} alt="Folder" />
      <p>{name}</p>
    </FolderEntityStyles>
  );
};

export default Folder;
