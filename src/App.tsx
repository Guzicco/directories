import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_LINK } from "./Globals";
import LoaderSpinner from "./Components/LoaderSpinner";
import File from "./Components/File/File";
import { IDir, IPath } from "./types";
import Folder from "./Components/Folder/Folder";
import Content from "./StyledComponents/Content";
import Navigation from "./Components/Navigation";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [directoryData, setDirectoryData] = useState<IDir>({
    name: "",
    id: "",
    directories: [],
    files: [],
  });
  const [directoryPath, setDirectoryPath] = useState<IPath[]>([]);

  useEffect(() => {
    fetchDirectoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // FUNCTIONS
  const fetchDirectoryData = async (id = "") => {
    setLoading(true);
    try {
      const dirData = await axios
        .get<IDir>(API_LINK + id)
        .then((response) => response.data);
      setDirectoryData(dirData);
      if (directoryPath.length === 0) {
        setDirectoryPath([{ name: dirData.name, id }]);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // HANDLERS
  const handleFolderClick: (path: IPath) => void = (path) => {
    setDirectoryPath([...directoryPath, path]);
    fetchDirectoryData(path.id);
  };
  const handleNavigationClick: (pathIndex: number) => void = (pathIndex) => {
    setDirectoryPath(directoryPath.slice(0, pathIndex + 1));
    fetchDirectoryData(directoryPath[pathIndex].id);
  };

  return (
    <div className="App">
      {loading && <LoaderSpinner />}
      <Navigation
        directoryPath={directoryPath}
        onClick={handleNavigationClick}
      />
      <Content>
        {directoryData.directories.map((dir) => (
          <Folder
            name={dir.name}
            id={dir.id}
            key={dir.id}
            onClick={handleFolderClick}
          />
        ))}
        {directoryData.files.map((file) => (
          <File name={file.name} key={file.name} />
        ))}
      </Content>
    </div>
  );
}

export default App;
