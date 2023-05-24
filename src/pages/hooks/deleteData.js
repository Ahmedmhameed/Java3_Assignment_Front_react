import axios from "axios";
import { useState } from "react";

export function useDeleteData(controller, State = [], setState) {
  const [object, setObject] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    sendDeletedData(object);
  };
  const sendDeletedData = async (formData) => {
    try {
      await axios.post(
        "http://localhost:9080/" + controller + "/remove",
        formData
      );

      setState(State.filter((o) => o !== formData));
    } catch (error) {}
  };
  return [handleSubmit, setObject];
}
