import axios from "axios";

export async function getStudentsByString(option, value) {
  try {
    const response = await axios.get(
      "http://localhost:9080/student/search/" + option + "/" + value
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}
