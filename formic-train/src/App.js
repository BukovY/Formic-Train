import React from "react";
import { LoginForm } from "./components/LoginForm/";
import { SelectorValidationSheme } from "./components/SelectorValidationSheme/";
import { changeValSheme } from "./utils/validationFunction";
import { useDispatch, useSelector } from "react-redux";
import { setValidation } from "./redux/actions/changeVal";
import { onSubmitLoginForm } from "./utils/onSubmit";

function App() {
  const { valSheme } = useSelector((state) => state.valSheme);
  const dispatch = useDispatch();
  const setValidationSheme = (arg) => {
    dispatch(setValidation(arg));
  };
  return (
    <>
      <SelectorValidationSheme setValidationSheme={setValidationSheme} />
      <LoginForm
        valSheme={valSheme}
        loginValidation={changeValSheme}
        onSubmit={onSubmitLoginForm}
      />
    </>
  );
}

export default App;
