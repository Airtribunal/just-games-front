
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const respose = await fetch(url);
        const json = await respose.json();

        setData(json);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;