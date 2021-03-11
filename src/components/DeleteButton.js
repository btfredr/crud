import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAxios from "../utils/useAxios";

const DeleteButton = ({ id }) => {
  const [error, setError] = useState(null);

  const http = useAxios();
  const history = useHistory();

  const url = `${PRODUCTS_PATH}/${id}`;

  async function handleDelete() {
    try {
      await http.delete(url);
      history.push("/products");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <button type="button" className="delete" onClick="handleDelete">
      {error ? "Error" : "Delete"}
    </button>
  );
};

export default DeleteButton;
