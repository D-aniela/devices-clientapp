import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function sortByCapacity(state = initialState.devices, action) {
  switch (action.type) {
    case types.SORT_BY_CAPACITY:
      return {
        ...state,
        devices:
          state.devices.length > 0
            ? [
                ...state.devices.sort(
                  (a, b) => a.hdd_capacity - b.device.hdd_capacity
                ),
              ]
            : state.devices,
      };
    default:
      return state;
  }
}
