import axios from "axios";
import { useEffect, useState } from "react";

export function useDataGetter(controller) {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9080/" + controller + "/")
      .then((response) => {
        setDataArray(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [controller]);
  return dataArray;
}
