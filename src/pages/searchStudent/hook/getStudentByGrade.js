import axios from "axios";

export async function getStudentsByGrade(option, value, value2) {
  try {
    let url =
      "http://localhost:9080/student/search/" +
      option +
      `/${value === "" ? 0 : value}/${value2 === "" ? 100 : value2}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}
