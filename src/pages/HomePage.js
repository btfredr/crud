import { useEffect } from "react";
import { BASE_URL, PRODUCTS_PATH } from "../utils/constants";
import axios from "axios";
import Heading from "../components/Heading";

const HomePage = () => {
  useEffect(() => {
    axios
      .get(`${BASE_URL}${PRODUCTS_PATH}`)
      .then((response) => console.log(response));
  }, []);

  return (
    <div className="container">
      <Heading title="Homepage" />;
    </div>
  );
};

export default HomePage;
