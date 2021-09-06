import { combineReducers, createStore } from "redux";
import validationSchemeSelectors from "./reducer/validationSchemeSelectorsReducer";

const rootReducer = combineReducers({
  validationSchemeSelectors,
});

const store = createStore(rootReducer);

export default store;
