import React, { useEffect, useState } from "react";
import { useDataGetter } from "../hooks/getData";
import { useDeleteData } from "../hooks/deleteData";
import { Link } from "react-router-dom";

export default function ShowStudents() {
  let students = useDataGetter("student");
  const [studentState, setStudentState] = useState();

  let keys = ["id", "name", "major", "grade"];
  const [handleSubmit, setObject] = useDeleteData("student",studentState, setStudentState);
  useEffect(() => {
    setStudentState(students);
  }, [students]);
  return (
    <table className="table mt-3" style={{ textAlign: "center" }}>
      <thead>
        <tr>
          {keys.map((key) => (
            <th scope="col" key={key}>
              {key.toUpperCase()}
            </th>
          ))}
          <th scope="col">{"Action"}</th>
          <th scope="col">{"Student Courses"}</th>
        </tr>
      </thead>
      <tbody>
        {studentState &&
          studentState.map((s) => {
            return (
              <tr key={s.id}>
                {keys.map((key) => (
                  <td key={key}>{s[key]}</td>
                ))}

                <td>
                  <div className="row justify-content-center">
                    <Link
                      to={"/editStudent?id=" + s.id}
                      className="btn btn-info"
                    >
                      Edit
                    </Link>

                    <form
                      action=""
                      method="post"
                      className="delete-form"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="submit"
                        className="btn btn-danger ml-2"
                        value="Delete"
                        onClick={() => {
                          setObject(s);
                        }}
                      />
                    </form>
                  </div>
                </td>
                <td>
                  <Link
                    to={"/studentCourses?id=" + s.id}
                    className="btn btn-info"
                  >
                    Show Student Courses
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
