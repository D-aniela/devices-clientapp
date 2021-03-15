import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as deviceActions from "./actions/deviceActions";

// Use Arrange, Act, Assert pattern

it("should handle creating devices", function () {
  //arrange
  const store = createStore(rootReducer, initialState);
  const device = {
    system_name: "Clean Code",
  };

  //   act
  const action = deviceActions.createDeviceSuccess(device);
  store.dispatch(action);

  //assert
  const createdDevice = store.getState().devices[0];
  expect(createdDevice).toEqual(device);
});
