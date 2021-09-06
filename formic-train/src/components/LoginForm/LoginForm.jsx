import React, { useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const LoginForm = ({ loginValidationMethod, getSchemeValidation }) => {
  const ValidationScheme = useMemo(() => {
    return Yup.object({
      login: getSchemeValidation(loginValidationMethod),
      password: Yup.string().max(5, "Need < 5").required(),
    });
  }, [loginValidationMethod]);

  const initialValues = {
    login: "",
    password: "",
  };

  const { handleSubmit, handleChange, touched, values, errors, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ValidationScheme,
      onSubmit: () => {
        alert("форма валидна");
      },
    });

  const keys = Object.keys(initialValues);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <header>login form test</header>
        {keys.map((key) => (
          <>
            <label htmlFor={String(key)}>{String(key)}</label>
            <input
              label={String(key)}
              onChange={handleChange}
              value={values[key]}
              onBlur={handleBlur}
              id={String(key)}
              name={String(key)}
              type="text"
            />
            {touched[key] && errors[key] ? <div>{errors[key]}</div> : null}
          </>
        ))}
        <button type="submit" color="primary" variant="contained">
          Log in
        </button>
      </form>
    </>
  );
};
