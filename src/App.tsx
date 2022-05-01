import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { API_LINK } from "./Globals";
import styled from "styled-components";
import LoaderSpinner from "./Components/Loaders/LoaderSpinner";
import Folder from "./Components/Folder";
import File from "./Components/File";

const Content = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin: 50px;
`;

const Navigation = styled.nav`
  position: sticky;
  padding: 30px;
  height: 100px;
  background-color: rgb(30, 30, 30);
`;

export interface IPath {
  name: string;
  id: string;
}

export interface IDir extends IPath {
  files?: { name: string }[];
  directories?: IDir[];
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [directoryData, setDirectoryData] = useState<IDir>({
    name: "",
    id: "",
  });
  const [directoryPath, setDirectoryPath] = useState<IPath[]>([]);

  useEffect(() => {
    fetchDirData();
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
      <Navigation>
        {directoryPath.map((path, index) => (
          <button
            onClick={() => {
              handleNavigationClick(index);
            }}
          >
            {path.name}/
          </button>
        ))}
      </Navigation>
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
