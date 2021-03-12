import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./DeviceList.css";

const DeviceList = ({ devices, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>System Name</th>
        <th>Device type</th>
        <th>Capacity</th>
      </tr>
    </thead>
    <tbody>
      {devices.map((device) => {
        return (
          <tr key={device.id}>
            <td>{device.system_name}</td>
            <td>{device.type}</td>
            <td>{device.hdd_capacity + " GB"}</td>
            <td>
              <button className="btn btn-info">
                <Link className="editBtn" to={"/device/" + device.system_name}>
                  Edit
                </Link>
              </button>
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDeleteClick(device)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

DeviceList.propTypes = {
  devices: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default DeviceList;
