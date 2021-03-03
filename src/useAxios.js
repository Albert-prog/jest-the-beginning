import React, { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState({});
  const [currentUrl, setCurrentUrl] = useState(url);

  useEffect(() => {
    url !== "" &&
      axios.get(currentUrl).then((response) => {
        if (response.status === 200) setData(response.data);
      });
  }, [currentUrl]);

  return [data, setCurrentUrl];
};

export default useAxios;
