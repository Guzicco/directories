import { IPath } from "../../types";
import FolderEntity from "../../StyledComponents/FolderEntity";
const FolderIcon = require("./Folder.png");

interface IProps extends IPath {
  onClick: (path: IPath) => void;
}

const Folder: React.FC<IProps> = ({ name, id, onClick }) => {
  return (
    <FolderEntity onClick={() => onClick({ name, id })}>
      <img src={FolderIcon} alt="Folder" />
      <p>{name}</p>
    </FolderEntity>
  );
};

export default Folder;
