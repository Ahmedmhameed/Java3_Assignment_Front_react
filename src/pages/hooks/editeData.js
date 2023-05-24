import axios from "axios";
import { useEffect, useState } from "react";

export function useObjectGetter(controller, id) {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:9080/" + controller + "/" + id)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [controller, id]);

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
        "http://localhost:9080/" + controller + "/update",
        formData
      );
      setResult(response.data);
      setFormData(formData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return [formData, handleChange, handleSubmit, result];
}
