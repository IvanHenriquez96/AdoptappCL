import reactLogo from "./assets/react.svg";
import { Navbar } from "./components/Navbar";
import "./App.css";

import AppRoutes from "./Routes";

function App() {
  return (
    <div className="App relative">
      <Navbar />
      <div className="my-5">_</div>
      <AppRoutes />
    </div>
  );
}

export default App;
