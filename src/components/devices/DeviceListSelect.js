import React, { Component } from "react";
import Select from "react-select";

const options = [
  { label: "MAC", value: "1" },
  { label: "Windows Server", value: "2" },
  { label: "Windows Workstation", value: "3" },
];

const options2 = [
  { label: "All", value: "1_" },
  { label: "System Name", value: "2_" },
  { label: "Capacity", value: "3_" },
];

class DeviceListSelect extends React.Component {
  state = {
    selectedOption: null,
    selectedOption_: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(selectedOption);
  };

  handleChange_ = (selectedOption_) => {
    this.setState({ selectedOption_ });
    console.log(selectedOption_);
  };

  render() {
    const { selectedOption } = this.state;
    const { selectedOption_ } = this.state;
    return (
      <div>
        <div className="deviceType">
          <label>Device Type:</label>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
        <div className="sortBy">
          <label>Sort by:</label>
          <Select
            value={selectedOption_}
            onChange={this.handleChange_}
            options={options2}
          />
        </div>
      </div>
    );
  }
}

export default DeviceListSelect;
