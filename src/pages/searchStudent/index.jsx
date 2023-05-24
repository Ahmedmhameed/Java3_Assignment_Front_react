import React, { useState, useEffect } from "react";
import SearchBar from "../../componants/searchInput";
import { getStudent } from "./hook/getStudent";
import { getStudentsByString } from "./hook/getStudentByString";
import { getStudentsByGrade } from "./hook/getStudentByGrade";
import { Link } from "react-router-dom";
import { useDeleteData } from "../hooks/deleteData";

export default function SearchStudent() {
  const searchMethods = ["id", "name", "major", "grade"];
  const [option, setOption] = useState(searchMethods[0]);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState(null);
  let keys = ["id", "name", "major", "grade"];
  const [handleSubmit, setObject] = useDeleteData("student");
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (option === "id") {
      const data = await getStudent(value);
      setResult(data);
    } else if (["name", "major"].includes(option)) {
      const data = await getStudentsByString(option, value);
      setResult(data);
    } else {
      const data = await getStudentsByGrade(option, value, value2);
      setResult(data);
    }
  };

  useEffect(() => {
    setResult(result);
  }, [result]);

  return (
    <div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          {searchMethods.map((sm) => (
            <option value={sm} key={sm}>
              {sm}
            </option>
          ))}
        </select>
      </div>
      <form onSubmit={handleSubmitForm}>
        {searchMethods.includes(option) && option !== "grade" && (
          <SearchBar
            label={"Search By " + option}
            value={value}
            setValue={setValue}
            placeholder={"Enter " + option}
          />
        )}
        {searchMethods.includes(option) && option === "grade" && (
          <>
            <SearchBar
              label={"Bigger than "}
              value={value}
              setValue={setValue}
              placeholder={"Enter " + option}
            />
            <SearchBar
              label={"Smaller than "}
              value={value2}
              setValue={setValue2}
              placeholder={"Enter " + option}
            />
          </>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {result && (
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
            {result.map((s) => {
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
                        <input type="hidden" name="id" value="" />
                        <input
                          type="submit"
                          className="btn btn-danger ml-2"
                          value="Delete"
                          name="deleteBtn"
                          onClick={() => setObject(s)}
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
      )}
    </div>
  );
}
