import FolderEntity from "./Styles/FolderEntity";

interface IProps {
  name: string;
}

const File: React.FC<IProps> = ({ name }) => {
  return (
    <FolderEntity>
      <img src={require("../assets/icons/FileIcon.png")} alt="File" />
      <p>{name.length >= 8 ? `${name.slice(0, 7)}..` : name}</p>
    </FolderEntity>
  );
};

export default File;
