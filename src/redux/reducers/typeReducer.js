import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// All reducers accept state and an action as their arguments
export default function typeReducer(state = initialState.typeDevice, action) {
  switch (action.type) {
    case types.LOAD_TYPES_SUCCESS:
      return action.typeDevice;

    default:
      return state;
  }
}
