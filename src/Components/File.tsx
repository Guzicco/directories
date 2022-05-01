import FolderEntityStyles from "./Styles/FolderEntityStyles";

interface IProps {
  name: string;
}

const File: React.FC<IProps> = ({ name }) => {
  return (
    <FolderEntityStyles>
      {name.endsWith("jpg") ? (
        <img src={require("../assets/icons/ImgIcon.png")} alt="jpg" />
      ) : (
        <img src={require("../assets/icons/FileIcon.png")} alt="file" />
      )}
      <p>{name.split(".")[0].length >= 8 ? `${name.slice(0, 7)}...` : name}</p>
    </FolderEntityStyles>
  );
};

export default File;
