import React from "react";

export const SelectorValidationScheme = ({ setValidationScheme }) => {
  return (
    <>
      <p>Выбор длинны валидации для логина</p>
      <select onChange={(ev) => setValidationScheme(ev.target.value)}>
        <option value="def">До 10 символов</option>
        <option value="word5">До 5 символов</option>
        <option value="word2">До 2 символов</option>
      </select>
    </>
  );
};
