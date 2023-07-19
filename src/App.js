import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";

import Stucapstone from "./Pages/Capstone/Stucapstone";
import Capstone from "./Pages/Capstone/Capstone";
import Batches from "./Pages/Batches/Bactches";
import Event from "./Pages/EventManage/Events";
import Home from "./Pages/Home/Home";
import Interview from "./Pages/Interview/Interview";
import Syllabus from "./Pages/Syllabus/Syllabus";
import Leave from "./Pages/Leave/Leave";

function App() {
  const token = window.localStorage.getItem("app-token");

  return (
    <div className="App mx-5">
      <Routes>
        {token ? (
          <>
            <Route path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/eventManage" element={<Event/> }/>
            <Route path="/batchCreate" element={<Batches />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/leave" element={<Leave />} />

          </>
        ) : (
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;