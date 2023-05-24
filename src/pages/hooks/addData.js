import axios from "axios";
import { useState } from "react";

export function useAddData(object, controller) {
  const [formData, setFormData] = useState(object);
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendFormData(formData);
  };

  const sendFormData = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:9080/" + controller + "/add",
        formData
      );

      setResult(response.data);

      setFormData(object);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return [formData, handleChange, handleSubmit, result];
}
