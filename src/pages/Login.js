import { useState, useContext } from "react";
import { loginSchema } from "../utils/schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL, AUTH_PATH } from "../utils/constants";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(`${BASE_URL}${AUTH_PATH}`, data);
      console.log("response", response.data);
      setAuth(response.data);
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
      history.push("/products");
    }
  };
  return (
    <>
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        {loginError && <p>{loginError}</p>}
        <fieldset disabled={submitting}>
          <div>
            <input
              className="input"
              name="identifier"
              placeholder="Username"
              ref={register}
              type="text"
            />
            {errors.identifier && <p>{errors.identifier.message}</p>}
          </div>
          <div>
            <input
              className="input"
              name="password"
              placeholder="Password"
              ref={register}
              type="password"
            />
            {errors.password && <p>{errors.identifier.password}</p>}
          </div>
          <button type="submit">
            {submitting ? "Logging in..." : "Login"}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default Login;
