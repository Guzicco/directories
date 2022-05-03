import FolderEntity from "../../StyledComponents/FolderEntity";
const FileIcon = require("./File.png");
const ImgIcon = require("./Img.png");

interface IProps {
  name: string;
}

const File: React.FC<IProps> = ({ name }) => {
  return (
    <FolderEntity>
      {name.endsWith("jpg") ? (
        <img src={ImgIcon} alt="jpg" />
      ) : (
        <img src={FileIcon} alt="file" />
      )}
      <p>{name.split(".")[0].length >= 8 ? `${name.slice(0, 7)}...` : name}</p>
    </FolderEntity>
  );
};

export default File;
