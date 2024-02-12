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
          <li
            className={activeMenu === "dashboard" ? "active" : ""}
            onClick={() => handleMenuClick("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={activeMenu === "users" ? "active" : ""}
            onClick={() => handleMenuClick("users")}
          >
            Users
          </li>
          <li
            className={activeMenu === "products" ? "active" : ""}
            onClick={() => handleMenuClick("products")}
          >
            Products
          </li>
         
        </ul>
      </div>
      <div className="content">
        <div className="navbar">
          <h2>{activeMenu.toUpperCase()}</h2>
        </div>
        <div className="main-content">
         
          {activeMenu === "dashboard" && <Dashboard />}
          {activeMenu === "users" && <Users />}
          {activeMenu === "products" && <Products />}
        </div>
      </div>
    </div>
  );
}

const Dashboard = () => {
  return <div>This is the Dashboard</div>;
};

const Users = () => {
  return <div>This is the Users Page</div>;
};

const Products = () => {
  return <div>This is the Products Page</div>;
};

export default App;
