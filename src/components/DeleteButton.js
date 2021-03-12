import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAxios from "../utils/useAxios";
import { PRODUCTS_PATH } from "../utils/constants";

const DeleteButton = ({ id }) => {
  const [error, setError] = useState(null);
  const [render, setRender] = useState(false);

  const http = useAxios();
  const history = useHistory();

  const url = `${PRODUCTS_PATH}/${id}`;

  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      try {
        await http.delete(url);
        alert("Product has been deleted succesfully.");
      } catch (error) {
        setError(error);
      } finally {
        setRender(render + 1);
        history.push("/products");
      }
    }
  }

  return (
    <button type="button" className="delete" onClick={() => handleDelete(id)}>
      {error ? "Error" : "Delete"}
    </button>
  );
};

export default DeleteButton;
