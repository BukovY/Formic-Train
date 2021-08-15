import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        login: "",
        name: "",
        surname: "",
        password: "",
        passwordRepeat: "",
      },
      validationSchema: Yup.object({
        login: Yup.string().max(10, "Need < 10").required("Required"),
        name: Yup.string().max(10, "Need < 10").required("Required"),
        surname: Yup.string().max(10, "Need < 10").required("Required"),
        password: Yup.string().min(6, "Need > 6").required("Required"),
        passwordRepeat: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Pass not match"
        ),
      }),
      onSubmit: ({ login, password }) => {
        alert(`login ${login} password ${password}`);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <header>login register test</header>
      <label htmlFor="login">Login</label>
      <input
        onChange={handleChange}
        value={values.login}
        onBlur={handleBlur}
        id="login"
        name="login"
        type="text"
      />
      {touched.login && errors.login ? <div>{errors.login}</div> : null}
      <label htmlFor="name">Name</label>
      <input
        onChange={handleChange}
        value={values.name}
        onBlur={handleBlur}
        id="name"
        name="name"
        type="text"
      />
      {touched.name && errors.name ? <div>{errors.name}</div> : null}
      <label htmlFor="surname">Surname</label>
      <input
        onChange={handleChange}
        value={values.surname}
        onBlur={handleBlur}
        id="surname"
        name="surname"
        type="text"
      />
      {touched.surname && errors.surname ? <div>{errors.surname}</div> : null}
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
      <label htmlFor="passwordRepeat">PasswordRepeat</label>
      <input
        onChange={handleChange}
        value={values.passwordRepeat}
        onBlur={handleBlur}
        id="passwordRepeat"
        name="passwordRepeat"
        type="text"
      />
      {touched.passwordRepeat && errors.passwordRepeat ? (
        <div>{errors.passwordRepeat}</div>
      ) : null}
      <button type="submit"> Log in</button>
    </form>
  );
};

export default RegistrationForm;
