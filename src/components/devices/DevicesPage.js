import React from "react";
import { connect } from "react-redux";
import * as deviceActions from "../../redux/actions/deviceActions";
import * as typeActions from "../../redux/actions/typeActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import DeviceList from "./DeviceList";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

class DevicesPage extends React.Component {
  state = {
    redirectToAddDevicePage: false,
  };

  componentDidMount() {
    const { devices, actions } = this.props;

    if (devices.length === 0) {
      actions.loadDevices().catch((error) => {
        alert("Loading devices failed" + error);
      });
    }
  }

  handleDeleteDevice = async (device) => {
    toast.success("Device deleted");
    try {
      await this.props.actions.deleteDevice(device);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddDevicePage && <Redirect to="/device" />}
        <h2>Devices</h2>
        <DeviceList
          onDeleteClick={this.handleDeleteDevice}
          devices={this.props.devices}
        />
        <button
          className="btn btn-info add-device"
          onClick={() => this.setState({ redirectToAddDevicePage: true })}
        >
          Add Device
        </button>
      </>
    );
  }
}

DevicesPage.propTypes = {
  devices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// Determines what state is passed to our component via props
function mapStateToProps(state) {
  return {
    devices: state.devices,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadDevices: bindActionCreators(deviceActions.loadDevices, dispatch),
      loadTypes: bindActionCreators(typeActions.loadTypes, dispatch),
      deleteDevice: bindActionCreators(deviceActions.deleteDevice, dispatch),
    },
  };
}

// Connect returns a function, the function then calls our component
export default connect(mapStateToProps, mapDispatchToProps)(DevicesPage);
