import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadDevices, saveDevice } from "../../redux/actions/deviceActions";
import { loadTypes } from "../../redux/actions/typeActions";
import PropTypes from "prop-types";
import DeviceForm from "./DeviceForm";
import { newDevice } from "../../../tools/mockData";
import { toast } from "react-toastify";

function ManageDevicePage({
  typeDevice,
  devices,
  loadTypes,
  loadDevices,
  saveDevice,
  history,
  ...props
}) {
  // state variable, setter
  const [device, setDevice] = useState({ ...props.device });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (devices.length === 0) {
      loadDevices().catch((error) => {
        alert("Loading devices failed" + error);
      });
    } else {
      setDevice({ ...props.device });
    }

    if (typeDevice.length === 0) {
      loadTypes().catch((error) => {
        alert("Loading devices failed" + error);
      });
    }
  }, [props.device]);

  function handleChange(event) {
    const { name, value } = event.target;
    setDevice((prevDevice) => ({
      ...prevDevice,
      [name]: name === "id" ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid() {
    const { system_name, type, hdd_capacity } = device;
    const errors = {};

    if (!system_name) errors.system_name = "System Name is required";
    if (!type) errors.type = "Device type is required";
    if (!hdd_capacity) errors.hdd_capacity = "Device capacity is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    saveDevice(device)
      .then(() => {
        toast.success("Device saved");
        // tu use history for <Redirect>
        history.push("/devices");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return (
    <DeviceForm
      device={device}
      errors={errors}
      typeDevice={typeDevice}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageDevicePage.propTypes = {
  device: PropTypes.object.isRequired,
  devices: PropTypes.array.isRequired,
  typeDevice: PropTypes.array.isRequired,
  loadDevices: PropTypes.func.isRequired,
  loadTypes: PropTypes.func.isRequired,
  saveDevice: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getDeviceBySlug(devices, system_name) {
  return devices.find((device) => device.system_name === system_name) || null;
}

// Determines what state is passed to our component via props
function mapStateToProps(state, ownProps) {
  const system_name = ownProps.match.params.system_name;
  const device =
    system_name && state.devices.length > 0
      ? getDeviceBySlug(state.devices, system_name)
      : newDevice;
  return {
    device,
    typeDevice: state.typeDevice,
    devices: state.devices,
  };
}

const mapDispatchToProps = {
  loadDevices,
  loadTypes,
  saveDevice,
};

// Connect returns a function, the function then calls our component
export default connect(mapStateToProps, mapDispatchToProps)(ManageDevicePage);
