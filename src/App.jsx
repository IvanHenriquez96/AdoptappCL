import reactLogo from "./assets/react.svg";
import { Navbar } from "./components/Navbar";
import "./App.css";

import AppRoutes from "./Routes";

function App() {
  return (
    <div className="App relative">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
