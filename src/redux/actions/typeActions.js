import * as types from "./actionTypes";
import * as typeApi from "../../api/typeApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

// Declare action creator
export function loadTypesSuccess(typeDevice) {
  return { type: types.LOAD_TYPES_SUCCESS, typeDevice };
}

// THUNK
export function loadTypes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return typeApi
      .getTypes()
      .then((devices) => {
        dispatch(loadTypesSuccess(devices));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
