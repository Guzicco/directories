import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { API_LINK } from "./Globals";
import styled from "styled-components";
import LoaderSpinner from "./Components/Loaders/LoaderSpinner";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentDir, setCurrentDir] = useState<IDir | undefined>(undefined);

  interface IDir {
    name: string;
    id: string;
    files?: [{ name: string }];
    directories?: IDir[];
  }

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
    align-items: center;
    justify-content: center;
  `;

  const Navigation = styled.nav`
    position: sticky;
    height: 100px;
    background-color: rgb(30, 30, 30);
  `;

  return (
    <div className="App">
      <Navigation>
        <h2>Path:</h2>
        <nav>{currentDir?.name}</nav>
      </Navigation>
      <Content>
        {currentDir?.directories?.map((dir) => (
          <p>{dir.name}</p>
        ))}
      </Content>
      {loading && <LoaderSpinner />}
    </div>
  );
}

export default App;
