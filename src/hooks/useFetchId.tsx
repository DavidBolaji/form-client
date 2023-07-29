import { useState, useEffect } from "react";
import { OptionItem } from "../data/data";

const useFetchId = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [staffId, setStaffId] = useState<OptionItem[]>([]);

  useEffect(() => {
    setLoading((prev) => !prev);
    // Fetch the id.json file from the public folder
    fetch("http://localhost:5173/id.json")
      .then((response) => response.json())
      .then((data) => {
        setStaffId(data);
        setLoading((prev) => !prev);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return { loading, staffId };
};

export default useFetchId;
