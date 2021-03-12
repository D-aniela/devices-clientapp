import { combineReducers } from "redux";
import devices from "./deviceReducer";
import typeDevice from "./typeReducer";

const rootReducer = combineReducers({
  devices,
  typeDevice,
});

export default rootReducer;
