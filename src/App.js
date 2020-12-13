import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="flex">
          <Sidebar />
          <Dashboard />
        </div>
      </header>
    </div>
  );
}

export default App;
