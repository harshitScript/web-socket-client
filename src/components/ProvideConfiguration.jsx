import axios from "axios";
import { useEffect, useState } from "react";

const ProvideConfiguration = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URI}/configuration`)
      .then((res) => {
        setTheme(res?.data?.theme);
      })
      .catch((error) => {
        console.log("The error => ", error.message);
      });
  }, []);

  return theme ? children : <></>;
};

export default ProvideConfiguration;
