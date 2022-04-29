import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { API_LINK } from "./Globals";
import styled from "styled-components";
import LoaderSpinner from "./Components/Loaders/LoaderSpinner";
import Folder from "./Components/Folder";
import File from "./Components/File";

export interface IDir {
  name: string;
  id: string;
  files?: { name: string }[];
  directories?: IDir[];
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentDir, setCurrentDir] = useState<IDir | undefined>(undefined);

  const fetchDirData = async (id = "") => {
    setLoading(true);
    try {
      const dirData = await axios
        .get(API_LINK + id)
        .then((response) => response.data);
      setCurrentDir(dirData);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDirData();
  }, []);

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

  return (
    <div className="App">
      <Navigation>
        <nav>{currentDir?.name}</nav>
      </Navigation>
      <Content>
        {currentDir?.directories?.map((dir) => (
          <Folder name={dir.name} id={dir.id} key={dir.id} />
        ))}
        {currentDir?.files?.map((file) => (
          <File name={file.name} key={file.name} />
        ))}
      </Content>
      {loading && <LoaderSpinner />}
    </div>
  );
}

export default App;
