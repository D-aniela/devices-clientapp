import React from "react";
import { Route, Switch } from "react-router-dom";
import DevicesPage from "./devices/DevicesPage";
import ManageDevicePage from "./devices/ManageDevicePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/devices" component={DevicesPage} />
        <Route path="/device/:system_name" component={ManageDevicePage} />
        <Route path="/device" component={ManageDevicePage} />
        {/* <Route component={PageNotFound} /> */}
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
