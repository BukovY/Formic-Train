import { combineReducers, createStore } from "redux";
import valSheme from './reducer/changeValReducer'

const rootReducer = combineReducers({
    valSheme
})

const store = createStore(rootReducer)

export default store