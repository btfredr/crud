import { useParams } from "react-router-dom";
import useAxios from "../utils/useAxios";
import { useState, useEffect } from "react";
import Item from "../components/Item";
import { PRODUCTS_PATH } from "../utils/constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../utils/schemas";
import DeleteButton from "../components/DeleteButton";
import Spinner from "../assets/Spinner.gif";

import "../App.css";

const EditProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const http = useAxios();

  const [submitting, setSubmitting] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setUpdateError(null);
    console.log(data);
    try {
      const response = await http.put(`${PRODUCTS_PATH}/${id}`, data);
      console.log(response);
      setProduct(response.data);
      setSuccess(true);
    } catch (error) {
      console.log("error", error);
      setUpdateError(error.toString());
    } finally {
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await http.get(`${PRODUCTS_PATH}/${id}`);
        console.log(response);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="loading">
        <img src={Spinner} alt="Loading" />;
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Edit</h2>
      <Item {...product} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {updateError && <p>{updateError}</p>}
        <fieldset disabled={submitting}>
          <div>
            <input
              className="input"
              name="title"
              placeholder="Title"
              ref={register}
              defaultValue={product.title}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>

          <div>
            <input
              className="input"
              name="price"
              placeholder="Price"
              defaultValue={product.price}
              ref={register}
              type="number"
            />
            {errors.price && <p>{errors.price.message}</p>}
          </div>
          <div>
            <textarea
              className="input"
              name="description"
              placeholder="Description"
              defaultValue={product.description}
              ref={register}
              type="text"
            />
            {errors.description && <p>{errors.description.message}</p>}
          </div>
          <div>
            <input
              className="input"
              name="image_url"
              placeholder="Image URL"
              ref={register}
              defaultValue={product.image_url}
              type="text"
            />
            {errors.image_url && <p>{errors.image_url.message}</p>}
          </div>

          <div className="buttons">
            <button type="submit" className="update">
              {submitting ? "Updating ..." : "Update"}
            </button>
            <DeleteButton id={product.id} />
          </div>
        </fieldset>
      </form>
      {success ? <p>Listing of {product.title} was updated</p> : null}
    </div>
  );
};

export default EditProduct;
