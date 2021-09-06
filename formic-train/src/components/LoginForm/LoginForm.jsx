import React, { useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const LoginForm = ({ valSheme, loginValidation, onSubmit }) => {
  const memorizedValSheme = useMemo(() => {
    return valSheme;
  }, [valSheme]);

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        login: "",
        password: "",
      },
      validationSchema: Yup.object({
        login: loginValidation(memorizedValSheme),
        password: Yup.string().max(5, "Need < 5").required(),
      }),
      onSubmit: ({ login, password }) => {
        onSubmit({ login: login, password: password });
      },
    });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <header>login form test</header>
        <input
          label="Login"
          onChange={handleChange}
          value={values.login}
          onBlur={handleBlur}
          id="login"
          name="login"
          type="text"
        />
        {touched.login && errors.login ? <div>{errors.login}</div> : null}
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
          id="password"
          name="password"
          type="text"
        />
        {touched.password && errors.password ? (
          <div>{errors.password}</div>
        ) : null}
        <button type="submit" color="primary" variant="contained">
          Log in
        </button>
      </form>
    </>
  );
};
