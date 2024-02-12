import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          {/* <li
            className={activeMenu === "dashboard" ? "active" : ""}
            onClick={() => handleMenuClick("dashboard")}
          >
            Dashboard
          </li> */}
          <li
            className={activeMenu === "users" ? "active" : ""}
            onClick={() => handleMenuClick("users")}
          >
            Users
          </li>
          <li
            className={activeMenu === "country" ? "active" : ""}
            onClick={() => handleMenuClick("country")}
          >
            Country
          </li>
          <li
            className={activeMenu === "state" ? "active" : ""}
            onClick={() => handleMenuClick("state")}
          >
            State
          </li>
          <li
            className={activeMenu === "role" ? "active" : ""}
            onClick={() => handleMenuClick("role")}
          >
            Role
          </li>
          <li
            className={activeMenu === "apartments" ? "active" : ""}
            onClick={() => handleMenuClick("apartments")}
          >
            Apartments
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="navbar">
          <h2>{activeMenu.toUpperCase()}</h2>
        </div>
        <div className="main-content">
          {/* {activeMenu === "dashboard" && <Dashboard />} */}
          {activeMenu === "users" && <Users />}
          {activeMenu === "country" && <Country />}
          {activeMenu === "state" && <State />}
          {activeMenu === "role" && <Role />}
          {activeMenu === "apartments" && <Apartments />}
        </div>
      </div>
    </div>
  );
}

// const Dashboard = () => {
//   return <div>This is the Dashboard</div>;
// };

const Users = () => {
  return <div>This is the Users Page</div>;
};

const Country = () => {
  return <div>This is the Country Page</div>;
};
const State = () => {
  return <div>This is the State Page</div>;
};
const Role = () => {
  return <div>This is the Role Page</div>;
};
const Apartments = () => {
  return <div>This is the Apartments Page</div>;
};

export default App;
