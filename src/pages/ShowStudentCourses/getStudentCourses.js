import axios from "axios";
import { useEffect, useState } from "react";

export function useStudentCourses(id) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:9080/studentCourse/studentCourses/${id}`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return [courses, loading];
}
