import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
