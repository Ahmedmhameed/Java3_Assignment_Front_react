import React from "react";
import SingleNavItem from "./singleNavItem";
import MenuNaveItem from "./menuNaveItem";
import SingleMenuNaveItem from "./singlemenuNaveItem";

export default function Sidebar({ clickedNav, setClickedNv }) {
  return (
    <div className="sidebar sidebar-style-2">
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-primary">
            <SingleNavItem
              text="Home"
              url="/"
              icon="fa-home"
              isClicked={clickedNav === "Home" ? true : false}
              setClicked={setClickedNv}
            />
            <MenuNaveItem
              text="Students"
              isClicked={clickedNav === "Students" ? true : false}
              icon=" fa-address-card"
            >
              <SingleMenuNaveItem
                text="Show Students"
                url="/showStudents"
                isClicked={clickedNav === "Show Students" ? true : false}
                setClicked={setClickedNv}
              />
              <SingleMenuNaveItem
                text="Add New Student"
                url="/AddStudent"
                isClicked={clickedNav === "Add New Student" ? true : false}
                setClicked={setClickedNv}
              />
              <SingleMenuNaveItem
                text="Search on Students"
                url="/searchStudent"
                isClicked={clickedNav === "Search on Students" ? true : false}
                setClicked={setClickedNv}
              />
            </MenuNaveItem>
            <MenuNaveItem
              text="Course"
              isClicked={clickedNav === "Course" ? true : false}
              icon="fa-book"
            >
              <SingleMenuNaveItem
                text="Show Courses"
                url="/showCourses"
                isClicked={clickedNav === "Show Courses" ? true : false}
                setClicked={setClickedNv}
              />
              <SingleMenuNaveItem
                text="Add New Course"
                url="/addCourse"
                isClicked={clickedNav === "Add New Course" ? true : false}
                setClicked={setClickedNv}
              />
            </MenuNaveItem>
          </ul>
        </div>
      </div>
    </div>
  );
}
