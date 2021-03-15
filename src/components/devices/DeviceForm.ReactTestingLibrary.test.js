import React from "react";
import { cleanup, render } from "react-testing-library";
import DeviceForm from "./DeviceForm";

afterEach(cleanup);

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
  return render(<DeviceForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderDeviceForm();
  getByText("Add Device");
});

it("should label save buuton as 'Save' when not saving", () => {
  const { getByText } = renderDeviceForm();
  getByText("Save");
});

it("should label save buuton as 'Saving...' when saving", () => {
  const { getByText } = renderDeviceForm({ saving: true });
  getByText("Saving...");
});
