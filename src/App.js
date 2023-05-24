import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componants/header";
import Sidebar from "./componants/sideBar";
import Home from "./pages/Home";
import ContentContainer from "./componants/contantContainar";
import ShowStudents from "./pages/showStudnet";
import ShowCourses from "./pages/showCourse";
import CreateCourses from "./pages/createCourses";
import CreateStudent from "./pages/createStudent";
import EditCourse from "./pages/editCourse";
import EditStudent from "./pages/editStudent";
import StudentCourses from "./pages/ShowStudentCourses";
import SearchStudent from "./pages/searchStudent";
import { useState } from "react";
function App() {
  let [clickedNav, setClickedNv] = useState("Home");

  return (
    <div className="wrapper">
      <Router>
        <Header clickedNav={clickedNav} />
        <Sidebar clickedNav={clickedNav} setClickedNv={setClickedNv} />
        <ContentContainer>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/showStudents"} element={<ShowStudents />} />
            <Route path={"/showCourses"} element={<ShowCourses />} />
            <Route path={"/addCourse"} element={<CreateCourses />} />
            <Route path={"/addStudent"} element={<CreateStudent />} />
            <Route path={"/editCourse"} element={<EditCourse />} />
            <Route path={"/editStudent"} element={<EditStudent />} />
            <Route path={"/studentCourses"} element={<StudentCourses />} />
            <Route path={"/searchStudent"} element={<SearchStudent />} />
          </Routes>
        </ContentContainer>
      </Router>
    </div>
  );
}

export default App;
