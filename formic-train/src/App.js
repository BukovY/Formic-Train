import React from "react";
import { LoginForm } from "./components/LoginForm/";
import { SelectorValidationScheme } from "./components/SelectorValidationScheme/";
import { getValidationScheme } from "./utils/validationFunction";
import { useDispatch, useSelector } from "react-redux";
import { setValidationLogin } from "./redux/actions/changeValidation";
import { onSubmitLoginForm } from "./utils/onSubmit";

function App() {
  const { loginValidationSelector } = useSelector(
    (state) => state.validationSchemeSelectors
  );
  const dispatch = useDispatch();
  const setValidationScheme = (arg) => {
    dispatch(setValidationLogin(arg));
  };
  return (
    <>
      <SelectorValidationScheme setValidationScheme={setValidationScheme} />
      <LoginForm
        loginValidationSelector={loginValidationSelector}
        getSchemeValidation={getValidationScheme}
        onSubmit={onSubmitLoginForm}
      />
    </>
  );
}

export default App;
