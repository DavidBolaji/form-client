import { useState, useEffect } from "react";
import { OptionItem } from "../data/data";
import { IUser } from "../pages/HandleForm";

const useFetchId = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [staffId, setStaffId] = useState<OptionItem[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading((prev) => !prev);

        // Use Promise.all to fetch both URLs concurrently
        const [response, response2] = await Promise.all([
          fetch("https://form-client.netlify.app/id.json"),
          fetch("https://form-5m0m.onrender.com/api/v1/users/id"),
          // fetch("http://localhost:5173/id.json"),
          // fetch("http://localhost:5000/api/v1/users/id"),
        ]);

        const data = await response.json();
        const data2: { data: IUser[]; message: string } =
          await response2.json();

        const data2Ids = new Set(data2.data.map((item: IUser) => item.id));

        const newData = data.filter(
          (item: OptionItem) => !data2Ids.has(item.value)
        );

        setStaffId(newData);
        setLoading((prev) => !prev);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading((prev) => !prev);
      }
    };
    console.log(count);
    fetchData();
  }, [count]);

  const reload = () => setCount((count) => count + 1);

  return { loading, staffId, reload };
};

export default useFetchId;
