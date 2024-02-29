import { combineReducers } from "redux";
import crud from "./crud";


const root =combineReducers({
    crud :crud
})
export default root;