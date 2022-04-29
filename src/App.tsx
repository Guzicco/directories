import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { API_LINK } from "./Globals";
import styled from "styled-components";

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

  const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div className="App">
      <Content>
        {currentDir?.directories?.map((dir) => (
          <p>{dir.name}</p>
        ))}
      </Content>
    </div>
  );
}

export default App;
