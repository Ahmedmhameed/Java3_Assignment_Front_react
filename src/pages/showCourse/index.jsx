import React, { useEffect, useState } from "react";
import { useDataGetter } from "../hooks/getData";
import { useDeleteData } from "../hooks/deleteData";
import { Link } from "react-router-dom";

export default function ShowCourses() {
  let courses = useDataGetter("course");
  const [coursesState, setCoursesState] = useState();

  let keys = ["id", "name", "room"];
  const [handleSubmit, setObject] = useDeleteData(
    "course",
    coursesState,
    setCoursesState
  );
  useEffect(() => {
    setCoursesState(courses);
  }, [courses]);
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
        </tr>
      </thead>
      <tbody>
        {coursesState &&
          coursesState.map((c) => {
            return (
              <tr key={c.id}>
                {keys.map((key) => (
                  <td key={key}>{c[key]}</td>
                ))}

                <td>
                  <div className="row justify-content-center">
                    <Link
                      to={"/editCourse?id=" + c.id}
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
                      <input type="hidden" name="id" value="" />
                      <input
                        type="submit"
                        className="btn btn-danger ml-2"
                        value="Delete"
                        name="deleteBtn"
                        onClick={() => setObject(c)}
                      />
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
