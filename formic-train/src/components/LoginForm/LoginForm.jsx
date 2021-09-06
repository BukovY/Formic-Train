import React, { useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  login: "",
  password: "",
};

export const LoginForm = ({
  loginValidationMethod,
  getSchemeValidation,
  onSubmit,
}) => {
  const validationSchema = useMemo(() => {
    return Yup.object({
      login: getSchemeValidation(loginValidationMethod),
      password: Yup.string().max(5, "Need < 5").required(),
    });
  }, [loginValidationMethod, getSchemeValidation]);

  const { handleSubmit, handleChange, touched, values, errors, handleBlur } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <header>login form test</header>
        {Object.keys(initialValues).map((el) => (
          <div key={el}>
            <label htmlFor={String(el)}>{String(el)}</label>
            <input
              label={String(el)}
              onChange={handleChange}
              value={values[el]}
              onBlur={handleBlur}
              id={String(el)}
              name={String(el)}
              type="text"
            />
            {touched[el] && errors[el] ? <div>{errors[el]}</div> : null}
          </div>
        ))}
        <button type="submit" color="primary" variant="contained">
          Log in
        </button>
      </form>
    </>
  );
};
