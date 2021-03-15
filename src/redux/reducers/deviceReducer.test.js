import deviceReducer from "./deviceReducer";
import * as actions from "../actions/deviceActions";

it("should add device when passed CREATE_DEVICE_SUCCES", () => {
  // arrange
  const initialState = [
    {
      system_name: "A",
    },
    {
      system_name: "B",
    },
  ];

  const newDevice = {
    system_name: "C",
  };

  const action = actions.createDeviceSuccess(newDevice);

  //   reducer, returns newState
  const newState = deviceReducer(initialState, action);

  //   assert
  expect(newState.length).toEqual(3);
  expect(newState[0].system_name).toEqual("A");
  expect(newState[1].system_name).toEqual("B");
  expect(newState[2].system_name).toEqual("C");
});

it("should update device when passed UPDATE_DEVICE_SUCCES", () => {
  // arrange
  const initialState = [
    {
      id: 1,
      system_name: "A",
    },
    {
      id: 2,
      system_name: "B",
    },
    {
      id: 3,
      system_name: "C",
    },
  ];

  const device = { id: 2, system_name: "New Device" };
  const action = actions.updateDeviceSuccess(device);

  //   reducer, returns newState, act
  const newState = deviceReducer(initialState, action);
  const updatedDevice = newState.find((a) => a.id == device.id);
  const untouchedDevice = newState.find((a) => a.id == 1);

  //   assert
  expect(updatedDevice.system_name).toEqual("New Device");
  expect(untouchedDevice.system_name).toEqual("A");
  expect(newState.length).toEqual(3);
});
