import React from "react";
import { mount } from "enzyme";
import { typeDevice, newDevice, devices } from "../../../tools/mockData";
import { ManageDevicePage } from "./ManageDevicePage";

function render(args) {
  const defaultProps = {
    typeDevice,
    devices,
    history: {},
    saveDevice: jest.fn(),
    loadTypeDevice: jest.fn(),
    loadDevices: jest.fn(),
    device: newDevice,
    match: {},
  };

  const props = { ...defaultProps, ...args };
  //   render component and it's children memory
  return mount(<ManageDevicePage {...props} />);
}

it("sets error when attempting to save an empty title fiels", () => {
  const wrapper = render();
  //   Simulate interactions like clicks and hovers
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("System Name is required");
});
