import * as yup from "yup";

export const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export const productSchema = yup.object().shape({
  title: yup.string().required("Please enter a title"),
  price: yup.number().required("Please enter a price"),
  image_url: yup.string().required("Please enter an image URL"),
  description: yup.string().required("Please enter a description"),
});
