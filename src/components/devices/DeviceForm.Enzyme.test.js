import React from "react";
import DeviceForm from "./DeviceForm";
import { shallow } from "enzyme";

function renderDeviceForm(args) {
  const defaultProps = {
    typeDevice: [],
    device: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  //   render the component assign props to component
  return shallow(<DeviceForm {...props} />);
}

it("renders header", () => {
  const wrapper = renderDeviceForm();
  expect(wrapper.find("h2").text()).toEqual("Add Device");
});

it("labels save button as 'Save...' when saving", () => {
  const wrapper = renderDeviceForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
