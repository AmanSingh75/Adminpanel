import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>minor change to check in the git working or not</p>
      </header>
      <Sidebar/>
    </div>
  );
}

export default App;
