import reactLogo from "./assets/react.svg";
import { Navbar } from "./components/Navbar";
import "./App.css";

import AppRoutes from "./Routes";
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App relative">
        <Navbar />
        <div className="my-5">_</div>
        <AppRoutes />
      </div>
    </UserContext.Provider>
  );
}

export default App;
