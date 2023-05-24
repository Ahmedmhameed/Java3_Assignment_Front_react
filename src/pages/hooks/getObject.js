import axios from "axios";
import { useEffect, useState } from "react";

export function useObjectGetter(controller, id) {
  const [object, setObject] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:9080/" + controller + "/" + id)
      .then((response) => {
        setObject(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [controller, id]);

  return object;
}
