import React from "react";
import DeviceForm from "./DeviceForm";
import renderer from "react-test-renderer";
import { devices, typeDevice } from "./../../../tools/mockData";

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <DeviceForm
      device={devices[0]}
      typeDevice={typeDevice}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
  const tree = renderer.create(
    <DeviceForm
      device={devices[0]}
      typeDevice={typeDevice}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
