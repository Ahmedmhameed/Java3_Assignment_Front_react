import React, { useEffect, useState } from "react";
import Input from "../../componants/input";
import { useAddData } from "../hooks/addData";
import SuccessAlert from "../../componants/alerts/success";
import ErrorAlert from "../../componants/alerts/error";

export default function CreateCourses() {
  const [formData, handleChange, handleSubmit, result] = useAddData(
    { id: "", name: "", room: "" },
    "course"
  );
  const [showMassage, setShowMassage] = useState(result);
  useEffect(() => {
    setShowMassage(result);
  }, [result]);
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"Course ID"}
        placeholder={"Enter Course ID"}
        type={"number"}
        name="id"
        value={formData.id}
        onChange={handleChange}
      />
      <Input
        label={"Course Name"}
        placeholder={"Enter Course Name"}
        type={"text"}
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        label={"Course Room"}
        placeholder={"Enter Course Room"}
        type={"text"}
        name="room"
        value={formData.room}
        onChange={handleChange}
      />
      <input type="submit" value="Add Course" className="btn btn-info" />
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
