import reactLogo from "./assets/react.svg";
import { Navbar } from "./components/Navbar";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
