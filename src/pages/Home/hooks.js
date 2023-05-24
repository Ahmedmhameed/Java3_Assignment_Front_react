import axios from "axios";
import { useEffect, useState } from "react";

export function useCount(controller) {
  const [courseCount, setCourseCount] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:9080/" + controller + "/count")
      .then((response) => {
        setCourseCount(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  return courseCount;
}
