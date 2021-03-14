import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// All reducers accept state and an action as their arguments
export default function deviceReducer(state = initialState.devices, action) {
  switch (action.type) {
    case types.CREATE_DEVICE_SUCCESS:
      return [
        ...state,
        {
          ...action.device,
          filteredItems: action.payload,
          devices: action.payload,
        },
      ];

    case types.UPDATE_DEVICE_SUCCESS:
      return state.map((device) =>
        device.id === action.device.id ? action.device : device
      );
    case types.LOAD_DEVICES_SUCCESS:
      return action.devices;

    case types.DELETE_COURSE_OPTIMISTIC:
      // returns true or false predicate
      return state.filter((device) => device.id !== action.device.id);

    default:
      return state;
  }
}
