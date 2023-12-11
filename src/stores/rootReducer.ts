import { combineReducers } from "redux";
import routeReducer from "../reducers/routeReducer";

const rootReducer = combineReducers({
  route: routeReducer,
});

export default rootReducer;
