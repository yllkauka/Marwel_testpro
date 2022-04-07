import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import axios from 'axios'
// import dotenv from "dotenv";
// dotenv.config();
import "./App.css";
import { Home } from "./pages/Home";
import { Question1 } from "./pages/Question-1";
import { Question2 } from "./pages/Question-2";
import { Result } from "./pages/Result";

const history = createBrowserHistory();
export const MyContext = React.createContext();

function App() {
  
  // const [data, setData] = useState("dsadasd")
  const [apiData, setApiData] = useState(null)
  let [name, setName] = useState("");
  let [likeType, setLikeType] = useState("");


  return (
    <BrowserRouter {...{ history }}>
      <MyContext.Provider value={{ apiData, name, setName, likeType, setLikeType, setApiData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="question-1" element={<Question1 />} />
          <Route path="question-2" element={<Question2 />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
