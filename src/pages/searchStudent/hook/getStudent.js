import axios from "axios";

export async function getStudent(value) {
  try {
    const response = await axios.get("http://localhost:9080/student/" + value);
    return [response.data];
  } catch (error) {
    return [error];
  }
}
