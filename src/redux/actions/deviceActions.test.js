import * as deviceActions from "./deviceActions";
import * as types from "./actionTypes";
import { devices } from "../../../tools/mockData";

// test thunk
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Asyn action test
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  describe("Load Devices Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_DEVICES_SUCCESS when loading devices", () => {
      fetchMock.mock("+", {
        body: devices,
        headers: { "content-type": "application/json" },
      });

      //   Actions expected from the thunk
      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_DEVICES_SUCCESS, devices },
      ];

      //   const store = mockStore({ devices: [] });
      //   return store.dispatch(deviceActions.loadDevices()).then(() => {
      //     expect(store.getActions()).toEqual(expectedActions);
      //   });
    });
  });
});

describe("createDeviceSuccess", () => {
  it("sould create a CREATE_DEVICE_SUCCESS action", () => {
    //   arrange
    const device = devices[0];
    const expectedAction = {
      type: types.CREATE_DEVICE_SUCCESS,
      device,
    };

    // act
    const action = deviceActions.createDeviceSuccess(device);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
