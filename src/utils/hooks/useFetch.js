import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint, initial) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    let getData = axios.get(endpoint);
    getData.then((res) => setData(res.data));
  }, [endpoint]);
  return data;
};

export default useFetch;
