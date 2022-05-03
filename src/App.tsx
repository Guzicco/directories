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
  });
  const [directoryPath, setDirectoryPath] = useState<IPath[]>([]);

  useEffect(() => {
    fetchDirData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // FUNCTIONS
  const fetchDirData = async (id = "") => {
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
  const handleFolderClick: (path: IPath) => void = ({ name, id }) => {
    setDirectoryPath([...directoryPath, { name, id }]);
    fetchDirData(id);
  };
  const handleNavigationClick: any = (pathIndex: number) => {
    fetchDirData(directoryPath[pathIndex].id);
    setDirectoryPath(directoryPath.slice(0, pathIndex + 1));
  };

  return (
    <div className="App">
      {loading && <LoaderSpinner />}
      <Navigation
        directoryPath={directoryPath}
        onClick={handleNavigationClick}
      />
      <Content>
        {directoryData.directories?.map((dir) => (
          <Folder
            name={dir.name}
            id={dir.id}
            key={dir.id}
            onClick={handleFolderClick}
          />
        ))}
        {directoryData.files?.map((file) => (
          <File name={file.name} key={file.name} />
        ))}
      </Content>
    </div>
  );
}

export default App;
