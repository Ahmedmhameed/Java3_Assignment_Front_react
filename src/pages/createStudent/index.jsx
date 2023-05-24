import React, { useEffect, useState } from "react";
import { useAddData } from "../hooks/addData";
import Input from "../../componants/input";
import ErrorAlert from "../../componants/alerts/error";
import SuccessAlert from "../../componants/alerts/success";

export default function CreateStudent() {
  const [formData, handleChange, handleSubmit, result] = useAddData(
    { id: "", name: "", major: "", grade: "" },
    "student"
  );
  const [showMassage, setShowMassage] = useState(result);
  useEffect(() => {
    setShowMassage(result);
  }, [result]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"Student ID"}
        placeholder={"Enter Student ID"}
        type={"number"}
        name="id"
        value={formData.id}
        onChange={handleChange}
      />
      <Input
        label={"Student Name"}
        placeholder={"Enter Student Name"}
        type={"text"}
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        label={"Student Major"}
        placeholder={"Enter Student Major"}
        type={"text"}
        name="major"
        value={formData.major}
        onChange={handleChange}
      />
      <Input
        label={"Student Grade"}
        placeholder={"Enter Student Grade"}
        type={"number"}
        name="grade"
        value={formData.grade}
        onChange={handleChange}
      />
      <input type="submit" value="Add Student" className="btn btn-info" />
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
    </form>
  );
}
