import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import useAxios from "../utils/useAxios";
import { PRODUCTS_PATH } from "../utils/constants";
import Item from "../components/Item";
import { Link } from "react-router-dom";
import Spinner from "../assets/Spinner.gif";
import Heading from "../components/Heading";

import "../App.css";

export const Products = () => {
  const [auth] = useContext(AuthContext);
  const history = useHistory();
  const [products, setProducts] = useState(null);
  const http = useAxios();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await http.get(PRODUCTS_PATH);
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  if (!auth) {
    history.push("/login");
  }

  if (!products) {
    return (
      <div className="loading">
        <img src={Spinner} alt="Loading" />;
      </div>
    );
  }

  return (
    <div className="container">
      <Heading title="Products" />

      {products.map((product) => {
        return (
          <Link key={product.id} to={`/edit/${product.id}`}>
            <Item {...product} />
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
