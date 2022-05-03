import FolderEntity from "../../StyledComponents/FolderEntity";
import truncateString from "../../Utils/truncateString";
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
      <p>{truncateString(name)}</p>
    </FolderEntity>
  );
};

export default File;
