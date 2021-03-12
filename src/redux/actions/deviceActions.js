import * as types from "./actionTypes";
import * as deviceApi from "../../api/deviceApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

// Declare action creator
export function loadDeviceSuccess(devices) {
  return { type: types.LOAD_DEVICES_SUCCESS, devices };
}

export function createDeviceSuccess(device) {
  return { type: types.CREATE_DEVICE_SUCCESS, device };
}

export function updateDeviceSuccess(device) {
  return { type: types.UPDATE_DEVICE_SUCCESS, device };
}

export function deleteDeviceOptimistic(device) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, device };
}

// THUNK
export function loadDevices() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return deviceApi
      .getDevice()
      .then((devices) => {
        dispatch(loadDeviceSuccess(devices));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveDevice(device) {
  return function (dispatch) {
    return deviceApi
      .saveDevice(device)
      .then((savedDevice) => {
        device.id
          ? dispatch(updateDeviceSuccess(savedDevice))
          : dispatch(createDeviceSuccess(savedDevice));
      })
      .catch((error) => {
        // If an error occurs, the API status will still get updated
        // Reflect the call
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteDevice(device) {
  return function (dispatch) {
    dispatch(deleteDeviceOptimistic(device));
    return deviceApi.deleteDevice(device.id);
  };
}
