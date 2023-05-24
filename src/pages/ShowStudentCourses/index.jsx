import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useObjectGetter } from "../hooks/getObject";
import { useDataGetter } from "../hooks/getData";
import RoundedButton from "./roundedButton";
import axios from "axios";
import { useStudentCourses } from "./getStudentCourses";
import SuccessAlert from "../../componants/alerts/success";
import ErrorAlert from "../../componants/alerts/error";
export default function StudentCourses() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [rCourses, loading] = useStudentCourses(id);
  const student = useObjectGetter("student", id);
  const courses = useDataGetter("course");
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [showMassage, setShowMassage] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    let newStudentCourses = registeredCourses.map((rc) => ({
      id: {
        studentId: id,
        courseId: rc.id,
      },
      student: {
        ...student,
      },
      course: {
        ...rc,
      },
      enrollmentDate: new Date(),
    }));

    axios
      .post(
        "http://localhost:9080/studentCourse/addAll/" + id,
        newStudentCourses
      )
      .then((response) => {
        setShowMassage(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    setRegisteredCourses(rCourses);
  }, [rCourses]);

  return (
    <div>
      {!loading && (
        <>
          <div>
            {courses.map((c) => (
              <RoundedButton
                course={c}
                key={c.id}
                setRegisteredCourses={setRegisteredCourses}
                registeredCourses={rCourses}
                registeredCoursesState={registeredCourses}
              />
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="submit"
              value="Register"
              className=" btn btn-primary"
            />
          </form>
          {showMassage === "success" && (
            <SuccessAlert
              title={"Success Operation"}
              body="The Change On Student Courses is applied"
              setShowMassage={setShowMassage}
            />
          )}
          {showMassage === "error" && (
            <ErrorAlert
              title={"Error Operation"}
              body="The Change On Student Courses did not apply"
              setShowMassage={setShowMassage}
            />
          )}
        </>
      )}
    </div>
  );
}
