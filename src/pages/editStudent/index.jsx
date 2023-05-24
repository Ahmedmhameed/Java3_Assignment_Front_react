import React, { useEffect, useState } from "react";
import Input from "../../componants/input";
import { useLocation } from "react-router-dom";
import { useObjectGetter } from "../hooks/editeData";
import ErrorAlert from "../../componants/alerts/error";
import SuccessAlert from "../../componants/alerts/success";

export default function EditStudent() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [formData, handleChange, handleSubmit, result] = useObjectGetter(
    "student",
    id
  );

  const [showMassage, setShowMassage] = useState(result);
  useEffect(() => {
    setShowMassage(result);
  }, [result]);
  return (
    <form onSubmit={handleSubmit}>
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
      <input type="submit" value="Update Student" className="btn btn-info" />
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
