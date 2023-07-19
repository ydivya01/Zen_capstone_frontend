import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Batches from "./Pages/Batches/Bactches";
import Home from "./Pages/Home/Home";
import Interview from "./Pages/Interview/Interview";
import Syllabus from "./Pages/Syllabus/Syllabus";
import Leave from "./Pages/Leave/Leave";

import Web from './Pages/Project/Web'
import Cap from './Pages/Project/Cap'
import Task from "./Pages/Tasks/Task";





function App() {
  const token = window.localStorage.getItem("app-token");

  return (
    <div className="App mx-5">
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/batchCreate" element={<Batches />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/leave" element={<Leave />} />
          
             <Route path="/web" element={<Web />} />
             <Route path="/cap" element={<Cap />} />
             <Route path="/task" element={<Task />} />



          </>
        ) : (
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;