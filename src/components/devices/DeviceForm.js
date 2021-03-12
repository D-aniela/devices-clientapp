import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const DeviceForm = ({
  device,
  typeDevice,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{device.id ? "Edit" : "Add"} Device</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}

      <TextInput
        name="system_name"
        label="System Name"
        value={device.system_name}
        onChange={onChange}
        error={errors.system_name}
      />

      <SelectInput
        name="type"
        label="Device Type"
        value={device.type}
        defaultOption="Select Device Type"
        options={typeDevice.map((types) => ({
          value: types.type,
          text: types.name,
        }))}
        onChange={onChange}
        error={errors.type}
      />

      <TextInput
        name="hdd_capacity"
        label="Capacity"
        value={device.hdd_capacity}
        onChange={onChange}
        error={errors.hdd_capacity}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

DeviceForm.propTypes = {
  device: PropTypes.object.isRequired,
  typeDevice: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default DeviceForm;
