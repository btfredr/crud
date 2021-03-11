import { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import useAxios from "../utils/useAxios";

const DeleteButton = ({ id }) => {
  const [error, setError] = useState(null);

  const http = useAxios();
  const history = useHistory();

  const url = `${PRODUCTS_PATH}/${id}`;

  return (
    <button type="button" className="delete" onClick="handleDelete">
      {error ? "Error" : "Delete"}
    </button>
  );
};

export default DeleteButton;
